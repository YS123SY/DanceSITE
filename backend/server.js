const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./Connection/connection");
const { User } = require("./mongoose/model/User");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());

app.post("/add_users", (req, res) => {
  let newUser = new User({ ...req.body });

  newUser.save((err, data) => {
    if (err) res.status(401).send(err);
    res.send(data);
  });
});

app.get("/users", (req, res) => {
  User.find((err, data) => {
    if (err) res.status(401).send(err);
    res.send(data);
  });
});

app.get("/dancer/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.status(401).send(err);
    res.send(data);
  });
});

app.listen(3001, err => {
  if (err) console.log("server erreur");
  else console.log("server is runing on port 3001");
});
