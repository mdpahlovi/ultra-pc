import Image from "next/image";
import Main from "@/layouts/Main";
import { ReactElement } from "react";
import { Badge, Card, Tag } from "antd";
import { GetStaticPaths, GetStaticProps } from "next";
import calculateAverage from "@/helpers/calculateAverage";
import { IProduct } from "@/model/products/product.interface";
import { ICategory } from "@/model/categories/category.interface";

export default function ProductDetails({ product }: { product: IProduct }) {
    const { _id, name, image, category, price, status, reviews } = product;

    let rating;
    if (reviews.length === 0) {
        rating = 0;
    } else {
        rating = calculateAverage(reviews.map((review) => review.rating));
    }

    return (
        // <Badge.Ribbon text={(category as ICategory).name}>
        //     <Card bordered={false} cover={<Image src={image} alt="" width={448} height={256} />}>
        //         <h3 style={{ marginBottom: "10px" }}>{name}</h3>
        //         <div style={{ marginBottom: "4px", height: "4px", background: "#000", width: "100%" }} />
        //         <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
        //             <span>Price: ${price}</span>
        //             <span>Rating: {rating}</span>
        //         </div>
        //         <Tag color={status === "In Stock" ? "#87d068" : "#f50"} style={{ margin: "10px 0 16px" }}>
        //             {status}
        //         </Tag>
        //     </Card>
        // </Badge.Ribbon>
    );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch("https://ultra-pc.vercel.app/api/product");
//     const products = await res.json();

//     const paths = products.map((product: IProduct) => ({
//         params: { product: product._id },
//     }));

//     return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const res = await fetch(`https://ultra-pc.vercel.app/api/product/${params?.product}`);
//     const product = await res.json();

//     return { props: { product } };
// };

ProductDetails.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Product - Ultra Pc" className="">
            {page}
        </Main>
    );
};
