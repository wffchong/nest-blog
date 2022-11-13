import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import LoginDto from './dto/login.dto'
import registerDto from './dto/register.dto'

@Controller()
export class AuthController {
    constructor(private readonly auth: AuthService) {}

    @Post('register')
    register(@Body() dto: registerDto) {
        return this.auth.register(dto)
    }

    @Post('login')
    login(@Body() dto: LoginDto) {
        return this.auth.login(dto)
    }
}
