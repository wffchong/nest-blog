import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'
import Validate from './common/validata'
import { TransformInterceptor } from './transform.interceptor'

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    app.useGlobalPipes(new Validate())
    app.useGlobalInterceptors(new TransformInterceptor())
    // 设置前缀
    app.setGlobalPrefix('api')
    // 设置文件上传后的静态资源目录
    app.useStaticAssets(join(__dirname, '../uploads'), {
        prefix: '/uploads'
    })
    await app.listen(3000)
}
bootstrap()
