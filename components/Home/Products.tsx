import ProductCard from "../Product/ProductCard";
import type { IProduct } from "@/model/products/product.interface";

export default function Products({ products }: { products: IProduct[] }) {
    return (
        <div className="products">
            {products?.length && products.map((product) => <ProductCard key={product?._id} product={product} />)}
        </div>
    );
}
