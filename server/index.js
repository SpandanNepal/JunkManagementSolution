// server/index.js
const express = require("express");

const { db } = require("./firebase");

const cors = require("cors");

const app = express();
const port = 5001;

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors({origin: 'https://junk-management-solution-client.vercel.app/'}));

// Limit Collections 
const allowedCollections = ["users", "login", "junk-details"];

app.post("/login", async (req, res) => {
  try {
    const { collection, docData } = req.body;
    // Check if the collection is allowed 
    if (!allowedCollections.includes(collection)) {
      return res.status(400).send("Invalid collection name.");
    }

    // Log for debugging purposes
    console.log(`Log user successfuly: ${collection}`, docData);

    // Add the document to Firestore
    await db.collection(collection).add(docData);

    // Respond with success
    res.status(200).send("Data added successfully");
  } catch (error) {
    console.error("Error adding data to Firestore:", error);
    res.status(500).send("Failed to add data");
  }
});

app.post("/register", async (req, res) => {
  try {
    const { collection, docData } = req.body;
    console.log("Resigtration ")
    // Check if the collection is allowed 
    if (!allowedCollections.includes(collection)) {
      return res.status(400).send("Invalid collection name.");
    }

    // Log for debugging purposes
    console.log(`user registration successful: ${collection}`, docData);

    // Add the document to Firestore
    await db.collection(collection).add(docData);

    // Respond with success
    res.status(200).send("Data added successfully");
  } catch (error) {
    console.error("Error adding data to Firestore:", error);
    res.status(500).send("Failed to add data");
  }
});

app.post("/junk-update", async (req, res) => {
  try {
    const { collection, docData } = req.body;
    console.log(req.body)
    // Check if the collection is allowed 
    if (!allowedCollections.includes(collection)) {
      return res.status(400).send("Invalid collection name.");
    }

    // Log for debugging purposes
    console.log(`user registration successful:: ${collection}`, docData);

    // Add the document to Firestore
    await db.collection(collection).add(docData);

    // Respond with success
    res.status(200).send("Data added successfully");
  } catch (error) {
    console.error("Error adding data to Firestore:", error);
    res.status(500).send("Failed to add data");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});