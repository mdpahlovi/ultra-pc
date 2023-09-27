"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

export default function LoginForm() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async ({ email, password }: { email: string; password: string }) => {
        setIsLoading(true);
        const status = await signIn("credentials", { redirect: false, email, password, callbackUrl: "/" });
        if (status?.ok) router.push(status?.url!);
        if (status?.error) alert(status.error);
        setIsLoading(false);
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
                <Input prefix={<MailOutlined />} type="email" placeholder="Your Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                <Input.Password prefix={<LockOutlined />} type="password" placeholder="Your Password" />
            </Form.Item>
            <Button type="primary" shape="round" htmlType="submit" loading={isLoading} style={{ width: "50%" }}>
                Login
            </Button>
        </Form>
    );
}
