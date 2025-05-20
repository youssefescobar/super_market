const express = require ('express');
const router = express.Router();
const productController =require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');

const upload = require('../middleware/upload')

router.get('/search', productController.searchProducts);
router.get('/', productController.getAllProducts)

router.post('/create', auth, authorize('admin'), upload.single('imageUrl'),productController.createProduct);
router.get('/:id',auth,authorize('admin'),productController.getProduct);
router.delete('/:id', auth, authorize('admin'),productController.removeProduct);
router.put('/:id',auth, authorize('admin') ,upload.single('imageUrl'),productController.updateProduct);

module.exports=router; 