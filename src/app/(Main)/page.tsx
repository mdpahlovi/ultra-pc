import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Products";
import Section from "@/components/AntRapper/Section";
import Categories from "@/components/Home/Categories";
import { getCategories, getProducts } from "@/helpers/fetch";

export default async function Home() {
    const products = await getProducts();
    const categories = await getCategories();

    return (
        <>
            <Hero />
            <Section title="Featured Products">
                <Products products={products} />
            </Section>
            <Section title="Featured Categories">
                <Categories categories={categories} />
            </Section>
        </>
    );
}
