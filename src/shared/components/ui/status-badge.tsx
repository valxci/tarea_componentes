type BadgeStatus = "active" | "pending" | "danger" | "neutral";

interface StatusBadgeProps {
    status: BadgeStatus;
    label: string;
    hasPulse?: boolean;
    className?: string;
}

const statusClasses = {
    active: "bg-[#edf8f2] text-[#2e7d50] border-[#b7e3ca]",
    pending: "bg-[#f4f0fd] text-[#5527be] border-[#d5c3fa]",
    danger: "bg-[#fdf0eb] text-[#b33a15] border-[#f5c2b0]",
    neutral: "bg-[#f8f9fc] text-slate-600 border-[#cecfd4]",
};

const dotClasses = {
    active: "bg-[#4cb979]",
    pending: "bg-[#865cf0]",
    danger: "bg-[#e9683b]",
    neutral: "bg-slate-400",
};

export default function StatusBadge({ status, label, hasPulse = true, className = "" }: StatusBadgeProps) {
    return <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold border ${statusClasses[status]} ${className}`}>
        <span className={`w-2 h-2 rounded-full ${dotClasses[status]} ${hasPulse ? "animate-pulse" : ""}`}></span>
        {label}
    </span>;
}
