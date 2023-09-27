import Link from "next/link";
import { ItemType } from "antd/es/menu/hooks/useItems";

export default function menuItem(href: string, text: JSX.Element | string, noLink?: boolean): ItemType {
    return { key: href, label: noLink ? text : <Link href={href}>{text}</Link> };
}
