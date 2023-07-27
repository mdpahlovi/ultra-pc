import Link from "next/link";
import Main from "@/layouts/Main";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import type { ReactElement } from "react";
import { Button, Divider, Form, Input } from "antd";
import { GoogleOutlined, GithubOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import styles from "@/styles/Auth.module.css";

export default function LoginPage() {
    const { query } = useRouter();
    const [form] = Form.useForm();

    const onFinish = async (data: any) => {
        console.log({ data });
    };

    const googleLogin = () => {
        signIn("google", {
            callbackUrl: "http://localhost:3000/",
        });
    };

    const githubLogin = () => {
        signIn("github", {
            callbackUrl: "http://localhost:3000/",
        });
    };

    return (
        <div className={styles.form}>
            <h2 style={{ marginBottom: "32px" }}>Login to Your Account</h2>
            <div className={styles.social_icons}>
                <Button shape="round" size="large" onClick={googleLogin} ghost>
                    Google <GoogleOutlined />
                </Button>
                <Button shape="round" size="large" onClick={githubLogin} ghost>
                    Github <GithubOutlined />
                </Button>
            </div>
            <Divider style={{ color: "#DDD", borderColor: "#DDD" }}>OR Login</Divider>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
                    <Input prefix={<MailOutlined />} type="email" placeholder="Your Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="Your Password" />
                </Form.Item>
                <Button type="primary" shape="round" size="large" htmlType="submit" style={{ width: "50%" }}>
                    Login
                </Button>
            </Form>
            <Link href="/signup">Or Signup</Link>
        </div>
    );
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Login - Ultra Pc" className={styles.formContainer}>
            {page}
        </Main>
    );
};
