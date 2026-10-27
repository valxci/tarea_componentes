"use client";

export interface TagOption {
    id: string;
    name: string;
    isSelected: boolean;
}

interface TagFilterGroupProps {
    title: string;
    tags: TagOption[];
    onTagToggle?: (tagId: string) => void;
}

export default function TagFilterGroup({ title, tags, onTagToggle }: TagFilterGroupProps) {
    return <div className="p-4 bg-white border border-[#cecfd4] rounded-2xl shadow-sm max-w-lg w-full">
        <span className="text-xs font-bold text-slate-700 block mb-2">{title}</span>

        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => <label key={tag.id} className="cursor-pointer">
                <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked={tag.isSelected}
                    onChange={() => onTagToggle?.(tag.id)}
                />

                <span className="btn btn-sm rounded-xl bg-white text-slate-600 border border-[#cecfd4] text-xs font-semibold transition-all before:mr-1 before:content-['+'] hover:border-slate-300 peer-checked:border-[#5454e9] peer-checked:bg-[#5454e9] peer-checked:text-white peer-checked:before:content-['✓'] peer-focus-visible:ring-2 peer-focus-visible:ring-[#5454e9] peer-focus-visible:ring-offset-1">
                    {tag.name}
                </span>
            </label>)}
        </div>
    </div>;
}
