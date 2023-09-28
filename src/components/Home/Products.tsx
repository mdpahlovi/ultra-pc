import type { IProduct } from "@/types";
import ProductCard from "../Product/ProductCard";

export default function Products({ products }: { products: IProduct[] }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products?.length && products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
    );
}
