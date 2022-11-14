import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module';

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
        ArticleModule,
        CategoryModule
    ]
})
export class AppModule {}
