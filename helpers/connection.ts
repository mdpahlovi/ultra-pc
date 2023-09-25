import mongoose from "mongoose";

const mongodb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL);

        if (connection.readyState == 1) {
            return Promise.resolve(true);
        }
    } catch (error) {
        return Promise.reject(error);
    }
};

export const connect = { mongodb };
