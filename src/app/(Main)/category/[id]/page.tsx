import prisma from "@/helpers/prisma";
import Products from "@/components/Home/Products";
import { getCategoryProduct } from "@/helpers/fetch";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const category = await prisma.category.findUnique({ where: { id: params?.id }, select: { name: true } });
    return { title: category?.name };
}

export default async function CategoryProduct({ params }: { params: { id: string } }) {
    const products = await getCategoryProduct(params.id);
    return <Products products={products} />;
}
