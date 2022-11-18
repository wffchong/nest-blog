export class MetaEntity {
    constructor(partial: Partial<MetaEntity>) {
        Object.assign(this, partial)
    }
}
