// app/Models/Bebida.ts
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Category from './Category';

export default class Drink extends BaseModel {
    @column({ isPrimary: true })
    public id: number;

    @column()
    public name: string;

    @column()
    public recipe: string;

    @column()
    public categoryId: number;

    @column()
    public imageUrl: string;

    @belongsTo(() => Category)
    public category: BelongsTo<typeof Category>;
}
