"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

export default function SignupForm() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async (values: { name: string; email: string; password: string }) => {
        axios
            .post("/api/auth/signup", values)
            .then(({ data }) => {
                data?.status ? router.push("/login") : alert(data?.message);
            })
            .catch(error => alert(error?.message));
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item name="name" rules={[{ required: true, message: "Please input your name!" }]}>
                <Input prefix={<UserOutlined />} placeholder="Your Name" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
                <Input prefix={<MailOutlined />} type="email" placeholder="Your Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item name="cPassword" dependencies={["password"]} rules={[{ required: true, message: "Please confirm your password!" }]}>
                <Input.Password prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
            </Form.Item>
            <Button type="primary" shape="round" htmlType="submit" loading={isLoading} style={{ width: "50%" }}>
                Signup
            </Button>
        </Form>
    );
}
