import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HasMany } from '@ioc:Adonis/Lucid/Orm';
import Category from 'App/Models/Category';
import Drink from 'App/Models/Drink';
import CategoryService from "App/Services/CategoryService";
import { CategoryControllerContract } from 'App/interfaces/Category/CategoryControllerContract';

export default class CategoryController implements CategoryControllerContract {
  private categoryService = new CategoryService()

  public async index(): Promise<Category[]> {
    return this.categoryService.index()
  }

  public async getById({params}: HttpContextContract): Promise<Category> {
    return this.categoryService.getById(params.id)
  }

  public async getDrinksByCategory({params}: HttpContextContract): Promise<HasMany<typeof Drink>> {
    return this.categoryService.getDrinksByCategory(params.id)
  }
}
