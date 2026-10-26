interface StepItem {
    label: string;
    isCompleted: boolean;
    isCurrent?: boolean;
    stepNumber?: number | string;
}

interface StepProgressTrackerProps {
    steps: StepItem[];
}

export default function StepProgressTracker({ steps }: StepProgressTrackerProps) {
    return <div className="p-4 bg-white border border-[#cecfd4] rounded-2xl shadow-sm w-full">
        <ul className="steps steps-vertical md:steps-horizontal w-full text-xs">
            {steps.map((step, index) => {
                const content = step.isCompleted ? "✓" : step.stepNumber ?? index + 1;
                const isActive = step.isCompleted || step.isCurrent;

                return <li key={step.label} data-content={content} className={`step font-semibold text-[11px] ${isActive ? "step-primary text-slate-800" : "text-slate-400"}`}>
                    {step.label}
                </li>;
            })}
        </ul>
    </div>;
}
