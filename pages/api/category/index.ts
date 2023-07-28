import connectMongo from "@/helpers/connection";
import Category from "@/model/categories/category";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo();

    if (req.method === "GET") {
        const result = await Category.find({});
        return res.status(201).json(result);
    }
}
