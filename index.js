require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const app = express();
const {
  create,
  getOne,
  getAll,
  update,
  destroy
} = require("./products_controller");

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});
app.use(cors());
app.use(bodyParser.json());

app.get(`/api/products`, getAll);
app.delete(`/api/product/:id`, destroy);
app.put(`/api/product/:id?desc=...`, update);
app.post(`/api/product`, create);
app.get(`/api/product/:id`, getOne);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Now Listening on Port: ${port}`);
});
