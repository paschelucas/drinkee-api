import { test } from "@japa/runner";
import CategoryService from "App/Services/CategoryService";

test('Deve retornar a lista de categorias', async (client) => {
  const categoryService = new CategoryService()

  const categories = await categoryService.index()

  client.assert.lengthOf(categories, 6)
})
