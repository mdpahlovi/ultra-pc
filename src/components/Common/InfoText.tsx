"use client";

import { theme } from "antd";
import getAvgRating from "@/helpers/getAvgRating";
import type { IReviews } from "@/model/products/product.interface";

const InfoText = ({ price, reviews }: { price: number; reviews: IReviews[] }) => {
    const { token } = theme.useToken();

    return (
        <>
            <div style={{ backgroundColor: token.colorText }} className="mb-1 h-1 rounded" />
            <div className="flex justify-between text-sm">
                <span>Price: ${price}</span>
                <span>Rating: {getAvgRating(reviews)}</span>
            </div>
        </>
    );
};

export default InfoText;
