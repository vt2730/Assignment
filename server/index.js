const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

require('dotenv').config();

const MONGODB_URI = process.env.MONGO_URL;
const app = express();
app.use(express.json());

const whitelist = ["http://localhost:3000", "http://localhost:3001","http://localhost:3001"];

mongoose
        .set('strictQuery', true)
        .set('strictPopulate', false)
        .connect(MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => console.log("👉🏾👉🏾 Connected to mongoDb"))
        .catch((err) => {
            console.error(err, `Error on connecting to mongo`);
            setTimeout(() => {
                process.exit(1);
            }, 2000);
        });

app.use(cors({ origin: whitelist, credentials: true }));
app.use("/api", routes);

app.listen("5000",() => {
    console.log("Server is running");
})