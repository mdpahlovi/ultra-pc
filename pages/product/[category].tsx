import Main from "@/layouts/Main";
import { ReactElement } from "react";

export default function CategoryProduct() {
    return <div>CategoryProduct</div>;
}

CategoryProduct.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Products - Ultra Pc" className="">
            {page}
        </Main>
    );
};
