const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routers/router');

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(cors())

app.use(router);


app.listen(3000, ()=> {
    console.log("server is running...............")
})