import { Category, Product, Review, User } from "@prisma/client";

export type IProduct = {
    category: Category;
    reviews: Review[] | [];
} & Product;

export type ICategory = {
    products: Product[] | [];
} & Category;

export type IReview = {
    user: User;
} & Review;

export type SocialButtonProps = {
    provider: "google" | "github";
} & React.PropsWithChildren;

export type AntCardProps = {
    image: string;
    width: number;
    height: number;
    className?: string;
    imageClassName?: string;
} & React.PropsWithChildren;

export type SectionProps = {
    title?: string;
    className?: string;
} & React.PropsWithChildren;
