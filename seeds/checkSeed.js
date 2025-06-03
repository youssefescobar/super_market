// checkSeed.js
const mongoose = require('mongoose');
const AssociationRule = require('../models/AssociationRule');
require("dotenv").config({ path: "../.env" });

const MONGO_URI = process.env.MONGO_URI;


async function checkSeedingStatus() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully.');

    const count = await AssociationRule.countDocuments({});
    console.log(`Total association rules found in the database: ${count}`);

    if (count === 0) {
      console.log('The associationRules collection is empty. Seeding may not have been successful or the JSON file was empty.');
    } else {
      
      console.log('\nFetching a sample rule:');
      const sampleRule = await AssociationRule.findOne({}); 
      if (sampleRule) {
        console.log(JSON.stringify(sampleRule, null, 2)); 
      } else {
        console.log('Could not fetch a sample rule, though the count is greater than zero. This is unusual.');
      }

    }

  } catch (error) {
    console.error('Error checking seeding status:', error);
  } finally {
    console.log('\nAttempting to disconnect from MongoDB...');
    await mongoose.disconnect();
    console.log('MongoDB connection closed.');
  }
}

checkSeedingStatus();