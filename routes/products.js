const express = require('express')
const router = express.Router()
//importing in Product model
const {Product} = require('../models')
//import forms
const {createProductForm, bootstrapField} = require('../forms')

router.get('/', async (req,res)=>{
    let products = await Product.collection().fetch()

    res.render('products/index', {
        'products': products.toJSON()
    })
})

router.get('/create',(req,res) =>{
    const productForm = createProductForm();
    res.render('products/create',{
        'form':productForm.toHTML(bootstrapField)
    })
})

module.exports = router