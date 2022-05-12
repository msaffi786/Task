const http = require('https');
const url = "https://jsonplaceholder.typicode.com/posts";

exports.getAll = http.get(url, function (response) {
    
    const posts = response.data;
    console.log(posts);

});