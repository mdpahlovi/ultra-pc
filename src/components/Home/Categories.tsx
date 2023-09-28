import { ICategory } from "@/types";
import AntCard from "../AntRapper/AntCard";
import NextLink from "../AntRapper/NextLink";

export default function Categories({ categories }: { categories: ICategory[] }) {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {categories?.length &&
                categories.map(({ id, name, image, products }) => (
                    <AntCard key={id} image={image} imageClassName="-mb-2 px-6 pt-6" width={100} height={100}>
                        <NextLink href={`/category/${id}`}>
                            {name} ({products.length})
                        </NextLink>
                    </AntCard>
                ))}
        </div>
    );
}
