import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Drink from './Drink';

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string;

  @hasMany(() => Drink)
  public drinks: HasMany<typeof Drink>;
}
