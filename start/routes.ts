/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.group(() => {
    Route.get('/categories', 'CategoryController.index');
    Route.get('/categories/:id', 'CategoryController.getById');
    Route.get('/categories/:id/drinks', 'CategoryController.getDrinksByCategory')
  });

  Route.group(() => {
    Route.get('/drinks', 'DrinkController.index')
    Route.get('/drinks/search', 'DrinkController.search')
    Route.get('/drinks/:id', 'DrinkController.getById')
  })

}).prefix('api')

