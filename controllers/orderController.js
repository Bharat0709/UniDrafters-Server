const Razorpay = require('razorpay');
require('dotenv').config;

exports.createOrder = async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).send('error');
    }
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send('error');
  }
};
