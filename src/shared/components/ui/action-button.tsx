import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ActionButtonProps
    //lo que el botón va estar recibiendo 
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: ReactNode;
    badgeText?: string;
    isLoading?: boolean;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const sizeClasses = {
    sm: "px-6 py-5 text-sm",
    md: "px-10 py-8 text-base",
    lg: "px-22 py-10 text-lg",
};




//los props son lo que  recibe la función

export default function ActionButton({
    label,
    icon,
    badgeText,
    isLoading = false,
    ...buttonProps
}: ActionButtonProps) {


    return <button className={`btn btn-${buttonProps.variant ?? "primary"}
    ${isLoading ? "btn-outline" : ""}
        ${sizeClasses[buttonProps.size ?? "sm"]} rounded-[10px]  m-2  transform transition-transform duration-150
    active:scale-105  active:border-0 font-medium p-12`}>

        {isLoading ? (
            <span className="loading loading-spinner loading-sm" aria-hidden="true" />
        ) : (
            icon
        )}

        {isLoading ? "Procesando..." : label}

        {!isLoading ? <span className="badge badge-secondary rounded-2xl p-2">{badgeText}</span> : null}
    </button >

}
