import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Menu, Button, type MenuProps } from "antd";
import { useSession, signOut } from "next-auth/react";

const navLink = (href: string, text: string) => {
    return { key: href, label: <Link href={href}>{text}</Link> };
};

export default function MenuItems({ vertical }: { vertical?: boolean }) {
    const { pathname } = useRouter();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("/api/category").then((res) => setCategories(res.data));
    }, []);

    const categoryLinks = categories.map(({ _id, name }) => navLink(`/products/${_id}`, name));

    const items: MenuProps["items"] = [
        navLink("/", "Home"),
        {
            key: "/products",
            label: "Products",
            children: [...categoryLinks],
        },
        {
            key: "/pc-builder",
            label: (
                <Link href="/pc-builder">
                    <Button type="primary" shape="round">
                        PC Builder
                    </Button>
                </Link>
            ),
        },
        {
            key: "/login",
            label: <AuthButton />,
        },
    ];

    return <Menu mode={vertical ? "vertical" : "horizontal"} selectedKeys={[pathname]} items={items} />;
}

const AuthButton = () => {
    const { data } = useSession();

    return (
        <>
            {data?.user ? (
                <Button type="primary" shape="round" onClick={() => signOut()} danger>
                    SignOut
                </Button>
            ) : (
                <Link href="/login">
                    <Button type="primary" shape="round" ghost>
                        Login / Signup
                    </Button>
                </Link>
            )}
        </>
    );
};
