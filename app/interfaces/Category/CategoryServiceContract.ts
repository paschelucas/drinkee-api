import { HasMany } from "@ioc:Adonis/Lucid/Orm";
import Category from "App/Models/Category";
import Drink from "App/Models/Drink";

export interface CategoryServiceContract {
  index(): Promise<Category[]>;

  getById(id: number): Promise<Category>;
  
  getDrinksByCategory(id: number): Promise<HasMany<typeof Drink>>;
}
