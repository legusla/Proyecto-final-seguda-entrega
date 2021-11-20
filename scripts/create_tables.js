const { options, sqliteOptions } = require('../src/models/databases');

const knexMySQL = require('knex')(options);
const knexSQLite = require('knex')(sqliteOptions);

knexMySQL.schema.createTable('products', (table) => {
  table.increments('id');
  table.string('name');
  table.integer('description');
  table.integer('code');
  table.integer('photo');
  table.integer('price');
  table.integer('stock');
})
  .then(() => console.log('Table created'))
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knexMySQL.destroy())

knexSQLite.schema.createTable('messages', (table) => {
    table.increments('id');
    table.string('name');
    table.string('messages');
})
  .then(() => console.log('Table created'))
  .catch((error) => { console.error(error); throw error; })
  .finally(() => knexSQLite.destroy())  