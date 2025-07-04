const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser= require('../middleware/validateUser');
const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');

router.post('/create', validateUser, auth, authorize('admin'), userController.create);
 
router.get('/all',auth,userController.getAllUsers); // get all users for admin
router.get('/MyProfile', auth, userController.getMyProfile); // profile
router.put('/UpdateProfile', auth, userController.updateMyProfile);
router.get('/:id', auth, authorize('admin'), userController.getUser);
router.put('/:id', auth, authorize('admin'), userController.updateUser);


router.delete('/:id', auth, authorize('admin'), userController.deleteUser);
router.patch('/:id/role', auth, authorize('admin'), userController.changeUserRole);

module.exports = router;
