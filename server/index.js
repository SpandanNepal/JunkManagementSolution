// server/index.js
const express = require("express");

const { db } = require("./firebase");

const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

// Limit Collections 
const allowedCollections = ["users"];

app.post("/add-data", async (req, res) => {
    try {
      const { collection, docData } = req.body;
      // Check if the collection is allowed 
      if (!allowedCollections.includes(collection)) {
        return res.status(400).send("Invalid collection name.");
      }
  
      // Log for debugging purposes
      console.log(`Adding data to collection: ${collection}`, docData);
  
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
