require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();

    console.log("Connected to MongoDB successfully!");

    // Select database
    const db = client.db(dbName);

    // Select collection
    const students = db.collection("students");

    // Insert a document
    const result = await students.insertOne({
      name: "manogna",
      age: 20,
      course: "Node.js"
    });

    console.log("Student inserted:", result.insertedId);

    // Read documents
    const data = await students.find({}).toArray();

    console.log("Student records:", data);

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
  }
}

main();