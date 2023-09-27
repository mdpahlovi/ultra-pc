import type { Document, Types } from "mongoose";
import type { IUser } from "../users/user.interface";
import type { ICategory } from "../categories/category.interface";

export type IStatus = "In Stock" | "Out of stock";

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
