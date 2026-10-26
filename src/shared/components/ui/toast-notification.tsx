"use client";

import { StarCheck } from "lucide-react";
import { useState } from "react";

interface ToastNotificationProps {
    title: string;
    message: string;
    variant?: "success" | "info" | "warning" | "error";
    onClose?: () => void;
}

const variantClasses = {
    success: { border: "border-[#4cb979]/40", icon: "bg-[#4cb979]/15 text-[#4cb979]" },
    info: { border: "border-[#5454e9]/40", icon: "bg-[#5454e9]/15 text-[#5454e9]" },
    warning: { border: "border-[#e4eb60]/60", icon: "bg-[#e4eb60]/20 text-[#7a6a00]" },
    error: { border: "border-[#e9683b]/40", icon: "bg-[#e9683b]/15 text-[#e9683b]" },
};

export default function ToastNotification({ title, message, variant = "success", onClose }: ToastNotificationProps) {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    function handleClose() {
        setVisible(false);
        onClose?.();
    }

    return <div className="toast toast-top toast-end z-50">
        <div className={`alert bg-white border ${variantClasses[variant].border} text-slate-800 shadow-md rounded-2xl p-4 flex items-center justify-between max-w-md w-full`}>
            <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${variantClasses[variant].icon}`}>
                    <StarCheck size={20} />
                </div>
                <div>
                    <div className="text-s font-bold text-slate-900">{title}</div>
                    <div className="text-[12px] text-slate-500">{message}</div>
                </div>
            </div>

            <button type="button" onClick={handleClose} aria-label="Cerrar notificación" className="btn btn-xs btn-ghost text-slate-400 hover:text-slate-600 hover:border-0 hover:rounded-l  border-0">✕</button>
        </div>
    </div>;
}
