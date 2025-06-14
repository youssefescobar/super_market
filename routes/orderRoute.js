const express =require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');


router.get('/getOrder',auth, authorize("admin"), orderController.getPaidOrders );





module.exports=router;