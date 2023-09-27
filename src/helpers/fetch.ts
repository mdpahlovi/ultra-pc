async function categories() {
    const res = await fetch("https://ultra-pc-server.vercel.app/api/category");
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

async function category(id: string) {
    const res = await fetch(`https://ultra-pc-server.vercel.app/api/category/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

async function products() {
    const res = await fetch("https://ultra-pc-server.vercel.app/api/product/random");
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

async function product(id: string) {
    const res = await fetch(`https://ultra-pc-server.vercel.app/api/product/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

export const get = { categories, category, products, product };
