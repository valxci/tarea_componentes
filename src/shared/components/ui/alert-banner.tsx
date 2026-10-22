interface AlertBannerProps {
    title?: string;
    description?: string;
    actionLabel?: string;
}

export default function AlertBanner({
    title = "Período de Adición y Cancelación",
    description = "Recuerda que el sistema Banner cerrará inscripciones el viernes a las 18:00 hrs.",
    actionLabel = "Ver Calendario",
}: AlertBannerProps) {
    return (
        <div className="alert alert-vertical sm:alert-horizontal max-w-md rounded-2xl border border-base-300 bg-primary/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-primary" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <div className="flex-1">
                <p className="text-sm font-bold text-primary">{title}</p>
                <p className="text-xs">{description}</p>
            </div>

            <button type="button" className="btn btn-xs btn-primary btn-outline">
                {actionLabel}
            </button>
        </div>
    );
}
