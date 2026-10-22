"use client";

import { useState, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: ReactNode;
    badgeText?: string;
    isLoading?: boolean;
}

export default function ActionButton({
    label = "Descargar Guía Lab",
    badgeText = "PDF",
    icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
    ),
    isLoading = false,
    onClick,
    ...rest
}: ActionButtonProps) {
    const [loading, setLoading] = useState(false);
    const busy = isLoading || loading;

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        onClick?.(event);
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
    }

    return (
        <button
            {...rest}
            type="button"
            onClick={handleClick}
            disabled={busy}
            aria-busy={busy}
            className="btn btn-primary rounded-xl text-white shadow-sm"
        >
            {busy ? (
                <span className="loading loading-spinner loading-xs" aria-hidden="true" />
            ) : (
                icon
            )}
            {label}
            {badgeText && <span className="badge badge-secondary badge-sm">{badgeText}</span>}
        </button>
    );
}
