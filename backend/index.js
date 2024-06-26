const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;



const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes


app.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);
});

