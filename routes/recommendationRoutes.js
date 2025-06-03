
const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');
const auth = require("../middleware/authMiddleware")

router.get('/product/:productName/recommendations', recommendationController.getProductRecommendations);
router.post('/cart/recommendations', auth ,recommendationController.getUserCartRecommendations);

module.exports = router;