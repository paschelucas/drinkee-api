import { test } from "@japa/runner";
import CategoryService from "App/Services/CategoryService";

test('Deve retornar a lista de bebidas por categoria', async (client) => {
  const categoryId = 1;
  const categoryService = new CategoryService();
  const drinks = await categoryService.getDrinksByCategory(categoryId);
  client.assert.lengthOf(drinks, 3);
});
