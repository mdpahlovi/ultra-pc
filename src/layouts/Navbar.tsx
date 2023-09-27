"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import MenuItems from "./MenuItems";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="flex w-full items-center justify-between">
                <Link href="/" className="flex-center">
                    <Image src="/logo.png" alt="" width={144} height={40} />
                </Link>
                <div className="hidden w-[480px] lg:block">
                    <MenuItems />
                </div>
                <Button shape="circle" onClick={() => setOpen(true)} className="lg:hidden">
                    <MenuOutlined />
                </Button>
            </nav>
            <Drawer title="Menu" placement="right" open={open} onClose={() => setOpen(false)}>
                <MenuItems vertical />
            </Drawer>
        </>
    );
}
