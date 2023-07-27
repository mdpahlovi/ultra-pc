import type { ReactElement } from "react";
import Main from "@/layouts/Main";

export default function Home() {
    return <div>Home Page</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Ultra Pc | Pc Builders" className="">
            {page}
        </Main>
    );
};
