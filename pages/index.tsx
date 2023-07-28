import Main from "@/layouts/Main";
import Hero from "@/components/Home/Hero";
import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { ICategory } from "@/model/categories/category.interface";
import Products from "@/components/Home/Products";
import Categories from "@/components/Home/Categories";

export default function Home({ categories }: { categories: ICategory[] }) {
    const { data } = useSession();
    console.log(data?.user);

    return (
        <>
            <Hero />
            <div style={{ padding: "50px 0" }}>
                <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Featured Products</h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                    <Products />
                </div>
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
    const res = await fetch("http://localhost:3000/api/category");
    const categories = await res.json();
    return { props: { categories } };
};

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Ultra Pc | Pc Builders" className="">
            {page}
        </Main>
    );
};
