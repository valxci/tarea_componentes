"use client";

import { useState } from "react";
import { ArrowDownToLine, BadgeCheck } from "lucide-react";

import ActionButton from "@/src/shared/components/ui/action-button";
import AlertBanner from "@/src/shared/components/ui/alert-banner";
import StatusBadge from "@/src/shared/components/ui/status-badge";
import MetricBentoStat from "@/src/shared/components/ui/metric-bento-stat";
import RatingDisplay from "@/src/shared/components/ui/rating-display";
import TagFilterGroup from "@/src/shared/components/ui/tag-filter-group";
import ToastNotification from "@/src/shared/components/ui/toast-notification";
import StepProgressTracker from "@/src/shared/components/ui/step-progress-tracker";
import AcademicAppNavbar from "@/src/shared/components/ui/academic-app-navbar";
import SubmissionConfirmModal from "@/src/shared/components/ui/submission-confirm-modal";
import SprintAccordionPanel from "@/src/shared/components/ui/sprint-accordion-panel";
import CourseCard from "@/src/features/courses/components/course-card";

const steps = [
    { label: "Propuesta", isCompleted: true },
    { label: "Sprint 1", isCompleted: true },
    { label: "Sprint 2 (Hoy)", isCompleted: false, isCurrent: true, stepNumber: 3 },
    { label: "Demo Final", isCompleted: false, stepNumber: 4 },
    { label: "Holiii copa icesi ", isCompleted: false, stepNumber: 5 },
];

const sprints = [
    {
        sprintNumber: 1,
        title: "Arquitectura Base y Componentes Atómicos",
        status: "completed" as const,
        isDefaultOpen: true,
        tasks: [
            { description: "Configuración de Next.js y App Router.", isDone: true },
            { description: "Integración de Tailwind CSS y temas de DaisyUI.", isDone: true },
            { description: "Creación de átomos reutilizables (Botones, Badges, Kbd).", isDone: true },
        ],
    },
    {
        sprintNumber: 2,
        title: "Integración de Server Actions y Formularios",
        status: "in_progress" as const,
        tasks: [
            { description: "Implementación de validación con Zod en RSC.", isDone: false },
            { description: "Manejo de pending state con useActionState.", isDone: false },
        ],
    },
    {
        sprintNumber: 3,
        title: "Entrega Final y Despliegue",
        status: "pending" as const,
        tasks: [
            { description: "Documentación de componentes en README.", isDone: false },
        ],
    },
];

const user = {
    name: "Valentina Gómez",
    avatarUrl: "https://wallpapers.com/images/hd/funny-discord-profile-pictures-7bgq4wxh5nul90ht.jpg",
    notificationsCount: 3,
    currentTerm: "2026-2",
};

const initialTags = [
    { id: "rsc", name: "Server Components", isSelected: true },
    { id: "tailwind", name: "Tailwind CSS", isSelected: true },
    { id: "daisyui", name: "DaisyUI Themes", isSelected: false },
    { id: "actions", name: "Server Actions", isSelected: false },
];

export default function ComponentsPage() {
    const [modalOpen, setModalOpen] = useState(false);

    return <div className="min-h-screen bg-white p-6">
        <h1 className="text-3xl text-[#865cf0] font-semibold">Mis Componentes Icesistas ≽^•⩊•^≼</h1>

        <h2 className="mt-6 text-lg font-bold text-slate-800">Átomos</h2>
        <div className="mt-4 flex flex-wrap items-start gap-6">
            <div className="flex flex-col gap-2">
                <ActionButton label="Descargar Guía Lab" icon={<ArrowDownToLine size={20} />} badgeText="PDF" />
                <ActionButton label="Descargar Guía Lab" icon={<ArrowDownToLine size={20} />} badgeText="PDF" isLoading={true} />
            </div>

            <AlertBanner title="Período de Adición y Cancelación" description="Recuerda que el sistema Banner cerrará inscripciones el viernes a las 18:00 hrs." actionLabel="Ver calendario" />



            {/* Mi componente de estado */}

            <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-2xl border border-[#cecfd4] shadow-sm w-[400px]">
                <StatusBadge status="active" label="Matriculado Activo" />
                <StatusBadge status="pending" label="En Revisión Previa" hasPulse={false} />
                <StatusBadge status="danger" label="Requisito Pendiente" hasPulse={false} />
                <StatusBadge status="neutral" label="Holi soy neutral" hasPulse={false} />
            </div>


            {/* Mi componente de Caja Bento de Métrica */}
            <div className="max-w-md w-full">
                <MetricBentoStat title="Promedio Ponderado Acumulado" value="4.62" maxValue="5.0"
                    trendText="0.18 respecto al semestre anterior" trendType="positive"
                    icon={<BadgeCheck />}
                />
            </div>

            {/* Mi componente de Calificación por Estrellas */}
            <RatingDisplay score={3.8} totalReviews={40} reviewsLabel="evaluaciones docentes" />
        </div>



        <h2 className="mt-10 text-lg font-bold text-slate-800">Moléculas</h2>

        {/* Mi componente de curcitos */}
        <div className="mt-4 flex flex-wrap items-start gap-6">
            <CourseCard courseCode="DEDW-301" title="Desarrollo de Entornos Digitales Web" instructor="Santiago Restrepo" room="304B"
                credits={3} progressPercentage={68} courseUrl="https://www.icesi.edu.co/programas/ingenieria-diseno-y-ciencias-aplicadas/diseno-de-medios-interactivos/" syllabusUrl="https://www.icesi.edu.co/icesi-transforma-el-diseno-de-sus-asignaturas-para-poner-el-aprendizaje-en-el-centro/"
            />



            {/* Mi componente de progreso chekeado */}
            <div className="max-w-lg w-full flex flex-col gap-4">
                <StepProgressTracker steps={steps} />

                <ToastNotification title="Entrega de Taller Confirmada" message="Commit #7fa12 registrado en repositorio GitHub." />

                {/* Mi componente de Selector de Etiquetas */}
                <TagFilterGroup title="Filtros de Asignatura:" tags={initialTags} />
            </div>
        </div>




        <h2 className="mt-10 text-lg font-bold text-slate-800">Organismos</h2>


        {/* Mi componente de navbar */}
        <div className="mt-4 flex flex-col gap-6 max-w-xl">
            <AcademicAppNavbar brandName="Portal DEDW" user={user} />

            <button type="button" onClick={() => setModalOpen(true)} className="btn btn-sm btn-primary rounded-xl w-fit p-4">
                Botoncito para abrir el modal
            </button>

            <SprintAccordionPanel sprints={sprints} />
        </div>

        <SubmissionConfirmModal
            isOpen={modalOpen}
            assignmentName="Taller 02: Componentes RSC"
            warningMessage="Una vez confirmado no podrás modificar los archivos."
            onConfirm={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
        />
    </div>;
}
