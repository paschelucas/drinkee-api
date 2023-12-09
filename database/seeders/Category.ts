import Database from '@ioc:Adonis/Lucid/Database';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run () {
    await Database.table('categories').insert([
      { name: 'ordinary_drink' },
      { name: 'cocktail' },
      { name: 'party_drink' },
      { name: 'shot' },
      { name: 'soft_drink' },
      { name: 'coffee_tea' },
    ]);
  }
}
