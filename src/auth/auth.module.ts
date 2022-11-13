import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.get('TOKEN_SECRET'),
                    signOptions: { expiresIn: '100d' }
                }
            }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
