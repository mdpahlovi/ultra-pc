"use client";

import { theme } from "antd";
import { Review } from "@prisma/client";
import getAvgRating from "@/helpers/getAvgRating";

const InfoText = ({ price, reviews }: { price: number; reviews: Review[] }) => {
    const { token } = theme.useToken();

    return (
        <>
            <div style={{ backgroundColor: token.colorText }} className="mb-1 h-1 rounded" />
            <div className="flex justify-between text-sm">
                <span>Price: ${price}</span>
                <span>
                    Rating: {getAvgRating(reviews)}({reviews.length})
                </span>
            </div>
        </>
    );
};

export default InfoText;
