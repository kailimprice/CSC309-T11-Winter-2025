const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require('dotenv').config();

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors())

app.use(express.json());
app.use('', routes);



module.exports = app;