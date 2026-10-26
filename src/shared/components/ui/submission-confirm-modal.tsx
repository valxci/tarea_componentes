"use client";

import { TriangleAlert } from "lucide-react";

interface SubmissionConfirmModalProps {
    isOpen: boolean;
    assignmentName: string;
    warningMessage?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function SubmissionConfirmModal({ isOpen, assignmentName, warningMessage = "Holi soy una advertencia", onConfirm, onCancel }: SubmissionConfirmModalProps) {
    if (!isOpen) return null;

    return <div className="modal modal-open">
        <div className="modal-box bg-white border border-[#cecfd4] shadow-xl rounded-2xl p-5 max-w-md">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-[#fdf0eb] flex items-center justify-center text-[#e9683b] shrink-0">
                    <TriangleAlert size={20} />
                </div>
                <h3 className="font-bold text-sm text-slate-900">¿Confirmar entrega definitiva?</h3>
            </div>

            <p className="text-xs text-slate-600 my-2">
                Estás a punto de enviar el entregable <strong className="text-slate-900">{assignmentName}</strong>. {warningMessage}
            </p>

            <div className="modal-action mt-4 pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button type="button" onClick={onCancel} className="btn btn-sm btn-ghost rounded-xl text-slate-500 border-0 hover:border-0 hover:text-slate-600">Cancelar</button>
                <button type="button" onClick={onConfirm} className="btn btn-sm btn-primary rounded-xl font-bold">Sí, Enviar Entrega</button>
            </div>
        </div>
    </div>;
}
