import { MetaService } from '@/meta/meta.service'
import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateMenuDto } from './dto/create-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto'

@Injectable()
export class MenuService {
    constructor(private readonly prisma: PrismaService, private readonly meta: MetaService) {}

    create(createMenuDto: CreateMenuDto) {
        return 'This action adds a new menu'
    }

    async findAll() {
        return await this.prisma.menu.findMany({
            include: {
                meta: true
            }
        })
    }

    async findOne(id: number) {
        return await this.prisma.menu.findFirst({
            where: {
                id
            }
        })
    }

    update(id: number, updateMenuDto: UpdateMenuDto) {
        return `This action updates a #${id} menu`
    }

    remove(id: number) {
        return `This action removes a #${id} menu`
    }
}
