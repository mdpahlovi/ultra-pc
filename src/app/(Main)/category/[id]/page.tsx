import Products from "@/components/Home/Products";
import { getCategoryProduct } from "@/helpers/fetch";

export default async function CategoryProduct({ params }: { params: { id: string } }) {
    const products = await getCategoryProduct(params.id);
    return <Products products={products} />;
}
