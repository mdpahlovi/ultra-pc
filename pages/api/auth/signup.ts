import { hash } from "bcryptjs";
import User from "@/model/users/user";
import connectMongo from "@/database/connection";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    connectMongo();

    // only post method is accepted
    if (req.method === "POST") {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(404).json({ status: false, message: "Don't have form data...!" });

        const hashedPassword = await hash(password, 12);

        const isExist = await User.findOne({ email });
        if (isExist && isExist?.password) {
            return res.status(422).json({ status: false, message: "User Already Exists...!" });
        } else if (isExist && !isExist?.password) {
            await User.findOneAndUpdate({ email }, { password: hashedPassword }, { new: true });
            return res.status(201).json({ status: true, message: "User Created Successfully...!" });
        } else {
            const newUser = new User({ name, email, password: hashedPassword });
            await newUser.save();
            return res.status(201).json({ status: true, message: "User Created Successfully...!" });
        }
    } else {
        return res.status(500).json({ status: false, message: "HTTP Method Acceptable...!" });
    }
}
