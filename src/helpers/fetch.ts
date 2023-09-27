export async function getCategories() {
    const res = await fetch("https://ultra-pc-server.vercel.app/api/category");
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export async function getCategoryProduct(id: string) {
    const res = await fetch(`https://ultra-pc-server.vercel.app/api/category/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export async function getProducts() {
    const res = await fetch("https://ultra-pc-server.vercel.app/api/product/random");
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export async function getProduct(id: string) {
    const res = await fetch(`https://ultra-pc-server.vercel.app/api/product/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}
