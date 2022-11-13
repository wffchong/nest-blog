import { PrismaService } from '@/prisma/prisma.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { user } from '@prisma/client'
import { hash, verify } from 'argon2'
import LoginDto from './dto/login.dto'
import RegisterDto from './dto/register.dto'

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) {}

    async register(dto: RegisterDto) {
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                password: await hash(dto.password)
            }
        })

        const res = this.token(user)
        console.log(res)
        return res
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                name: dto.name
            }
        })

        if (!(await verify(user.password, dto.password))) {
            throw new BadRequestException('密码输入错误')
        }
        return this.token(user)
    }

    private async token({ id, name }: user) {
        return {
            token: await this.jwt.signAsync({
                name,
                sub: id
            })
        }
    }
}
