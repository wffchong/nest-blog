import { IsConfirm } from '@/common/rules/is-confirm-rule'
import { IsNotExists } from '@/common/rules/is-not-exists.rule'
import { IsNotEmpty } from 'class-validator'

export default class RegisterDto {
    @IsNotEmpty({ message: '用户名不能为空' })
    @IsNotExists('user', { message: '该用户已经被注册过' })
    name: string

    @IsNotEmpty({ message: '密码不能为空' })
    @IsConfirm({ message: '两次密码不一致' })
    password: string

    @IsNotEmpty({ message: '确认密码不能为空' })
    password_confirm: string
}
