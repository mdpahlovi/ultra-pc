import { usePathname } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { useSession, signOut } from "next-auth/react";
import useCategoryMenu from "@/hooks/useCategoryMenu";
import menuItem from "@/components/AntRapper/menuItem";
import { Menu, Button, type MenuProps, Avatar } from "antd";
import type { ItemType } from "antd/es/menu/hooks/useItems";

export default function MenuItems({ vertical }: { vertical?: boolean }) {
    const { data } = useSession();
    const pathname = usePathname();
    const categoryMenuItems = useCategoryMenu();

    const isAuthenticated = (): ItemType => {
        if (data?.user) {
            return {
                key: "/dashboard",
                label: <Avatar src={data?.user?.image} icon={<UserOutlined />} />,
                children: [
                    menuItem("/dashboard", "Dashboard"),
                    menuItem(
                        "/signup",
                        <Button type="primary" shape="round" onClick={() => signOut()} danger>
                            SignOut
                        </Button>,
                        true,
                    ),
                ],
            };
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

    return (
        <div className={data?.user ? "w-[372px]" : "w-[476.5px]"}>
            <Menu mode={vertical ? "vertical" : "horizontal"} selectedKeys={[pathname]} items={items} />
        </div>
    );
}
