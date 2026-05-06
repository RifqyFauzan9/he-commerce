'use client';

import clsx from "clsx";
import { useState } from "react";

type Props = {
    value: string;
    setValue: (value: string) => void;
    label: string;
}

export default function Field({ value, setValue, label }: Props) {
    const [focused, setFocused] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1 w-full mb-3">
            <h4 className="text-sm font-medium">{label}</h4>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={clsx("rounded-lg py-2 px-3 text-sm text-muted-foreground outline-none border-1", { "border-primary": focused, "border-border": !focused })}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={`Masukkan ${label}...`}
            />
        </div>
    );
}