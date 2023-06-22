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

//get data for individual item
Router.get("/getproductsone/:id" , async(req , res)=>{
    try {
        const {id} = req.params;
        const individualData = await Products.findOne({id:id});
        res.status(200).json(individualData);
    } catch (error) {
        res.status(400).json(individualData);
    }
})