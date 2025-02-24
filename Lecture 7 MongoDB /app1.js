var express = require("express");
var app = express();
var fs = require("fs");

app.get("/getUsers", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

app.get("/getUsers/:id", (req, res) => {
  let key = "user" + req.params.id;
  console.log(key);
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    console.log(data[key]);
    res.end(JSON.stringify(data[key]));
  });
});

var user = {
  user4: {
    name: "mohit",
    password: "password4",
    profession: "teacher",
    id: 4,
  },
};

app.post("/addUser/", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

app.delete("/deleteUser/:id", (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    delete data["user" + req.params.id];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

var server = app.listen(8081, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
