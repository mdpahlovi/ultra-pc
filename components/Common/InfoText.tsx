import getAvgRating from "@/helpers/getAvgRating";
import type { IReviews } from "@/model/products/product.interface";

const InfoText = ({ price, reviews }: { price: number; reviews: IReviews[] }) => {
    return (
        <>
            <div className="horizontalLine" />
            <div className="infoText">
                <span>Price: ${price}</span>
                <span>Rating: {getAvgRating(reviews)}</span>
            </div>
        </>
    );
};

export default InfoText;
