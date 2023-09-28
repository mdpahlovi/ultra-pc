import Link from "next/link";
import { Button, Card } from "antd";
import { getCategories } from "@/helpers/fetch";
import CompleteBuild from "@/components/Common/CompleteBuild";
import SelectedProduct from "@/components/Common/SelectedProduct";

export const metadata = { title: "Builder" };

export default async function PCBuilder() {
    const categories = await getCategories();
    const parts = categories.filter(category => category.name !== "Others");

    return (
        <div className="space-y-6">
            {parts?.length &&
                parts.map(({ id, name, products }) => (
                    <Card key={id} bordered={false}>
                        <div className="flex justify-between gap-6">
                            <h3>
                                {name} ({products?.length})
                            </h3>
                            <Link href={`/pc-builder/${id}`}>
                                <Button shape="round">Select</Button>
                            </Link>
                        </div>
                        <SelectedProduct name={name} />
                    </Card>
                ))}
            <CompleteBuild />
        </div>
    );
}
