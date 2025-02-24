var express = require("express");
var app = express();
var jwt = require("jsonwebtoken");
const MongoClient = require("mongodb").MongoClient;

async function connectToDB() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useUnifiedTopology: true,
    });
    const db = client.db("userDB");
    collection = db.collection("userDB");
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
}

connectToDB();

app.use(express.json());

function ensureToken(req, res, next) {
  const barrerHeader = req.headers["authorization"];
  if (typeof barrerHeader !== "undefined") {
    const barrer = barrerHeader.split(" ");
    const barrerToken = barrer[1];
    req.token = barrerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get("/api", (req, res) => {
  res.json({
    description: "My API. please authenticate",
  });
});

app.get("/api/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, "my-secret-key", function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        description: "Protected information. Congrats!",
        data: data,
      });
    }
  });
});

app.post("/api/login", async (req, res) => {
  const request = req.body;
  const user = await collection.findOne({
    username: request.username,
    password: request.password,
  });

  if (!user) {
    res.status(403).json({
      message: "Invalid Username or Password",
      user: {
        username: request.username,
        password: request.password,
      },
    });
    return;
  }

  const token = jwt.sign({ user: user.username }, "my-secret-key");
  res.json({
    message: 'Authenticated! Use this token in the "Authorization" header',
    token: token,
  });
});

app.listen(8081, "0.0.0.0", () => {
  console.log("Server running on http://localhost:8081");
});
