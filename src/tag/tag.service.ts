import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'

@Injectable()
export class TagService {
    constructor(private readonly prisma: PrismaService) {}
    create(createTagDto: CreateTagDto) {
        return 'This action adds a new tag'
    }

    findAll() {
        return this.prisma.tag.findMany()
    }

    findOne(id: number) {
        return `This action returns a #${id} tag`
    }

    update(id: number, updateTagDto: UpdateTagDto) {
        return `This action updates a #${id} tag`
    }

    remove(id: number) {
        return `This action removes a #${id} tag`
    }
}
