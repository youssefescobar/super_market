const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/authorize");
const upload = require('../middleware/upload');

router.get("/all", auth, categoryController.getAllCategories);
router.get("/:id", auth , categoryController.getCategory);

router.post(
  "/create",
  auth,
  authorize("admin"), 
  upload.single("image"),
  categoryController.createCategory
); 

router.put(
  "/:id",
  auth,
  authorize("admin"),
  upload.single("image"),
  categoryController.updateCategory
);

router.delete(
  "/:id",
  auth,
  authorize("admin"),
  categoryController.removeCategory
);


module.exports = router;
