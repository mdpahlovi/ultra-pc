import { Schema, model, models } from "mongoose";
import type { IProduct, ProductModel } from "./product.interface";

const productSchema = new Schema<IProduct>(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: Schema.Types.ObjectId, ref: "category", required: true },
        status: { type: String, required: true, enum: ["In Stock", "Out of stock"] },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        keyFeature: { type: [String], required: true },
        rating: { type: String },
        reviews: {
            type: [
                {
                    _id: false,
                    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
                    rating: { type: Number, required: true },
                    comment: { type: String, required: true },
                },
            ],
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const Product = models.product || model<IProduct, ProductModel>("product", productSchema);

export default Product;
