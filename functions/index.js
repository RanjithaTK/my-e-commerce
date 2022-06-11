const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51KaiMcSIwdzlr1J1q8O5n9xYOWJNtOA33IvuvDBwlyTP1bCWrez2BtqUU9Ffa9USJGUhjZzWU8ZxjRU77DiwEN8F00p2hSF85m"
);

//app config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello"));
app.post('/payments/create',async (request, response) => {
    const total=request.query.total;

    console.log('payment request received ',total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"rupee"
    })

    response.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})


exports.api=functions.https.onRequest(app);

// http://localhost:4000/functions
//localhost:5001 │ http://localhost:4000/functions