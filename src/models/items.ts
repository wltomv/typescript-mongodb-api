import { Schema, Types, model, Model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ItemSchema = new Schema<Product>(
    {
        id: {
            type: Number,
        },
        title: {
            type: String,
        },
        description: {
            type: String
        },
        price: {
            type: Number,
        },
        discountPercentage: {
            type: Number,
        },
        rating: {
            type: Number,
        },
        stock: {
            type: Number,
        },
        brand: {
            type: String,
        },
        category: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ItemModel = model('items', ItemSchema);
export default ItemModel;