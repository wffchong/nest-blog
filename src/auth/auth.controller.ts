import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import registerDto from './dto/register.dto'

@Controller()
export class AuthController {
    constructor(private readonly auth: AuthService) {}

    @Post('register')
    register(@Body() dto: registerDto) {
        return this.auth.register(dto)
    }
}
