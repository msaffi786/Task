module.exports = function (app) {
  
    const book = require("../controllers/book.controller.js");
  

    app.post("/api/book", book.create);
  

    app.get("/api/books", book.findAll);
  

    app.get("/api/books/:bookId", book.findByPk);
  

    app.put("/api/books/:bookId", book.update);
  

    app.delete("/api/books/:bookId", book.delete);
  };
  
