import Image from "next/image";
import prisma from "@/helpers/prisma";
import { BadgeRibbon } from "@/exports/ant";
import { getProduct } from "@/helpers/fetch";
import Status from "@/components/AntRapper/Status";
import Section from "@/components/AntRapper/Section";
import InfoText from "@/components/Common/InfoText";
import ProductReview from "@/components/Product/ProductReview";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const product = await prisma.product.findUnique({ where: { id: params?.id }, select: { name: true } });
    return { title: product?.name };
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);
    const { name, image, category, price, status, description, keyFeature, reviews } = product;

    return (
        <>
            <Section className="grid gap-6 lg:grid-cols-2 lg:gap-24">
                <BadgeRibbon text={category.name}>
                    <div className="rounded-lg bg-white">
                        <Image src={image} alt="" className="w-auto rounded-lg" width={448} height={256} />
                    </div>
                </BadgeRibbon>
                <div>
                    <h2 className="mb-4">{name}</h2>
                    <InfoText price={price} reviews={reviews} />
                    <Status status={status} />
                    <p>{description}</p>
                    <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h4>Key Feature : </h4>
                        {keyFeature?.length && keyFeature.map((feature, idx) => <p key={idx}>{feature}</p>)}
                    </div>
                </div>
            </Section>
            <Section title="User Reviews">
                <ProductReview reviews={reviews} />
            </Section>
        </>
    );
}
