const Product =require('../models/productSchema');

exports.createProduct = async (req,res,next)=>{
    try{

        const { name , description , price , category , stock , qrCode, sizes }=req.body;
        const imageUrl = req.file ? req.file.filename : null;

        const existingProduct = await Product.findOne({ name: name.trim() });
        if (existingProduct) {
          return res.status(400).json({ message: "Product already exists." });
        };


        const newProduct =new Product({
            name:name.trim() ,
            description:description.trim() ,
            price :price,
            category :category.trim(),
            stock ,
            imageUrl,
            qrCode:qrCode,
            sizes, 
        });
       
        await newProduct.save();
        res.status(201).json({message:"Product created successfully.", 
         newProduct
    });

    }catch(err){
        res.status(500).json({message:err.message});
    }
};
exports.getProduct = async (req,res,next)=>{
    try{ 
        const productId =req.params.id;
        const products = await Product.findById(productId);
        if(!products){
            res.status(404).json({message:" Product not found. "});
        }
        res.json(products);

        
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

exports.removeProduct = async (req,res,next)=>{
    try{ 
        const productId =req.params.id;
        const deletedProduct =await Product.findByIdAndDelete(productId);
        if(!deletedProduct){
            res.status(404).json({message:" Product not found. "});
        }
        res.status(201).json({message: "Product deleted"});
        

        
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

exports.updateProduct = async (req, res, next) => {
    try { 
        const { name , description , price , category , stock , sizes } =req.body;
        const updateData  ={};
        if(name) updateData.name= name;
        if(description) updateData.description= description;
        if(price) updateData.price= price;
        if(category) updateData.category= category;
        if(stock) updateData.stock= stock;
        if(sizes) updateData.sizes= sizes;

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,   
            updateData,     
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found." });
        }

        res.status(200).json({ message: "Product updated successfully.", updatedProduct });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const category = req.query.category;
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const sort = req.query.sort;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const total = await Product.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);
    let sortOption = {};
    if (sort === 'asc') {
      sortOption.price = 1;
    } else if (sort === 'desc') {
      sortOption.price = -1; 
    }

    const products = await Product.find(filter)
      .skip(skip)
      .limit(limit)
      .sort(sortOption)
      .select('-__v');

    res.status(200).json({
      totalPages,
      currentPage: page,
      limit,
      totalProducts: total,
      products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.searchProducts = async (req, res) => {
    try {
        const query = req.query.q;
        const products = await Product.find({
            $or: [
                { name: new RegExp(query, 'i') },
                { description: new RegExp(query, 'i') }
            ]
        });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

