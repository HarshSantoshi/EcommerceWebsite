const Razorpay = require('razorpay');

const KEY_ID = process.env.KEY_ID;
const KEY_SECRET = process.env.KEY_SECRET;

module.exports.orders = (req,res) => {
    let instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET })

    var options = {
        amount: req.body.amount * 100, 
        currency: "INR",
    };
    instance.orders.create(options, function (err, order) {
        if(err){
            return res.send({ code : 500 , message : 'Server Err.'})
        }
        return res.send({ code: 200 , message : 'order created' , data : order })
    });
}

module.exports.verify = () => {
    res.send({ verify })
}