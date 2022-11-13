import { IsExistsRule } from '@/common/rules/is-exists.rule'
import { IsNotEmpty } from 'class-validator'

export default class LoginDto {
    @IsNotEmpty({ message: '用户名不能为空' })
    @IsExistsRule('user', { message: '该用户不存在' })
    name: string

    @IsNotEmpty({ message: '密码不能为空' })
    password: string
}
