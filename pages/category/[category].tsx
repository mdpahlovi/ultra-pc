import Main from "@/layouts/Main";
import { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductCard from "@/components/Product/ProductCard";
import { IProduct } from "@/model/products/product.interface";
import { ICategory } from "@/model/categories/category.interface";
import styles from "@/styles/Category.module.css";

export default function CategoryProduct({ products }: { products: IProduct[] }) {
    return (
        <div className={styles.products}>
            {/* {products?.length && products.map((product) => <ProductCard key={product?._id} product={product} />)} */}
        </div>
    );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch("https://ultra-pc.vercel.app/api/category");
//     const categories = await res.json();

//     const paths = categories.map((category: ICategory) => ({
//         params: { category: category._id },
//     }));

//     return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//     const { params } = context;
//     const res = await fetch(`http://localhost:3000/api/product/${params?.category}`);
//     const products = await res.json();

//     return { props: { products } };
// };

CategoryProduct.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Products - Ultra Pc" className="">
            {page}
        </Main>
    );
};
