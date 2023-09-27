import Navbar from "@/layouts/Navbar";
import { Layout, Header, Footer, Content } from "@/exports/ant";

export default function MainLayout({ children }: React.PropsWithChildren) {
    return (
        <Layout>
            <Header className="flex-center">
                <Navbar />
            </Header>
            <Content className="p-12">{children}</Content>
            <Footer className="text-center">Ultra Pc ©2023 Created by MD Pahlovi</Footer>
        </Layout>
    );
}
