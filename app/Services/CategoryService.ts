import { HasMany } from "@ioc:Adonis/Lucid/Orm";
import { NotFoundException } from "App/Exceptions/ServiceExceptions";
import Category from "App/Models/Category";
import Drink from "App/Models/Drink";
import { CategoryServiceContract } from "App/interfaces/Category/CategoryServiceContract";

export default class CategoryService implements CategoryServiceContract {
  public async index(): Promise<Category[]> {
    return Category.query().select('id', 'name')
  }

  public async getById(id: number): Promise<Category> {
    try {
      return await Category.findOrFail(id)
    } catch (error) {
      throw new NotFoundException('Categoria inexistente!')
    }
  }

  public async getDrinksByCategory(id: number): Promise<HasMany<typeof Drink>> {
    const category = await Category.query()
      .where('id', id)
      .preload('drinks', (query) => {
        query.select('id', 'name', 'recipe', 'imageUrl')
      })
      .firstOrFail()

    return category.drinks
  }
}
