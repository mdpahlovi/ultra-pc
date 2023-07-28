import connectMongo from "@/database/connection";
import Category from "@/model/categories/category";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo();

    if (req.method === "GET") {
        const result = await Category.find({});
        return res.status(201).json(result);
    }
}
