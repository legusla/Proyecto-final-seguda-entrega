const options = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root123',
    database: 'testdb'
  },
};

const sqliteOptions = {
  client: 'sqlite3',
  connection: { filename: './DB/ecommerce.sqlite'},
  useNullAsDefault: true   
};

module.exports = { 
  options,
  sqliteOptions
};