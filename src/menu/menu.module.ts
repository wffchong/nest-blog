import { Module } from '@nestjs/common'
import { MenuService } from './menu.service'
import { MenuController } from './menu.controller'
import { MetaModule } from '@/meta/meta.module'
import { MetaService } from '@/meta/meta.service'

@Module({
    imports: [MetaModule],
    controllers: [MenuController],
    providers: [MenuService, MetaService]
})
export class MenuModule {}
