import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { ArticleModule } from './article/article.module'

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
        ArticleModule
    ]
})
export class AppModule {}
