module.exports = function (app) {
  
    const externalApi = require("../controllers/externalApi.controller.js");
  
    app.get("/api/externalApi", externalApi.getAll);
  };
  