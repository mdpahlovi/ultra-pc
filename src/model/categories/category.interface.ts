import type { Document, Types } from "mongoose";
import type { IProduct } from "../products/product.interface";

export interface ICategory extends Document {
    name: string;
    image: string;
    products: (Types.ObjectId | IProduct)[];
}
