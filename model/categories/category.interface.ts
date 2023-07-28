import type { Document, Model, ObjectId } from "mongoose";

export interface ICategory extends Document {
    name: string;
    image: string;
    products: ObjectId[];
}

export type CategoryModel = Model<ICategory, Record<string, unknown>>;
