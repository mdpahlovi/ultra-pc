import menuItem from "@/helpers/menuItem";
import { usePathname } from "next/navigation";
import { Menu, Button, type MenuProps } from "antd";
import { useSession, signOut } from "next-auth/react";
import useCategoryMenu from "@/hooks/useCategoryMenu";
import type { ItemType } from "antd/es/menu/hooks/useItems";

export default function MenuItems({ vertical }: { vertical?: boolean }) {
    const { data } = useSession();
    const pathname = usePathname();
    const categoryMenuItems = useCategoryMenu();

    const isAuthenticated = (): ItemType => {
        if (data?.user) {
            return menuItem(
                "/signup",
                <Button type="primary" shape="round" onClick={() => signOut()} danger>
                    SignOut
                </Button>,
                true,
            );
        } else {
            return menuItem(
                "/login",
                <Button type="primary" shape="round" ghost>
                    Login / Signup
                </Button>,
            );
        }
    };

    const items: MenuProps["items"] = [
        menuItem("/", "Home"),
        {
            key: "/category",
            label: "Products",
            children: [...categoryMenuItems],
        },
        menuItem(
            "/pc-builder",
            <Button type="primary" shape="round">
                PC Builder
            </Button>,
        ),
        isAuthenticated(),
    ];

    return <Menu mode={vertical ? "vertical" : "horizontal"} selectedKeys={[pathname]} items={items} />;
}
