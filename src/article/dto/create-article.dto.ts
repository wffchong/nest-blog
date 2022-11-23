import { IsNotEmpty } from 'class-validator'

export class CreateArticleDto {
    @IsNotEmpty({ message: '文章标题不能为空' })
    title: string

    @IsNotEmpty({ message: '文章内容不能为空' })
    content: string

    @IsNotEmpty({ message: '文章分类不能为空' })
    categoryId: number

    @IsNotEmpty({ message: '文章标签不能为空' })
    tagIds: string
}
