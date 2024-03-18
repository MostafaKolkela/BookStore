const express = require('express');
const app = express();
const sequelize = require('./util/database');
//to send response to google book api
const axios = require('axios')

const API_KEY = 'AIzaSyCP8aFcdfSarTyzwObX0jhQm-xMgnCBT0M';
const SEARCH_TERM = 'Harry Potter';
LANG_RESTRICT = 'en'

axios.get(`https://www.googleapis.com/books/v1/volumes?q=${SEARCH_TERM}&langRestrict=${LANG_RESTRICT}&key=${API_KEY}`)
  .then(response => {
    const books = response.data.items;
    books.forEach(book => {
      console.log(book.volumeInfo);
    });
  })
  .catch(err=> {
    console.error('faild', err);
  });

sequelize
.sync({force: true})
.then(()=>{
    app.listen(3000);})
.catch(err=>{console.log(err);});
