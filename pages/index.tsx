import type { ReactElement } from "react";
import Main from "@/layouts/Main";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data } = useSession();
    console.log(data?.user);

    return <div>Home Page</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Ultra Pc | Pc Builders" className="">
            {page}
        </Main>
    );
};
