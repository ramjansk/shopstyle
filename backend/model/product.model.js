import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Product = mongoose.model("Product", productSchema);

export default Product;