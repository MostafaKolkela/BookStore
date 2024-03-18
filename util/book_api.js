const API_KEY = require('./api_key');
const axios = require('axios');

const bookFun = (SEARCH_TERM,LANG_RESTRICT='en')=>{
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
}

module.exports = bookFun;