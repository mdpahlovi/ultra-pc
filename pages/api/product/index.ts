import connectMongo from "@/helpers/connection";
import Product from "@/model/products/product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo();

    if (req.method === "GET") {
    }
}
