import type { Document, Model, Types } from "mongoose";
import { ICategory } from "../categories/category.interface";
import { IUser } from "../users/user.interface";

export type IStatus = "In Stock" | "Out of stock";
export const statusConstant: IStatus[] = ["In Stock", "Out of stock"];

export interface IReviews {
    user: Types.ObjectId | IUser;
    rating: number;
    comment: string;
}

export interface IProduct extends Document {
    image: string;
    name: string;
    category: Types.ObjectId | ICategory;
    status: IStatus;
    price: number;
    description: string;
    keyFeature: string[];
    rating: string;
    reviews: IReviews[];
}

export type ProductModel = Model<IProduct, Record<string, unknown>>;
