const express = require('express');
//const ProductDaoMongoDB = require('../daos/products/ProductDaoMongoDB');

// importo el dao que exporte en el /daos/index.js
const { productDao } = require('../daos')
const isAdmin = require('../middlewares/isAdmin');
const { getAllProducts, createProduct, getIdProduct, updateProduct, deleteProduct } = require('../models/product');

const productsRouter = express.Router();

 productDao = new ProductDao();

productsRouter.get('/', async (req, res) => {
   //const data = await getAllProducts();
   const data = await productDao.getAll();

   res.send({ data });
});

productsRouter.get('/:id?', async (req, res) => {
    const productId = req.params.id;
    //const list = await getIdProduct(productId);
    const data = await productDao.getById(productId);

    res.send({ data: list });   
});

//ACCESO PARA ADMIN

//crea un producto nuevo
productsRouter.post('/', isAdmin, async (req, res) => {
    const newProduct = req.body;
    //const idProductSaved = await createProduct(newProduct);
    const idProductSaved = await productDao.create(newProduct);

    res.send({ data: idProductSaved });
});

//actualiza un producto por su id
productsRouter.put('/:id', isAdmin, async (req, res) => {
    const idUpdatedProduct = req.params.id;
    const updatedProduct = req.body;
    //const idProductUpdated = await updateProduct(idUpdatedProduct, updatedProduct);
    const idProductUpdated = await update(idUpdatedProduct, updatedProduct);

    res.send({ data: idProductUpdated });
});

//Borra un producto por su id
productsRouter.delete('/:id', isAdmin, async (req, res) => {
    const idDelete = req.params.id;
    //const idDeleteProduct = await deleteProduct(idDelete);
    const idDeleteProduct = await deleteById(idDelete);

    res.send({ data: idDeleteProduct});
});


module.exports = productsRouter;

