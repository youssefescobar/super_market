const express = require('express');
const router = express.Router();
const {
  getAllReceipts,
  getReceiptById,
  getMyReceipts
} = require('../controllers/receiptControllers');

const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');

// GET /api/receipts - Admin only
router.get('/', auth, getAllReceipts);

// GET /api/receipts/myreceipts - Logged-in user only
router.get('/myreceipts', auth, getMyReceipts);

// GET /api/receipts/:id - Only owner of receipt can access
router.get('/:id', auth, getReceiptById);

module.exports = router;
