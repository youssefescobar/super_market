// seedDb.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const AssociationRule = require('../models/AssociationRule'); 
require("dotenv").config({ path: "../.env" });

const MONGO_URI = process.env.MONGO_URI;
const JSON_FILE_PATH = path.join(__dirname, 'association_rules.json');

async function seedDatabase() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');

    // Optional: Clear existing data in the collection before seeding
    // Be very careful with this in a production environment!
    console.log('Attempting to delete existing association rules...');
    await AssociationRule.deleteMany({});
    console.log('Existing association rules deleted.');

    console.log(`Reading data from ${JSON_FILE_PATH}...`);
    const jsonData = fs.readFileSync(JSON_FILE_PATH, 'utf-8');
    const rulesData = JSON.parse(jsonData);

    if (!Array.isArray(rulesData) || rulesData.length === 0) {
      console.log('No rules found in the JSON file, or the file content is not an array. Exiting.');
      return;
    }

    console.log(`Found ${rulesData.length} rules to import.`);

    // Note: If your JSON contains fields not in your Mongoose schema
    // (e.g., if you later add support/lift to schema but JSON doesn't have them yet),
    // Mongoose will strip them out by default during insertion if `strict` is true (default).
    // If `strict` is false, it would save them. It's best if schema and data align.

    console.log('Attempting to insert new rules...');
    await AssociationRule.insertMany(rulesData);
    console.log(`Successfully seeded ${rulesData.length} association rules to the database!`);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    console.log('Attempting to disconnect from MongoDB...');
    await mongoose.disconnect();
    console.log('MongoDB connection closed.');
  }
}

seedDatabase();