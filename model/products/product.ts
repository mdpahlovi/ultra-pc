import random from "mongoose-simple-random";
import { Schema, model, models } from "mongoose";
import { type IProduct, type ProductModel, statusConstant } from "./product.interface";

const productSchema = new Schema<IProduct>(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: Schema.Types.ObjectId, ref: "category", required: true },
        status: { type: String, required: true, enum: statusConstant },
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

productSchema.plugin(random);

const Product = models.product || model<IProduct, ProductModel>("product", productSchema);

export default Product;
