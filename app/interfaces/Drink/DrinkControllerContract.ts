import Drink from "App/Models/Drink";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export interface DrinkControllerContract {
  index(): Promise<Drink[]>;

  getById(context: HttpContextContract): Promise<Drink>;

  search(context: HttpContextContract): Promise<Drink[]>;
}
