import { get } from "@/helpers/fetch";
import Products from "@/components/Home/Products";

export default async function CategoryProduct({ params }: { params: { id: string } }) {
    const products = await get.category(params.id);
    return <Products products={products} />;
}
