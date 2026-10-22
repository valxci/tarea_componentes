import ActionButton from "@/src/shared/components/ui/action-button";
import AlertBanner from "@/src/shared/components/ui/alert-banner";
import StatusBadge from "@/src/shared/components/ui/status-badge";

export default function Components() {
    return (
        <div className="min-h-screen bg-white p-6 flex flex-col items-start gap-6">
            <h1 className="text-3xl text-primary">Tarea Corte 3</h1>

            <ActionButton />
            <AlertBanner />

            <div className="flex flex-wrap gap-3">
                <StatusBadge status="active" label="Matriculado Activo" />
                <StatusBadge status="pending" label="En Revisión Previa" hasPulse={false} />
                <StatusBadge status="danger" label="Requisito Pendiente" hasPulse={false} />
            </div>
        </div>
    );
}
