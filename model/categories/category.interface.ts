import type { Document, Model, Types } from "mongoose";
import { IProduct } from "../products/product.interface";

export interface ICategory extends Document {
    name: string;
    image: string;
    products: (Types.ObjectId | IProduct)[];
}

export type CategoryModel = Model<ICategory, Record<string, unknown>>;
