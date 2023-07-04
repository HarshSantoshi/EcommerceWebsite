const Razorpay = require('razorpay');
const KEY_ID = 'rzp_test_01nKb89Wentqid';
const KEY_SECRET = 'bucNgkoBxQ6nMvPJRjdKn6mn';

module.exports.orders = (req,res) => {
    let instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET })

    var options = {
        amount: req.body.amount * 100,  // amount in the smallest currency unit
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