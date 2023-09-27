"use client";

import Link from "next/link";
import Status from "../AntRapper/Status";
import AntCard from "../AntRapper/AntCard";
import InfoText from "../Common/InfoText";
import { usePathname } from "next/navigation";
import AddToBuilder from "../Common/AddToBuilder";
import { BadgeRibbon, Button } from "@/exports/ant";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";

export default function ProductCard({ product }: { product: IProduct }) {
    const pathname = usePathname();
    const { _id, name, image, category, price, status, reviews } = product;

    return (
        <BadgeRibbon text={(category as ICategory).name}>
            <AntCard image={image} width={448} height={256}>
                <h3 style={{ marginBottom: "10px" }}>{name}</h3>
                <InfoText price={price} reviews={reviews} />
                <Status status={status} />
                {pathname.includes("pc-builder") ? (
                    <AddToBuilder product={product} />
                ) : (
                    <Link href={`/product/${_id}`} style={{ display: "block" }}>
                        <Button shape="round" style={{ backgroundColor: "black", color: "white" }} block>
                            See Details
                        </Button>
                    </Link>
                )}
            </AntCard>
        </BadgeRibbon>
    );
}
