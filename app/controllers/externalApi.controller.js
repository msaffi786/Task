const http = require('https');
const url = "https://jsonplaceholder.typicode.com/posts";

exports.getAll = (req,res) => { const data = http.get(url); 
    res.status(200).json(data);
};
