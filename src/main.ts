import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import Validate from './common/validata'
import { TransformInterceptor } from './transform.interceptor'

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    app.useGlobalPipes(new Validate())
    app.useGlobalInterceptors(new TransformInterceptor())
    // 设置前缀
    app.setGlobalPrefix('api')
    await app.listen(3000)
}
bootstrap()
