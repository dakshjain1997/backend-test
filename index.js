const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

port = process.env.PORT;
app.listen(port, () => { console.log(`server up and running,listening at port ${port}`) });

console.log("server up and running");

