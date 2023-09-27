import ProductCard from "../Product/ProductCard";
import type { IProduct } from "@/model/products/product.interface";

export default function Products({ products }: { products: IProduct[] }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products?.length && products.map(product => <ProductCard key={product?._id} product={product} />)}
        </div>
    );
}
