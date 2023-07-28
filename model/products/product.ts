import { Schema, model, models } from "mongoose";
import { IProduct, ProductModel, statusConstant } from "./product.interface";

const productSchema = new Schema<IProduct>(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: String, required: true },
        status: { type: String, required: true, enum: statusConstant },
        price: { type: String, required: true },
        description: { type: String, required: true },
        keyFeature: { type: [String], required: true },
        rating: { type: String },
        reviews: {
            type: [
                {
                    _id: false,
                    user: { type: String, required: true },
                    rating: { type: String, required: true },
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
