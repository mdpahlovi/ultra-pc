import Main from "@/layouts/Main";
import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";
import ProductCard from "@/components/Product/ProductCard";
import type { IProduct } from "@/model/products/product.interface";

export default function BuildProduct({ products }: { products: IProduct[] }) {
    return <>{products?.length && products.map((product) => <ProductCard key={product?._id} product={product} select />)}</>;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await fetch(`https://ultra-pc-server.vercel.app/api/category/${params?.category}`);
    const products = await res.json();

    return { props: { products } };
};

BuildProduct.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Select - Ultra Pc" className="products">
            {page}
        </Main>
    );
};
