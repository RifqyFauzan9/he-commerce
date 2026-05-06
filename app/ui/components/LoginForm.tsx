'use client';

import { useState } from "react";
import Field from "./Field";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            router.push('/admin/dashboard');
        }} className="flex flex-col gap-4">
            <Field label="Email" value={email} setValue={setEmail} />
            <Field label="Password" value={password} setValue={setPassword} type="password" />

            <button type="submit" className="bg-primary py-2 text-primary-foreground rounded-lg mt-3">Masuk</button>

            <p className="text-center text-xs text-muted-foreground mt-8">&copy; 2024 AdminStore. All rights reserved.</p>
        </form>
    )
}