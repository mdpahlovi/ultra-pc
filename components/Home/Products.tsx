import { IProduct } from "@/model/products/product.interface";
import ProductCard from "../Product/ProductCard";

export default function Products({ products }: { products: IProduct[] }) {
    return (
        <div className="products">
            {products?.length && products.map((product) => <ProductCard key={product?._id} product={product} />)}
        </div>
    );
}
