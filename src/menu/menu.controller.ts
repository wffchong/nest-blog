import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    ClassSerializerInterceptor,
    SerializeOptions
} from '@nestjs/common'
import { MenuService } from './menu.service'
import { CreateMenuDto } from './dto/create-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto'
import { Auth } from '@/auth/decorators/auth.decorators'
import { MenuEntity } from './entities/menu.entity'

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Post()
    create(@Body() createMenuDto: CreateMenuDto) {
        return this.menuService.create(createMenuDto)
    }

    @Auth()
    @Get('list')
    @UseInterceptors(ClassSerializerInterceptor)
    async findAll() {
        const menuList = await this.menuService.findAll()
        const res = []
        for (let i = 0; i < menuList.length; i++) {
            res.push(new MenuEntity(menuList[i]))
        }
        return res
    }

    @Get('list/:id')
    @UseInterceptors(ClassSerializerInterceptor)
    async findOne(@Param('id') id: string) {
        const res = await this.menuService.findOne(+id)
        return new MenuEntity(res)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
        return this.menuService.update(+id, updateMenuDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.menuService.remove(+id)
    }
}
