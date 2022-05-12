const db = require("../models");
const config = require("../config/auth.config");
const User = db.book;


exports.create = (req, res) => {
 
  Book.create({
    name: req.body.name,
    price: req.body.price,
    language: req.body.language,
    total_pages: req.body.total_pages,
  }).then((book) => {
    res.status(200).json({
      status: true,
      message: "Book created successfully",
    });
  });
};


exports.findAll = (req, res) => {
  Book.findAll().then((books) => {
    res.status(200).json({
      status: true,
      data: books,
    });
  });
};


exports.findByPk = (req, res) => {
  Book.findByPk(req.params.bookId).then((book) => {
    res.status(200).json({
      status: true,
      data: book,
    });
  });
};


exports.update = (req, res) => {
  const id = req.params.bookId;
  Book.update(
    {
      name: req.body.name,
      price: req.body.price,
      language: req.body.language,
      total_pages: req.body.total_pages,
    },
    { where: { id: req.params.bookId } }
  ).then(() => {
    res.status(200).json({
        status: true,
        message: "Book updated successfully with id = " + id
    });
  });
};


exports.delete = (req, res) => {
  const id = req.params.bookId;
  Book.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
        status: true,
        message: "Book deleted successfully with id = " + id
    });
  });
};
