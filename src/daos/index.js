const ProductDaoMongoDB = require('./products/ProductDaoMongoDB');
const ProductDaoMemory = require('./products/ProductDaoMemory');
const ProductDaoFirestore = require('./products/ProductDaoFirestore');
const ProductDaoFile = require('./products/ProductDaoFile');

const daos = {}
// si seteamos mongo vamos a exportar los daos de mongo
if (process.env.storage === 'mongodb') {
  daos['productDao'] = ProductDaoMongoDB;
}

// si seteamos memoria vamos a exportar los daos de memoria
if (process.env.storage === 'memory') {
  daos['productDao'] = ProductDaoMemory;
}

// si seteamos firestore vamos a exportar los daos de firestore
if (process.env.storage === 'firestore') {
  daos['productDao'] = ProductDaoFirestore;
}

// si seteamos archivo vamos a exportar los daos de archivo
if (process.env.storage === 'file') {
  daos['productDao'] = ProductDaoFile;
}

module.exports = daos;