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
app.post("/add_events", (req, res) => {
  let newEvent = new Event({ ...req.body });

  newEvent.save((err, data) => {
    if (err) res.status(401).send(err);
    res.send(data);
  });
});
app.get("/evenements", (req, res) => {
  Event.find((err, data) => {
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

app.get("/dancers", (req, res) => {
  User.find((err, data) => {
    if (err) res.status(401).send(err);
    res.send(data);
  });
});

app.put("/dancer/:id", (req, res) => {
  let id = req.params.id;
  let newPseudo = req.body.pseudo;
  let newAge = req.body.age;
  let newSexe = req.body.sexe;
  let newVille = req.body.ville;
  let newImage = req.body.image;
  let newCategory = req.body.category;
  let newAnnonce = req.body.annonce;
  User.updateOne(
    { _id: id },
    {
      pseudo: newPseudo,
      age: newAge,
      sexe: newSexe,
      image: newImage,
      ville: newVille,
      category: newCategory,
      annonce: newAnnonce
    },
    (err, data) => {
      if (err) res.status(400).send(err);
      else res.send(data);
    }
  );
});

app.listen(3001, err => {
  if (err) console.log("server erreur");
  else console.log("server is runing on port 3001");
});
