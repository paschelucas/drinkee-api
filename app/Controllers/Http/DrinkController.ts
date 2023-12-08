import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drink from 'App/Models/Drink';
import DrinkService from "App/Services/DrinkService";

export default class DrinksController {
  private drinkService = new DrinkService();

  public async index(): Promise<Drink[]> {
    return this.drinkService.index();
  }

  public async getById({ params }: HttpContextContract): Promise<Drink> {
    return this.drinkService.getById(params.id);
  }

  public async search({ request }: HttpContextContract): Promise<Drink[]> {
    const name = request.input("name");

    return this.drinkService.search(name);
  }
}
