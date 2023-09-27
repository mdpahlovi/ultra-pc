import { get } from "@/helpers/fetch";
import Hero from "@/components/Home/Hero";
import Section from "@/components/AntRapper/Section";
import Products from "@/components/Home/Products";
import Categories from "@/components/Home/Categories";

export default async function Home() {
    const products = await get.products();
    const categories = await get.categories();

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
