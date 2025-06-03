const mongoose = require('mongoose');

const associationRuleSchema = new mongoose.Schema({
  antecedents: {
    type: String,
    required: true,
    index: true     
  },
  consequents: {
    type: String, 
    required: true
   
  },
  confidence: {
    type: Number,   
    required: true,
    index: true    
  }

}, { timestamps: true }); 

const AssociationRule = mongoose.model('AssociationRule', associationRuleSchema, 'associationRules'); 

module.exports = AssociationRule;