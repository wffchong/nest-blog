import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import RegisterDto from './dto/register.dto'

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async register(dto: RegisterDto) {
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password: await hash(dto.password)
            }
        })

        return user
    }
}
