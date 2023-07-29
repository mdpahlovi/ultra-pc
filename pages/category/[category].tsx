import Main from "@/layouts/Main";
import type { ReactElement } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import ProductCard from "@/components/Product/ProductCard";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";

export default function CategoryProduct({ products }: { products: IProduct[] }) {
    return <>{products?.length && products.map((product) => <ProductCard key={product?._id} product={product} />)}</>;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/category");
    const categories = await res.json();

    const paths = categories.map((category: ICategory) => ({
        params: { category: category?._id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/category/${params?.category}`);
    const products = await res.json();

    return { props: { products } };
};

CategoryProduct.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Products - Ultra Pc" className="products">
            {page}
        </Main>
    );
};
