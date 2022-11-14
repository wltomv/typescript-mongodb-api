import { Schema, Types, model, Model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ItemSchema = new Schema<Product>(
    {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discountPercentage: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ItemModel = model('items', ItemSchema);
export default ItemModel;