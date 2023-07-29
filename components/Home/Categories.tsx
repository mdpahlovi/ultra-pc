import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";
import type { ICategory } from "@/model/categories/category.interface";

export default function Categories({ categories }: { categories: ICategory[] }) {
    return (
        <>
            {categories?.length &&
                categories.map(({ _id, name, image, products }) => (
                    <Card key={_id} bordered={false}>
                        <Image src={image} alt="" width={100} height={100} />
                        <Link href={`/category/${_id}`} style={{ display: "block" }}>
                            {name} ({products.length})
                        </Link>
                    </Card>
                ))}
        </>
    );
}
