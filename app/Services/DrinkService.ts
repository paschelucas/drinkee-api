import { NotFoundException } from "App/Exceptions/ServiceExceptions";
import Category from "App/Models/Category";
import Drink from "App/Models/Drink";

export default class DrinkService {
  public async index(): Promise<Drink[]> {
    return Drink.query().select(
      "id",
      "name",
      "recipe",
      "imageUrl",
      "categoryId"
    );
  }

  public async getById(id: number): Promise<Drink> {
    try {
      return await Drink.findOrFail(id);
    } catch (error) {
      throw new NotFoundException("Bebida inexistente!");
    }
  }

  public async search(name: string): Promise<Drink[]> {
    return Drink.query()
      .where("name", "ilike", `%${name}%`)
      .select("id", "name", "recipe", "imageUrl", "categoryId");
  }

  public async searchInsideCategory(
    category: number,
    name: string
  ): Promise<Drink[]> {
    const selectedCategory = await Category.findOrFail(category);

    return Drink.query()
      .where("name", "ilike", `%${name}%`)
      .andWhere("categoryId", selectedCategory.id)
      .select("id", "name", "recipe", "imageUrl", "categoryId");
  }
}
