import type { IReviews } from "@/model/products/product.interface";

export default function getAvgRating(reviews: IReviews[]): number {
    if (reviews.length === 0) {
        return 0;
    } else {
        const ratings = reviews.map((review) => review.rating);
        const sumOfRatings = ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const avgRating = sumOfRatings / ratings.length;
        return Number(avgRating.toFixed(2));
    }
}
