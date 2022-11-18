import { Exclude, Transform } from 'class-transformer'
import { MetaEntity } from '@/meta/entities/meta.entity'

export class MenuEntity {
    //排除属性
    @Exclude()
    metaId: number

    // 删除meta里面的id
    @Transform(({ value }) => {
        delete value.id
        return value
    })
    meta: MetaEntity

    constructor(partial: Partial<MenuEntity>) {
        Object.assign(this, partial)
    }
}
