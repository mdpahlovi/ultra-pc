"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuItems from "./MenuItems";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import ThemeToggle from "@/components/AntRapper/ThemeToggle";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="flex w-full items-center justify-between">
                <Link href="/" className="flex-center">
                    <Image src="/logo.png" alt="" width={144} height={40} />
                </Link>
                <div className="hidden items-center justify-center gap-4 lg:flex">
                    <MenuItems />
                    <ThemeToggle />
                </div>
                <div className="flex-center gap-8 lg:hidden">
                    <ThemeToggle />
                    <Button shape="circle" onClick={() => setOpen(true)}>
                        <MenuOutlined />
                    </Button>
                </div>
            </nav>
            <Drawer title="Menu" placement="right" open={open} onClose={() => setOpen(false)}>
                <MenuItems vertical />
            </Drawer>
        </>
    );
}
