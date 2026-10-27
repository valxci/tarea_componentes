import { Star } from "lucide-react";

interface RatingDisplayProps {
    score: number;
    totalReviews?: number;
    showScoreText?: boolean;
    maxScore?: number;
    reviewsLabel?: string;
    className?: string;
}

export default function RatingDisplay({
    score,
    totalReviews,
    showScoreText = true,
    maxScore = 5,
    reviewsLabel = "evaluaciones",
    className = "",
}: RatingDisplayProps) {
    const safeScore = Math.min(Math.max(score, 0), maxScore);
    const totalStars = Math.round(maxScore);
    const filledStars = Math.floor(safeScore);
    const hasHalfStar = safeScore - filledStars >= 0.5;
    const scoreText = safeScore.toFixed(1);

    const reviewText = totalReviews !== undefined
        ? `, basada en ${totalReviews} ${reviewsLabel}`
        : "";

    return <div className={`inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 bg-white rounded-xl border border-[#cecfd4] shadow-sm w-fit max-w-full ${className}`}>
        <div
            className="flex items-center gap-0.5"
            role="img"
            aria-label={`Calificación de ${scoreText} sobre ${maxScore}${reviewText}`}
        >
            {Array.from({ length: totalStars }, (_, index) => {
                const isFull = index < filledStars;
                const isHalf = index === filledStars && hasHalfStar;

                return <span key={index} className="relative inline-flex" aria-hidden="true">
                    <Star size={18} strokeWidth={1.5} className="text-[#cecfd4]" fill="currentColor" />

                    {(isFull || isHalf) && <span className={`absolute inset-0 overflow-hidden ${isHalf ? "w-1/2" : "w-full"}`}>
                        <Star size={18} strokeWidth={1.5} className="block max-w-none text-[#e9683b]" fill="currentColor" />
                    </span>}
                </span>;
            })}
        </div>

        {showScoreText && <span className="text-sm font-bold text-slate-800">{scoreText}</span>}

        {totalReviews !== undefined && <span className="text-xs text-slate-500 font-medium">({totalReviews} {reviewsLabel})</span>}
    </div>;
}
