const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// DB connection
const conn = require("./db/conn");
conn();

// Configurar a engine de templates (EJS) - Mova para cá!
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
const routes = require("./routes/router");
app.use("/", routes); // Use '/' como prefixo para as rotas principais

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
