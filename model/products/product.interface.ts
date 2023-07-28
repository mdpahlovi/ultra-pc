import type { Document, Model } from "mongoose";

export type IStatus = "In Stock" | "Out of stock";
export const statusConstant: IStatus[] = ["In Stock", "Out of stock"];

export interface IReviews {
    user: string;
    rating: string;
    comment: string;
}

export interface IProduct extends Document {
    image: string;
    name: string;
    category: string;
    status: IStatus;
    price: string;
    description: string;
    keyFeature: string[];
    rating: string;
    reviews: IReviews[];
}

export type ProductModel = Model<IProduct, Record<string, unknown>>;
