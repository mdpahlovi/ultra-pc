import Link from "next/link";
import { ItemType } from "antd/lib/menu/interface";

export default function menuItem(href: string, text: React.ReactNode | string, noLink?: boolean): ItemType {
    return { key: href, label: noLink ? text : <Link href={href}>{text}</Link> };
}
