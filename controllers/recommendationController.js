const recommendationService = require('../Utils/recommendationService');
const Cart = require('../models/CartSchema');
const Product = require('../models/productSchema');
async function getProductRecommendations(req, res) {
  try {
    const productName = req.params.productName; 
    if (!productName) {
      return res.status(400).json({ message: 'Product name is required.' });
    }


    const options = {
        limit: parseInt(req.query.limit) || 3, 
        minConfidence: parseFloat(req.query.minConfidence) || 0.1 
    };

    const recommendations = await recommendationService.getRecommendations(productName, options);

    if (recommendations.length === 0) {
      return res.status(200).json({ message: 'No specific recommendations found for this product.', recommendations: [] });
    
    }

    res.status(200).json(recommendations);
  } catch (error) {
    console.error('Error in getProductRecommendations controller:', error);
    res.status(500).json({ message: 'Failed to fetch recommendations.' });
  }
}

async function getUserCartRecommendations(req, res) {
  try {
    const userId = req.userId;

    // Step 1: Find user's cart
    const userCart = await Cart.findOne({ userId }).populate('items.productId', 'name');
    if (!userCart || userCart.items.length === 0) {
      return res.status(400).json({ message: 'Your cart is empty.' });
    }

    // Step 2: Extract product names
    const productNames = userCart.items.map(item => item.productId.name);

    // Step 3: Fetch recommendations
    const options = {
      limit: parseInt(req.query.limit) || 3,
      minConfidence: parseFloat(req.query.minConfidence) || 0.1,
    };

    const recommendations = await recommendationService.getRecommendations(productNames, options);

    // Step 4: Return result
    if (recommendations.length === 0) {
      return res.status(200).json({ message: 'No recommendations found.', recommendations: [] });
    }

    res.status(200).json(recommendations);

  } catch (error) {
    console.error('Error in getUserCartRecommendations controller:', error);
    res.status(500).json({ message: 'Failed to fetch cart recommendations.' });
  }
}

module.exports = {
  getProductRecommendations,
  getUserCartRecommendations
};