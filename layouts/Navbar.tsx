import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button, Drawer, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import MenuItems from "./MenuItems";
import styles from "./Layout.module.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Row style={{ width: "100%" }} justify="space-between" align="middle">
                <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                    <Image src="/logo.png" alt="" width={144} height={40} />
                </Link>
                <div className={styles.menuItems}>
                    <MenuItems />
                </div>
                <Button shape="circle" size="large" onClick={() => setOpen(true)} className={styles.toggleBtn}>
                    <MenuOutlined />
                </Button>
            </Row>
            <Drawer title="Menu" placement="right" open={open} onClose={() => setOpen(false)}>
                <MenuItems vertical />
            </Drawer>
        </>
    );
}
