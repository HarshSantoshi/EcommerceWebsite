const Razorpay = require('razorpay');
const crypto = require('crypto');

const KEY_ID = process.env.KEY_ID;
const KEY_SECRET = process.env.KEY_SECRET;

module.exports.orders = (req, res) => {
  const instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET });

  const options = {
    amount: req.body.amount * 100,
    currency: 'INR',
  };

  instance.orders.create(options, function (err, order) {
    if (err) {
      return res.send({ code: 500, message: 'Server Err.' });
    }
    return res.send({ code: 200, message: 'order created', data: order });
  });
};

module.exports.verify = (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = `${razorpay_order_id}|${razorpay_payment_id}`;

  const expectedSignature = crypto
    .createHmac('sha256', KEY_SECRET)
    .update(body)
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    res.send({ code: 200, message: 'Sign Valid' });
  } else {
    res.send({ code: 500, message: 'Sign Invalid' });
  }
};
