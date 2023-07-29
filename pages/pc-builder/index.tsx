import { Button, Card } from "antd";
import Link from "next/link";
import Main from "@/layouts/Main";
import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";
import type { ICategory } from "@/model/categories/category.interface";
import styles from "@/styles/PCBuilder.module.css";
import SelectedProduct from "@/components/Common/SelectedProduct";
import CompleteBuild from "@/components/Common/CompleteBuild";

export default function PCBuilder({ categories }: { categories: ICategory[] }) {
    const parts = categories.filter((category) => category.name !== "Others");

    return (
        <>
            {parts?.length &&
                parts.map(({ _id, name, products }) => (
                    <Card key={_id} bordered={false}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                            <h3>
                                {name} ({products?.length})
                            </h3>
                            <Link href={`/pc-builder/${_id}`} style={{ display: "block" }}>
                                <Button shape="round">Select</Button>
                            </Link>
                        </div>
                        <SelectedProduct name={name} />
                    </Card>
                ))}
            <CompleteBuild />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`https://ultra-pc-server.vercel.app/api/category`);
    const categories = await res.json();

    return { props: { categories } };
};

PCBuilder.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="PC Builder - Ultra Pc" className={styles.main}>
            {page}
        </Main>
    );
};
