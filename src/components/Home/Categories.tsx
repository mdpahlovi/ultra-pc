import AntCard from "../AntRapper/AntCard";
import NextLink from "../AntRapper/NextLink";
import type { ICategory } from "@/model/categories/category.interface";

export default function Categories({ categories }: { categories: ICategory[] }) {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {categories?.length &&
                categories.map(({ _id, name, image, products }) => (
                    <AntCard key={_id} image={image} width={100} height={100} imageClassName="p-6">
                        <NextLink href={`/category/${_id}`}>
                            {name} ({products.length})
                        </NextLink>
                    </AntCard>
                ))}
        </div>
    );
}