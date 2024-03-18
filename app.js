const express = require('express');
const app = express();
const sequelize = require('./util/database');
const googleBookApi = require('./util/book_api');
//to send response to google book api


googleBookApi('harry potter');


sequelize
.sync()
.then(()=>{
    app.listen(3000);})
.catch(err=>{console.log(err);});
