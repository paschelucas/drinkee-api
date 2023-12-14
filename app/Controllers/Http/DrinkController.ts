import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drink from 'App/Models/Drink';
import DrinkService from "App/Services/DrinkService";

export default class DrinksController {
  private drinkService = new DrinkService();

  public async index(): Promise<Drink[]> {
    return this.drinkService.index();
  }

  public async getById({ params }: HttpContextContract): Promise<Drink> {
    const { id } = params

    return this.drinkService.getById(id);
  }

  public async search({ request }: HttpContextContract): Promise<Drink[]> {
    const name = request.input("name");

    return this.drinkService.search(name);
  }

  public async searchInsideCategory({ request, params }: HttpContextContract): Promise<Drink[]> {
    const name = request.input("name");
    const { categoryId } = params

    return this.drinkService.searchInsideCategory(categoryId, name);
  }
}
