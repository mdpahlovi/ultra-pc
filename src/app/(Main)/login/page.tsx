import Link from "next/link";
import { Divider } from "antd";
import LoginForm from "@/components/Auth/LoginForm";
import SocialButton from "@/components/Auth/SocialButton";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

export default function LoginPage() {
    return (
        <div className="mx-auto h-max w-[448px] rounded-2xl bg-[#090928] px-10 py-9 text-white">
            <h2 className="mb-8">Login to Your Account</h2>
            <div className="grid grid-cols-2 gap-6">
                <SocialButton provider="google">
                    Google <GoogleOutlined />
                </SocialButton>
                <SocialButton provider="github">
                    Github <GithubOutlined />
                </SocialButton>
            </div>
            <Divider className="border-white text-white">OR Login With</Divider>
            <LoginForm />
            <Link href="/signup" className="mt-4 block text-white">
                Or Signup
            </Link>
        </div>
    );
}
