import Drink from "App/Models/Drink";

export interface DrinkServiceContract {
  index(): Promise<Drink[]>;

  getById(id: number): Promise<Drink>;

  search(name: string): Promise<Drink[]>
}
