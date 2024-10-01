const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.ij6ptye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const roomsCollection = client.db("stay-vista").collection("rooms");

    app.get("/rooms", async (req, res) => {
      const result = await roomsCollection.find().toArray();
      res.send(result);
    });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(`Server is running`);
});

app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});
