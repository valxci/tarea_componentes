"use client";

interface AlertBannerProps {
    title: string;
    description: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    actionLabel?: string;
    onActionClick?: () => void;
}

const typeClasses = {
    info: "alert-info bg-[#f0f0fd] text-[#3e3eba] border-[#3e3eba] hover: ",
    success: "alert-success bg-[#edf8f2] text-[#2e7d50] border-[#2e7d50]",
    warning: "alert-warning bg-[#fdfbe8] text-[#7a6a00] border-[#7a6a00]",
    error: "alert-error bg-[#fdf0eb] text-[#b33a15] border-[#b33a15]",
};


export default function AlertBanner({

    ...bannerProps }: AlertBannerProps) {


    return <div role="alert" className={`alert ${typeClasses[bannerProps.type ?? "info"]} rounded-2xl border-2   border-gray-300 shadow-2xs w-[500px]`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div className="flex-row">
            <h1 className="text-[17px] font-bold" >{bannerProps.title}</h1>

            <p className="text-[13px]">{bannerProps.description}</p>
        </div>

        {bannerProps.actionLabel ? (
            <button onClick={bannerProps.onActionClick} className={`btn btn-xs btn-outline btn-primary rounded-2xl p-3  ${typeClasses[bannerProps.type ?? "info"]}`}>
                {bannerProps.actionLabel}
            </button>
        ) : null}

    </div>
}
