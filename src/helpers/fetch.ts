import prisma from "./prisma";

export async function getCategories() {
    const result = await prisma.category.findMany({ include: { products: true } });

    if (!result) throw new Error("Failed to fetch data");
    return result;
}

export async function getCategoryProduct(id: string) {
    const result = await prisma.product.findMany({ where: { categoryId: id }, include: { category: true, reviews: true } });

    if (!result) throw new Error("Failed to fetch data");
    return result;
}

export async function getProducts() {
    const result = await prisma.product.findMany({
        orderBy: { price: "desc" },
        include: { category: true, reviews: true },
        take: 6,
    });

    if (!result) throw new Error("Failed to fetch data");
    return result;
}

export async function getProduct(id: string) {
    const result = await prisma.product.findUnique({
        where: { id },
        include: { category: true, reviews: { include: { user: true } } },
    });

    if (!result) throw new Error("Failed to fetch data");
    return result;
}
