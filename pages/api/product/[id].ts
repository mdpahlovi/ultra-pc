import connectMongo from "@/helpers/connection";
import Product from "@/model/products/product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo();

    const { id } = req.query;
    if (req.method === "GET") {
        const result = await Product.findById(id)
            .populate({
                path: "category",
                select: { _id: 0, name: 1 },
            })
            .populate({ path: "reviews.user", select: { _id: 0, name: 1, image: 1 } });

        return res.status(201).json(result);
    }
}