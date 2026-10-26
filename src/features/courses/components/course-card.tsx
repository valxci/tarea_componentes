import Link from "next/link";

interface CourseCardProps {
    courseCode: string;
    title: string;
    instructor: string;
    room: string;
    credits: number;
    progressPercentage: number;
    courseUrl: string;
    syllabusUrl?: string;
}

export default function CourseCard({ courseCode, title, instructor, room, credits, progressPercentage, courseUrl, syllabusUrl }: CourseCardProps) {
    const progress = Math.min(100, Math.max(0, progressPercentage));

    return <div className="card w-full max-w-lg overflow-hidden rounded-2xl border border-[#cecfd4] bg-white shadow-sm transition-all hover:border-[#5454e9] mt-5">
        {/* linea degradada*/}
        <div className="h-2 bg-linear-to-r from-[#5454e9] to-[#865cf0]"></div>

        <div className="card-body p-5">
            <div className="flex justify-between  items-start">
                <span className="badge badge-outline  text-xs font-mono font-bold text-slate-600">{courseCode}</span>
                <span className="badge badge-secondary badge-sm text-[11px] font-bold rounded-2xl p-2">{credits} Créditos</span>
            </div>

            <h2 className="card-title  font-bold text-slate-900 mt-1">{title}</h2>

            <p className="text-s text-slate-500">Prof. {instructor} • Salón {room}</p>

            <div className="mt-4">
                <div className="flex justify-between text-s font-semibold mb-1">
                    <span className="text-slate-600">Avance de Semestre</span>
                    <span className="text-[#5454e9] font-bold">{progress}%</span>
                </div>
                <progress className="progress progress-primary w-full h-2 bg-slate-100" value={progress} max={100} aria-label={`Avance de ${title}`}></progress>
            </div>

            <div className="card-actions justify-end mt-4 pt-3  border-slate-100">
                {syllabusUrl && <Link href={syllabusUrl} className="btn btn-sm btn-ghost text-slate-600 hover:bg-[#5454e9]/10 hover:text-[#5454e9]  hover:border-0 rounded-xl border-0">Silabo</Link>}
                <Link href={courseUrl} className="btn btn-sm btn-primary rounded-xl">Entrar al Aula</Link>
            </div>
        </div>
    </div>;
}
