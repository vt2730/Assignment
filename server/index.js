
// import routes from "./router";

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGO_URL;
const app = express();
app.use(express.json());

mongoose
        .set('strictQuery', true)
        .connect(MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })
        .then(() => console.log("👉🏾👉🏾 Connected to mongoDb"))
        .catch((err) => {
            console.error(err, `Error on connecting to mongo`);
            setTimeout(() => {
                process.exit(1);
            }, 2000);
        });
  
// app.use("/api", routes);

app.listen("5000",() => {
    console.log("Server is running");
})