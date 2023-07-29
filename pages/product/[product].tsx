import Image from "next/image";
import Main from "@/layouts/Main";
import { Avatar, Badge, List } from "antd";
import type { ReactElement } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { IProduct } from "@/model/products/product.interface";
import type { ICategory } from "@/model/categories/category.interface";
import type { IUser } from "@/model/users/user.interface";
import Section from "@/components/Common/Section";
import InfoText from "@/components/Common/InfoText";
import Status from "@/components/Common/Status";
import styles from "@/styles/Product.module.css";

export default function ProductDetails({ product }: { product: IProduct }) {
    const { name, image, category, price, status, description, keyFeature, reviews } = product;

    return (
        <>
            <div className={styles.containerFluid}>
                <Badge.Ribbon text={(category as ICategory).name}>
                    <Image src={image} alt="" width={448} height={256} />
                </Badge.Ribbon>
                <div>
                    <h2 style={{ marginBottom: "14px" }}>{name}</h2>
                    <InfoText price={price} reviews={reviews} />
                    <Status status={status} />
                    <p>{description}</p>
                    <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h4>Key Feature : </h4>
                        {keyFeature?.length && keyFeature.map((feature, idx) => <p key={idx}>{feature}</p>)}
                    </div>
                </div>
            </div>
            <Section title="Reviews">
                <List
                    style={{ maxWidth: "768px", marginInline: "auto" }}
                    itemLayout="horizontal"
                    dataSource={reviews}
                    renderItem={({ user, rating, comment }) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={(user as IUser)?.image} />}
                                title={
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span>{(user as IUser)?.name}</span>
                                        <span>{rating}</span>
                                    </div>
                                }
                                description={comment}
                            />
                        </List.Item>
                    )}
                />
            </Section>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("https://ultra-pc-server.vercel.app/api/product");
    const products = await res.json();

    const paths = products.map((product: IProduct) => ({
        params: { product: product?._id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`https://ultra-pc-server.vercel.app/api/product/${params?.product}`);
    const product = await res.json();

    return { props: { product } };
};

ProductDetails.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Product - Ultra Pc" className="">
            {page}
        </Main>
    );
};
