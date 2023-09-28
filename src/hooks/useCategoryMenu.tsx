import axios from "axios";
import { useEffect, useState } from "react";
import menuItem from "@/components/AntRapper/menuItem";

export default function useCategoryMenu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("/api/category").then(res => setCategories(res.data));
    }, []);

    return categories.map(({ id, name }) => menuItem(`/category/${id}`, name));
}
