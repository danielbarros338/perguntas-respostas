const express = require("express");
const dotenv = require("dotenv")
const app = express();

dotenv.config({
  path:
    process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env.production"
})

app.set("view engine", "ejs"); // Define uma template engine
// É necessário criar uma pasta na rota root, chamada "views", para
// ser localizado os arquivos HTML

app.use(express.static("public")); // Define a pasta dos arquivos estáticos
app.use(express.json()); // Permite ler os dados recebidos em JSON
app.use(express.urlencoded({ extended: false })); // Permite ler dados do tipo url-encoded

require("../routes/routes.js")(app);

module.exports = app;
