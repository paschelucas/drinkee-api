import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'drinks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('recipe');
      table.integer('category_id').unsigned().references('categories.id').onDelete('CASCADE');
      table.string('image_url');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
