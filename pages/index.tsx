import Main from "@/layouts/Main";
import Hero from "@/components/Home/Hero";
import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import Section from "@/components/Common/Section";
import Products from "@/components/Home/Products";
import Categories from "@/components/Home/Categories";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";
import styles from "@/styles/Home.module.css";

export default function Home({ categories, products }: { categories: ICategory[]; products: IProduct[] }) {
    return (
        <>
            <Hero />
            <Section title="Featured Products">
                <Products products={products} />
            </Section>
            <Section title="Featured Categories">
                <div className={styles.categories}>
                    <Categories categories={categories} />
                </div>
            </Section>
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
