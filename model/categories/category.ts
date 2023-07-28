import { Schema, model, models } from "mongoose";
import type { ICategory, CategoryModel } from "./category.interface";

const categorySchema = new Schema<ICategory>(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        products: [{ type: Schema.Types.ObjectId, ref: "product" }],
    },
    { timestamps: true, versionKey: false }
);

const Category = models.category || model<ICategory, CategoryModel>("category", categorySchema);

export default Category;
