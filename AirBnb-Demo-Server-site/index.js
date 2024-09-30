const express=require("express")
const cors=require("cors")
const app=express();
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 3000;


//middleware
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
    const users = client.db("userDB").collection("users");


    
      
    
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
     await client.close();
  }
}
run().catch(console.dir);




app.get("/",(req,res)=>{
    res.send(`Server is running`)
})

app.listen(port,()=>{
    console.log(`server is running on port no ${port}`)
})