import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { HasMany } from "@ioc:Adonis/Lucid/Orm";
import Category from "App/Models/Category";
import Drink from "App/Models/Drink";

export interface CategoryControllerContract {
  index(): Promise<Category[]>;

  getById(context: HttpContextContract): Promise<Category>;

  getDrinksByCategory(
    context: HttpContextContract
  ): Promise<HasMany<typeof Drink>>;
}
