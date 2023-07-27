import Main from "@/layouts/Main";
import type { ReactElement } from "react";

export default function PCBuilder() {
    return <div>PC Builder Protected</div>;
}

PCBuilder.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="PC Builder - Ultra Pc" className="">
            {page}
        </Main>
    );
};
