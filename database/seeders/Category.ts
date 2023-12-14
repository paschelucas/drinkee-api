import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Category from "App/Models/Category";

export default class extends BaseSeeder {
  public async run() {
    const uniqueKey = "id";
    await Category.updateOrCreateMany(uniqueKey, [
      { name: "ordinary_drink" },
      { name: "cocktail" },
      { name: "party_drink" },
      { name: "shot" },
      { name: "soft_drink" },
      { name: "coffee_tea" },
    ]);
  }
}
