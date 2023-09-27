import Link from "next/link";
import SignupForm from "@/components/Auth/SignupForm";

export default function SignupPage() {
    return (
        <div className="mx-auto h-max w-[448px] rounded-2xl bg-[#090928] px-10 py-9 text-white">
            <h2 className="mb-8">Create New Account</h2>
            <SignupForm />
            <Link href="/login" className="mt-4 block text-white">
                Or Login
            </Link>
        </div>
    );
}
