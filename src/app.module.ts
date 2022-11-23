import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module'
import { UploadModule } from './upload/upload.module'
import { MenuModule } from './menu/menu.module'
import { MetaModule } from './meta/meta.module'
import { TagModule } from './tag/tag.module';

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
        ArticleModule,
        CategoryModule,
        UploadModule,
        MenuModule,
        MetaModule,
        TagModule
    ]
})
export class AppModule {}
