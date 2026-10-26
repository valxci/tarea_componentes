interface SprintTask {
    description: string;
    isDone: boolean;
}

interface SprintPhase {
    sprintNumber: number;
    title: string;
    status: "completed" | "in_progress" | "pending";
    tasks: SprintTask[];
    isDefaultOpen?: boolean;
}

interface SprintAccordionPanelProps {
    sprints: SprintPhase[];
}

const statusLabels = {
    completed: "Completado",
    in_progress: "En Progreso",
    pending: "Pendiente",
};

const statusClasses = {
    completed: "badge-success text-white rounded-full p-2.5 ",
    in_progress: "badge-warning text-[#1a1a24] rounded-full p-2.5",
    pending: "badge-outline border-[#cecfd4] text-slate-500 rounded-full border p-2.5",
};

export default function SprintAccordionPanel({ sprints }: SprintAccordionPanelProps) {
    return <div className="join join-vertical w-full border border-[#cecfd4] rounded-2xl bg-white shadow-sm overflow-hidden">
        {sprints.map((sprint) => <div key={sprint.sprintNumber} className="collapse collapse-arrow join-item border-b border-[#cecfd4] last:border-b-0">
            <input type="radio" name="sprint-accordion" defaultChecked={sprint.isDefaultOpen} />

            <div className="collapse-title text-xs font-bold text-slate-800 flex items-center justify-between pr-8 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="badge badge-primary badge-sm font-bold shrink-0 rounded-full p-2.5">Sprint {sprint.sprintNumber}</span>
                    <span className="truncate">{sprint.title}</span>
                </div>
                <span className={`badge badge-xs text-[10px] font-bold shrink-0 ${statusClasses[sprint.status]}`}>{statusLabels[sprint.status]}</span>
            </div>

            <div className="collapse-content text-xs text-slate-600 space-y-1 pt-1 bg-[#f8f9fc]">
                {sprint.tasks.map((task) => <p key={task.description}>{task.isDone ? "✓" : "⏳"} {task.description}</p>)}
            </div>
        </div>)}
    </div>;
}
