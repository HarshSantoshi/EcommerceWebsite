const express = require('express');
const Router = new express.Router();

const Products = require('../models/productSchema');

//getproductsdata api
Router.get('/getproducts',async(req,res)=>{
    try {
        const productsData = await Products.find();
        // console.log("From postman",productsData);
        res.status(201).json(productsData);
    } catch (error) {
        console.log("error", error.message);
    }
})
module.exports = Router;