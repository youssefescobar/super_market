const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const auth = require("../middleware/authMiddleware");

router.post("/create-payment", auth, paymentController.createStripePayment);

// 2- Confirm after payment success
router.post("/confirm-payment", auth, paymentController.confirmPayment);

// 3- Get receipt after scan QR
router.get("/receipt/:paymentId", paymentController.getReceipt);

module.exports = router;
