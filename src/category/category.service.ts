import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Injectable()
export class CategoryService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createCategoryDto: CreateCategoryDto) {
        return await this.prisma.category.create({
            data: {
                title: createCategoryDto.title
            }
        })
    }

    // 获取所有的分类
    async findAll() {
        const data = await this.prisma.category.findMany({
            include: {
                articles: true
            }
        })

        return data.map((item) => {
            return {
                id: item.id,
                title: item.title,
                articleCount: item.articles.length
            }
        })
    }

    async findOne(id: number) {
        return await this.prisma.category.findFirst({
            where: {
                id
            }
        })
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return await this.prisma.category.update({ where: { id }, data: updateCategoryDto })
    }

    async remove(id: number) {
        return await this.prisma.category.delete({ where: { id } })
    }
}
