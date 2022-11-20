import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { map } from 'rxjs/operators'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        const response = context.switchToHttp().getResponse()
        const code = response.statusCode
        return next.handle().pipe(
            map((data) => {
                // console.log(data)
                // return data?.meta ? { data, code, msg: '成功' } : { data, code, msg: '成功' }
                return { data, code, msg: '成功' }
            })
        )
    }
}
