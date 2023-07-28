import Main from "@/layouts/Main";
import { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductCard from "@/components/Product/ProductCard";
import { IProduct } from "@/model/products/product.interface";
import { ICategory } from "@/model/categories/category.interface";
import styles from "@/styles/Category.module.css";

export default function ProductDetails() {
    // { product }: { products: IProduct }
    return (
        <div className={styles.products}>
            {/* {products?.length && products.map((product) => <ProductCard key={product?._id} product={product} />)} */}
        </div>
    );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch("https://ultra-pc.vercel.app/api/product");
//     const products = await res.json();

//     const paths = products.map((product: IProduct) => ({
//         params: { id: product._id },
//     }));

//     return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//     const { params } = context;
//     const res = await fetch(`https://ultra-pc.vercel.app/api/product/${params?.category}`);
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
