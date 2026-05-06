'use client';

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

type Props = {
    value: string;
    setValue: (value: string) => void;
    label: string;
    type?: 'text' | 'password';
}

export default function Field({ value, setValue, label, type = 'text' }: Props) {
    const [focused, setFocused] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1 w-full">
            <h4 className="text-sm font-medium">{label}</h4>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={clsx("rounded-lg py-2.5 px-3 text-sm text-muted-foreground outline-none border-1", { "border-primary": focused, "border-border": !focused })}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={`Masukkan ${label}...`}
            />
            {type === 'password' && <Link href="#" className="text-primary text-sm text-right mt-1">Lupa password?</Link>}
        </div>
    );
}