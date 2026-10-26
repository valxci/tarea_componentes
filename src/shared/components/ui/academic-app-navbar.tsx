import { Bell } from "lucide-react";

interface UserSessionData {
    name: string;
    avatarUrl: string;
    notificationsCount: number;
    currentTerm: string;
}

interface AcademicAppNavbarProps {
    brandName: string;
    user: UserSessionData;
}

export default function AcademicAppNavbar({ brandName, user }: AcademicAppNavbarProps) {
    return <div className="navbar bg-white border border-[#cecfd4] rounded-2xl shadow-sm px-4 w-full">
        <div className="flex flex-1 items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#5454e9] flex items-center justify-center text-white font-bold text-xs shrink-0 p-5">CAT</div>
            <span className="font-bold text-sm text-slate-900 truncate">{brandName}</span>
            <span className="badge badge-sm badge-outline text-[10px] border-[#cecfd4] text-slate-500 shrink-0">{user.currentTerm}</span>
        </div>

        <div className="flex flex-none items-center gap-2">
            <button type="button" className="btn btn-ghost btn-circle btn-sm text-slate-500 border-0 hover:border-0 hover:text-slate-600" aria-label={`Notificaciones: ${user.notificationsCount}`}>
                <div className="indicator">
                    <Bell size={18} />
                    {user.notificationsCount > 0 && <span className="badge badge-xs badge-secondary indicator-item p-1 rounded-full">{user.notificationsCount}</span>}
                </div>
            </button>

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="avatar online">
                    <div className="w-8 rounded-full ring-1 ring-[#5454e9]">
                        <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 object-cover rounded-full" />
                    </div>
                </div>

            </div>
        </div>
    </div>;
}
