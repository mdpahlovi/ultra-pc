import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Button, type MenuProps } from "antd";

const navLink = (href: string, text: string) => {
    return { key: href, label: <Link href={href}>{text}</Link> };
};

export default function MenuItems({ vertical }: { vertical?: boolean }) {
    const { pathname } = useRouter();

    const items: MenuProps["items"] = [
        navLink("/", "Home"),
        {
            key: "/products",
            label: "Products",
            children: [
                navLink("/products/cup", "CPU / Processor"),
                navLink("/products/motherboard", "Motherboard"),
                navLink("/products/ram", "RAM"),
                navLink("/products/power-supply-unit", "Power Supply Unit"),
                navLink("/products/storage-device", "Storage Device"),
                navLink("/products/monitor", "Monitor"),
                navLink("/products/others", "Others"),
            ],
        },
        {
            key: "/pc-builder",
            label: (
                <Link href="/pc-builder">
                    <Button shape="round">PC Builder</Button>
                </Link>
            ),
        },
        {
            key: "/login",
            label: (
                <Link href="/login">
                    <Button shape="round">Login / Signup</Button>
                </Link>
            ),
        },
    ];

    return <Menu mode={vertical ? "vertical" : "horizontal"} selectedKeys={[pathname]} items={items} />;
}
