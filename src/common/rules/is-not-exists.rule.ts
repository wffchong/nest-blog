import { PrismaClient } from '@prisma/client'
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

export function IsNotExists(table: string, validationOptions?: ValidationOptions) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'IsNotExists',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table],
            options: validationOptions,
            validator: {
                async validate(value: string, args: ValidationArguments) {
                    const prisma = new PrismaClient()
                    const res = await prisma[table].findFirst({
                        where: {
                            [args.property]: value
                        }
                    })
                    return !Boolean(res)
                }
            }
        })
    }
}
