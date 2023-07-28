import axios from "axios";
import Link from "next/link";
import Main from "@/layouts/Main";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import styles from "@/styles/Auth.module.css";

export default function SignupPage() {
    const router = useRouter();
    const [form] = Form.useForm();

    const onFinish = async (values: { name: string; email: string; password: string }) => {
        axios
            .post("/api/auth/signup", values)
            .then(({ data }) => {
                data?.status ? router.push("/login") : alert(data?.message);
            })
            .catch((error) => alert(error?.message));
    };

    return (
        <div className={styles.form}>
            <h2 style={{ marginBottom: "32px" }}>Create New Account</h2>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item name="name" rules={[{ required: true, message: "Please input your name!" }]}>
                    <Input prefix={<UserOutlined />} placeholder="Your Name" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
                    <Input prefix={<MailOutlined />} type="email" placeholder="Your Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Button type="primary" shape="round" size="large" htmlType="submit" style={{ width: "50%" }}>
                    Signup
                </Button>
            </Form>
            <Link href="/login">Or Login</Link>
        </div>
    );
}

SignupPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Main title="Signup - Ultra Pc" className={styles.formContainer}>
            {page}
        </Main>
    );
};
