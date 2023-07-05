const express = require('express');
const Router = new express.Router();
const Products = require('../models/productSchema');
const USER = require('../models/userSchema');
const authenticate = require("../middleware/authenticate")
const bcrypt = require('bcryptjs');
const PaymentController = require('../controllers/PaymentController')
//getproductsdata api
Router.get('/getproducts', async (req, res) => {
    try {
        const productsData = await Products.find();
   
        res.status(201).json(productsData);
    } catch (error) {
        console.log("error", error.message);
    }
})


//get data for individual item
Router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const individualData = await Products.findOne({ id: id });
        res.status(200).json(individualData);
    } catch (error) {
        res.status(400).json(individualData);
    }
})
//Create Account for the user
Router.post("/signup", async (req, res) => {
    const { fname, email, mobile, password, cpassword } = req.body;
    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "Fill all the details" });
        console.log("Some Fields are not filled");
    };
    try {
        const preuser = await USER.findOne({ email: email });
        if (preuser) {
            res.status(422).json({
                error: "User already exist with same email id "
            })
        }
        else if (password != cpassword) {
            res.status(422).json({
                error: "Password does not matches "
            })
        }
        else {
            const newUser = new USER({
                fname, email, mobile, password, cpassword
            });
            const storeData = await newUser.save();
            res.status(201).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Fill all the details" });
    }
})

//login user API
Router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email && !password) {
        res.status(400).json({ error: "Fill all the details" });
        console.log("Fill all details");
    }
    try {
        const loginUser = await USER.findOne({ email: email });
        if (loginUser) {
            const matched = await bcrypt.compare(password, loginUser.password);

            if (!matched) {
                res.status(400).json({ error: "Invalid Password" });
            } else {
                //token generate
                const token = await loginUser.generateAuthtokenn();
        
                res.cookie("Ecommweb", token, {
                    expires: new Date(Date.now() + 900000),
                    httponlu: true
                })
                res.status(201).json(loginUser);
            }
        }
        else {
            res.status(400).json({ error: "Invalid details" });
        }

    } catch (error) {
        res.status(400).json({ error: "User Not Exist" });
    }
})
//Aadding items to card'
Router.post('/addCart/:id', authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Products.findOne({ id: id });
   
        const userContact = await USER.findOne({ _id: req.userID });
    

        if (userContact) {
            const cartData = await userContact.addcartData(cart);
            await userContact.save();
            
            res.status(201).json(userContact);
        } else {
            res.status(401).json({ error: "Invalid User" });
        }

    } catch (error) {
        res.status(401).json({ error: "Invalid User" });
    }
});

//get cart details
Router.get("/cartdetails", authenticate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        res.status(201).json(buyuser);
    } catch (error) {
        console.log("error" + error)
    }
})

//get valid user
Router.get("/validateuser", authenticate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        res.status(201).json(validuserone);
    } catch (error) {
        console.log("error" + error)
    }
})

//Remove item from cart
Router.get("/remove/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        req.rootUser.carts = req.rootUser.carts.filter((curval) => {
            return curval.id != id;
        })

        req.rootUser.save();
        res.status(201).json(req.rootUser);
       
    } catch (error) {
        console.log("error" + error);
        res.status(400).json(req.rootUser);
    }
})
Router.get("/logout", authenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("Ecommweb", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);

    } catch (error) {
        console.log(error + "jwt provide then logout");
    }
});

// Payment order
Router.post('/orders' , PaymentController.orders)

// Payment verify
Router.post('/verify' , PaymentController.verify)
module.exports = Router;
