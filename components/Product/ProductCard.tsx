import Link from "next/link";
import Image from "next/image";
import Status from "../Common/Status";
import InfoText from "../Common/InfoText";
import { Badge, Button, Card } from "antd";
import AddToBuilder from "../Common/AddToBuilder";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";

export default function ProductCard({ product, select }: { product: IProduct; select?: boolean }) {
    const { _id, name, image, category, price, status, reviews } = product;

    return (
        <Badge.Ribbon text={(category as ICategory).name}>
            <Card bordered={false} cover={<Image src={image} alt="" width={448} height={256} />}>
                <h3 style={{ marginBottom: "10px" }}>{name}</h3>
                <InfoText price={price} reviews={reviews} />
                <Status status={status} />
                {select ? (
                    <AddToBuilder product={product} />
                ) : (
                    <Link href={`/product/${_id}`} style={{ display: "block" }}>
                        <Button size="large" shape="round" style={{ backgroundColor: "black", color: "white" }} block>
                            See Details
                        </Button>
                    </Link>
                )}
            </Card>
        </Badge.Ribbon>
    );
}
