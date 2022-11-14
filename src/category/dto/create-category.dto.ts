import { IsNotEmpty } from 'class-validator'

export class CreateCategoryDto {
    @IsNotEmpty({ message: '类别名称不能为空' })
    title: string
}
