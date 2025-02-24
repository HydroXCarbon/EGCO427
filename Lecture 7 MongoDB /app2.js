var express = require("express");
var app = express();
app.use(express.json());
const MongoClient = require("mongodb").MongoClient;
let collection;

async function connectToDB() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useUnifiedTopology: true,
    });
    const db = client.db("StudentDB");
    collection = db.collection("Students");
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the app if DB connection fails
  }
}

connectToDB();

app.get("/getStudents", async (req, res) => {
  const result = await collection.find({}).toArray();
  res.send(result);
});

app.get("/showMajor/:subject", async (req, res) => {
  const subject = req.params.subject;
  const query = {
    major: { $regex: new RegExp(subject, "i") },
  };
  const result = await collection.find(query).toArray();
  res.send(result);
});

app.get("/findageless/:age", async (req, res) => {
  const age = parseInt(req.params.age);
  const result = await collection
    .find({ age: { $lt: age } })
    .sort({ age: -1 })
    .toArray();
  res.send(result);
});

app.put("/updateLastname/:oldName/:newName", async (req, res) => {
  const oldName = req.params.oldName;
  const newName = req.params.newName;
  await collection.updateMany(
    { lastname: oldName },
    { $set: { lastname: newName } }
  );
  const result = await collection.find({ lastname: newName }).toArray();
  res.send(result);
});

app.post("/insertStudent", async (req, res) => {
  await collection.insertOne(req.body);
  res.send("Student inserted!");
});

var server = app.listen(8081, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
