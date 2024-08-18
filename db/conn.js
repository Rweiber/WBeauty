const mongoose = require("mongoose");
require("dotenv").config(); // Carregar variáveis de ambiente

async function main() {
  try {
    const password = process.env.MONGO_DB_PASSWORD; // Obter a senha do .env
    const uri = `mongodb+srv://Renan:${password}@cluster0.eayij88.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(uri);
    console.log("MongoDB connectado...");
  } catch (error) {
    console.log("Error na conexao com o MongoDB:", error);
  }
}

module.exports = main;
