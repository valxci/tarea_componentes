import type { ReactNode } from "react";

interface MetricBentoStatProps {
    title: string;
    value: string | number;
    maxValue?: string | number;
    trendText?: string;
    trendType?: "positive" | "negative" | "neutral";
    icon: ReactNode;
}

const trendClasses = {
    positive: "text-[#4cb979]",
    negative: "text-[#e9683b]",
    neutral: "text-slate-400",
};

export default function MetricBentoStat({ title, value, maxValue, trendText, trendType = "positive", icon }: MetricBentoStatProps) {
    return <div className="stat bg-white rounded-2xl border border-[#cecfd4] p-5 shadow-sm w-full">
        <div className="stat-figure text-[#5454e9]">
            <div className="w-10 h-10 rounded-xl bg-[#5454e9]/10 flex items-center justify-center text-[#5454e9]">
                {icon}
            </div>
        </div>

        <div className="stat-title text-xs font-semibold text-slate-500 uppercase tracking-wide">{title}</div>

        <div className="stat-value text-[#5454e9] font-bold text-3xl my-1">
            {value} {maxValue !== undefined && <span className="text-sm font-normal text-slate-400">/ {maxValue}</span>}
        </div>

        {trendText && <div className={`stat-desc font-semibold text-xs ${trendClasses[trendType]}`}>{trendText}</div>}
    </div>;
}
