const bookshelf = require('../bookshelf')

//creating a model for products table
//first argument is name of model
//second arguemnt is config object
const Product = bookshelf.model('Product', {
    tableName:'products' 
    //product model is using 'products' table --  this is a mapping
})

module.exports = {
    Product
}