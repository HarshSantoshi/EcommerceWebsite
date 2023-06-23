const express = require('express');
const Router = new express.Router();
const Products = require('../models/productSchema');
const USER = require('../models/userSchema');

const bcrypt = require('bcryptjs');
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
//Create Account for the user
Router.post("/signup" , async(req,res)=>{
    // console.log(req.body);
    const {fname , email , mobile , password , cpassword} = req.body;
    if(!fname || !email || !mobile || !password || !cpassword){
        res.status(422).json({error :"Fill all the details"});
        console.log("Some Fields are not filled");
    };
    try {
        const preuser = await USER.findOne({email:email});
        if(preuser){
            res.status(422).json({
                error :"User already exist with same email id "
            })
        }
        else if(password!=cpassword){
            res.status(422).json({
                error :"Password does not matches "
            })
        }
        else{
            const newUser = new USER({
                fname , email , mobile , password , cpassword
            });
            const storeData = await newUser.save();
            console.log(storeData);
            res.status(201).json(storeData);
        }
    } catch (error) {
        
    }
})
module.exports = Router;