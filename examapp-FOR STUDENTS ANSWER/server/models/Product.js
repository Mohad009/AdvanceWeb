import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    productBrand: { type: String, required: true },
    productCost: { type: Number, required: true },

});

const ProductModel = mongoose.model("productinfos", ProductSchema);

export default ProductModel;
