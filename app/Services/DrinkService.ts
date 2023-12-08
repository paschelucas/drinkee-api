import Drink from "App/Models/Drink";

export default class DrinkService {
  public async index(): Promise<Drink[]> {
    return Drink.query().select("id", "name", "recipe", "imageUrl");
  }

  public async getById(id: number): Promise<Drink> {
    return Drink.findOrFail(id);
  }

  public async search(name: string): Promise<Drink[]> {
    return Drink.query()
      .where("name", "ilike", `%${name}%`)
      .select("id", "name", "recipe", "imageUrl");
  }
}
