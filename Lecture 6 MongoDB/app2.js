var express = require("express");
var { MongoClient } = require("mongodb");
var app = express();
var port = 8081;
const uri = "mongodb://localhost:27017";
app.use(express.json());
const client = new MongoClient(uri);

const dbName = "Product_CO2567T2";

async function main() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("student_records");

  // var obj = [
  //   { name: "Bob", courseid: "egci111", coursename: "computer programming", mark: 80 },
  //   { name: "Tom", courseid: "egci111", coursename: "computer programming", mark: 50 },
  //   { name: "Sue", courseid: "egci427", coursename: "Web programming", mark: 90 },
  //   { name: "John", courseid: "egci427", coursename: "Web programming", mark: 70 },
  //   { name: "Jame", courseid: "egci472", coursename: "Web programming", mark: 60 },
  // ]
  // const insertResult = await collection.insertMany(obj);

  var query = {
    coursename: { $regex: new RegExp("computer programming", "i") },
  };
  const findResult1 = await collection.find(query).toArray();
  console.log("First question answer: ", findResult1);

  var query = { mark: { $gt: 60 } };
  const findResult2 = await collection.find(query).toArray();
  console.log("Second question answer: ", findResult2);

  var query = { name: /^J/ };
  const findResult3 = await collection.find(query).toArray();
  console.log("Third question answer: ", findResult3);
}

main().then(console.log("success")).catch(console.error);
