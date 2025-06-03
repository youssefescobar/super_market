const AssociationRule = require('../models/AssociationRule');
const Product = require('../models/productSchema'); 
const DEFAULT_RECOMMENDATION_LIMIT = 3;
const DEFAULT_MIN_CONFIDENCE = 0.1; // 10%

async function getRecommendations(inputProductNames, options = {}) {
  const limit = options.limit || DEFAULT_RECOMMENDATION_LIMIT;
  const minConfidence = options.minConfidence || DEFAULT_MIN_CONFIDENCE;

  let antecedentsToQuery = [];
  if (typeof inputProductNames === 'string') {
    antecedentsToQuery = [inputProductNames];
  } else if (Array.isArray(inputProductNames)) {
    antecedentsToQuery = [...inputProductNames];
  } else {
    console.error('Invalid input for recommendations. Must be a product name or array of product names.');
    return [];
  }

  if (antecedentsToQuery.length === 0) {
    return []; 
  }

  try {
  
    const rules = await AssociationRule.find({
      antecedents: { $in: antecedentsToQuery }, 
      confidence: { $gte: minConfidence }
    }).sort({ confidence: -1 });

    if (!rules.length) {
      return []; 
    }

   
    const consequentScores = {}; 

    rules.forEach(rule => {
     
      if (!antecedentsToQuery.includes(rule.consequents)) {
        if (!consequentScores[rule.consequents] || rule.confidence > consequentScores[rule.consequents]) {
          consequentScores[rule.consequents] = rule.confidence; 
        }
      }
    });

    const sortedConsequents = Object.entries(consequentScores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA) 
      .map(([name]) => name)
      .slice(0, limit); 

    if (sortedConsequents.length === 0) {
      return []; 
    }

    
    const recommendedProductDetails = await Product.find({
      name: { $in: sortedConsequents }
    }).select('name description price category imageUrl stock sizes _id'); 


    const finalRecommendations = sortedConsequents.map(name =>
      recommendedProductDetails.find(p => p.name === name)
    ).filter(p => p != null); 

    return finalRecommendations;

  } catch (error) {
    console.error('Error fetching recommendations:', error);
    
    return [];
  }
}

module.exports = {
  getRecommendations
};