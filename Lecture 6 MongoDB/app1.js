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
  const collection = db.collection("Products");

  // var obj = [
  //   { name: "Book", price: 10 },
  //   { name: "Pencil", price: 5 },
  //   { name: "Calculator", price: 40 },
  //   { name: "Notebook", price: 15 },
  //   { name: "T-Shirt", price: 20 },
  //   { name: "Jacket", price: 20 }
  // ]
  // const insertResult = await collection.insertMany(obj);

  // const findResult = await collection.findOne({});
  // console.log(findResult);

  //var querry = { name: "Pencil" };
  // const findResult = await collection.find(querry).toArray();
  // console.log(findResult);

  // var querry = { name: /^C/}
  // const findResult = await collection.find(querry).toArray();
  // console.log(findResult);

  var key = { name: -1 };
  const findResult = await collection.find().sort(key).toArray();
  console.log(findResult);
}

main().then(console.log("success")).catch(console.error);
