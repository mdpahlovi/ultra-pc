import Main from "@/layouts/Main";
import Hero from "@/components/Home/Hero";
import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import { ICategory } from "@/model/categories/category.interface";
import Products from "@/components/Home/Products";
import Categories from "@/components/Home/Categories";
import { IProduct } from "@/model/products/product.interface";

export default function Home({ categories, products }: { categories: ICategory[]; products: IProduct[] }) {
    return (
        <>
            <Hero />
            <div style={{ padding: "50px 0" }}>
                <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Featured Products</h2>
                <Products products={products} />
            </div>
            <div>
                <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Featured Categories</h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                    <Categories categories={categories} />
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res1 = await fetch(`https://ultra-pc-server.vercel.app/api/category`);
    const res2 = await fetch(`https://ultra-pc-server.vercel.app/api/product/random`);

    const categories = await res1.json();
    const products = await res2.json();
    return { props: { categories, products } };
};

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Ultra Pc | Pc Builders" className="">
            {page}
        </Main>
    );
};
