const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/VotingSystem");

const citizenSchema = {
  VoterID: String,
  Name: String,
  FatherName: String,
  sex: String,
  DOB: String,
  Address: String,
  LinkedAadhaar: String,
};

const partySchema = {
  id: Number,
  partyName: String,
  imageUrl: String,
};

const Citizen = mongoose.model("Citizen", citizenSchema);

const Party = mongoose.model("Party", partySchema);

app.route("/").get((req, res) => {
  res.send("Server running successfully");
});

app.route("/citizen").post((req, res) => {
  const aadhaar = req.body.aadhaar;
  Citizen.find({ aadhaar: aadhaar }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.route("/party").get((req, res) => {
  const title = req.params.articleTitle;
  Party.find({}, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
});

app.listen(8200, "192.168.29.246", () => {
  console.log(
    "Server is running on ip http://192.168.29.246:8200 over the network"
  );
});
