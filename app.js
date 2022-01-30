const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use('api/users', '/routes')

app.listen(process.env.PORT, () => {
  console.log("Server running...");
});
