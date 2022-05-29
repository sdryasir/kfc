const Product = require('../models/productSchema');
const ErrorHandler = require('../utils/errorHandler');
const cloudinary = require('cloudinary').v2

exports.createProduct = async (req, res, next)=>{
    const body = req.body;
    try {
        await Product.create(body);
        res.json({
            status: true,
            message:"success",
        })
    } catch (error) {
        next(new ErrorHandler(error, 400));
    }
}
exports.getAllProducts = async (req, res, next)=>{
    try {
        const products = await Product.find({});
        res.json({
            status:true,
            data:products
        })
    } catch (error) {
        next(new ErrorHandler(error, 400));
    }
}
exports.getProductById = async (req, res, next)=>{
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.json({
            status:true,
            data:product
        })
    } catch (error) {
        next(new ErrorHandler(error, 400));
    }
}
exports.updateProduct = async (req, res, next)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        await Product.findByIdAndUpdate(id, body);
        res.json({
            status:true,
            message:"success"
        })
    } catch (error) {
        next(new ErrorHandler(error, 400)); 
    }
}
exports.deleteProduct = async (req, res, next)=>{
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        await product.remove();
        res.json({
            status:true,
            message:'Product has been removed'
        })
    } catch (error) {
        next(new ErrorHandler(error, 400));
    }
}