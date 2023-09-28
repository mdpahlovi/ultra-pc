import axios from "axios";
import menuItem from "@/components/AntRapper/menuItem";
import { useEffect, useState } from "react";

export default function useCategoryMenu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("https://ultra-pc-server.vercel.app/api/category").then(res => setCategories(res.data));
    }, []);

    return categories.map(({ _id, name }) => menuItem(`/category/${_id}`, name));
}
