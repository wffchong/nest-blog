import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Injectable()
export class ArticleService {
    constructor(private readonly prisma: PrismaService, private readonly config: ConfigService) {}

    // 创建文章
    async create(createArticleDto: CreateArticleDto) {
        const article = await this.prisma.article.create({
            data: {
                title: createArticleDto.title,
                content: createArticleDto.content,
                categoryId: +createArticleDto.categoryId,
                tagIds: createArticleDto.tagIds
            }
        })
        return {
            ...article,
            tagIds: JSON.parse(article.tagIds)
        }
    }

    // 分页查询
    async findAll(args: Record<string, any>) {
        // 每页条数
        const row = args.pageSize ?? this.config.get('ARTICLE_PAGE_ROW')
        // 页码数
        const page = args.page ? args.page : 1

        const articles = await this.prisma.article.findMany({
            skip: (page - 1) * row,
            take: +row,
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ]
        })

        const result = articles.map((article) => {
            return {
                ...article,
                tagIds: JSON.parse(article.tagIds)
            }
        })

        const total = await this.prisma.article.count()

        return {
            meta: {
                current_page: +page,
                page_row: +row,
                total,
                total_page: Math.ceil(total / row) // 当前页
            },
            dataList: result
        }
    }

    // 查询单条文章
    async findOne(id: number) {
        console.log(id)
        const result = await this.prisma.article.findFirst({
            where: {
                id
            }
        })
        return {
            ...result,
            tagIds: JSON.parse(result.tagIds)
        }
    }

    // 更新文章
    async update(id: number, updateArticleDto: UpdateArticleDto) {
        return await this.prisma.article.update({
            where: { id },
            data: {
                title: updateArticleDto.title,
                content: updateArticleDto.content
            }
        })
    }

    // 删除文章
    async remove(id: number) {
        return await this.prisma.article.delete({
            where: {
                id
            }
        })
    }

    // 获取最新文章--返回五条最新添加的
    async findLast(num: number) {
        const articles = await this.prisma.article.findMany({
            take: -num
        })

        const result = articles.map((article) => {
            return {
                ...article,
                tagIds: JSON.parse(article.tagIds)
            }
        })
        return result
    }
}
