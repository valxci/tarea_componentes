type Status = "active" | "pending" | "danger" | "neutral";

interface StatusBadgeProps {
    status?: Status;
    label?: string;
    hasPulse?: boolean;
}

function badgeClass(status: Status) {
    switch (status) {
        case "pending":
            return "badge badge-soft badge-secondary rounded-full border-secondary/40 h-9 px-4 text-sm";
        case "danger":
            return "badge badge-soft badge-error rounded-full border-error/40 h-9 px-4 text-sm";
        case "neutral":
            return "badge badge-soft badge-neutral rounded-full border-neutral/30 h-9 px-4 text-sm";
        default:
            return "badge badge-soft badge-success rounded-full border-success/40 h-9 px-4 text-sm";
    }
}

export default function StatusBadge({
    status = "active",
    label = "Matriculado Activo",
    hasPulse = true,
}: StatusBadgeProps) {
    const dot = hasPulse
        ? "h-2 w-2 rounded-full bg-current animate-pulse"
        : "h-2 w-2 rounded-full bg-current";

    return (
        <span className={badgeClass(status)}>
            <span className={dot} />
            {label}
        </span>
    );
}
