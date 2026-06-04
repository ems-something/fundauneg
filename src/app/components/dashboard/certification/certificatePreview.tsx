"use client";

import { Typography } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

import {
	DndContext,
	useDraggable,
	DragEndEvent,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";

interface Props {
	certificateRef: React.RefObject<HTMLDivElement>;
	templateUrl: string;

	fullName: string;
	documentId: string;
	courseName: string;
	duration: string;
	certificateDate: string;
	qrValue: string;

	layout: any;
	showGuides: boolean;
	isExporting: boolean;

	onPositionChange: (field: string, x: number, y: number) => void;
}

/* ---------------- DRAGGABLE WRAPPER ---------------- */

function DraggableField({
	id,
	x,
	y,
	children,
	onPositionChange,
	borderStyle,
	isExporting,
}: {
	id: string;
	x: number;
	y: number;
	children: React.ReactNode;
	onPositionChange: (id: string, x: number, y: number) => void;
	borderStyle: string;
	isExporting?: boolean;
}) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
		disabled: isExporting,
	});

	const style: React.CSSProperties = {
		position: "absolute",
		left: x,
		top: y,
		transform: CSS.Translate.toString(transform),
		cursor: isExporting ? "default" : "move",
		border: isExporting ? "none" : borderStyle,
		padding: isExporting ? 0 : 4,
		touchAction: "none",
	};

	return (
		<div ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{children}
		</div>
	);
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function CertificatePreview({
	certificateRef,
	templateUrl,

	fullName,
	documentId,
	courseName,
	duration,
	certificateDate,
	qrValue,

	layout,
	showGuides,
	isExporting,

	onPositionChange,
}: Props) {
	const shouldShowGuides = showGuides && !isExporting;

	const borderStyle = shouldShowGuides ? "1px dashed red" : "none";

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 2,
			},
		}),
	);

	function handleDragEnd(event: DragEndEvent) {
		const { delta, active } = event;

		const field = active.id as string;

		const current = layout[field];

		onPositionChange(field, current.x + delta.x, current.y + delta.y);
	}

	return (
		<div className="w-full">
			<div
				ref={certificateRef}
				className="relative bg-white overflow-hidden rounded-lg shadow-lg"
			>
				<div className="relative w-full aspect-[1.414/1]">
					{templateUrl && (
						<img
							src={templateUrl}
							alt="Certificate Template"
							className="w-full h-auto"
						/>
					)}
				</div>

				<DndContext
					sensors={sensors}
					onDragEnd={isExporting ? undefined : handleDragEnd}
				>
					{/* NAME */}
					<DraggableField
						id="fullName"
						x={layout.fullName.position.x}
						y={layout.fullName.position.y}
						onPositionChange={onPositionChange}
						borderStyle={borderStyle}
						isExporting={isExporting}
					>
						<Typography
							sx={{
								fontSize: layout.fullName.fontSize,
								fontWeight: 700,
							}}
						>
							{fullName || "Nombre Completo"}
						</Typography>
					</DraggableField>

					{/* DOCUMENT */}
					<DraggableField
						id="documentId"
						x={layout.documentId.position.x}
						y={layout.documentId.position.y}
						onPositionChange={onPositionChange}
						borderStyle={borderStyle}
						isExporting={isExporting}
					>
						<Typography
							sx={{ fontSize: layout.documentId.fontSize }}
						>
							{documentId || "V-00000000"}
						</Typography>
					</DraggableField>

					{/* COURSE */}
					<DraggableField
						id="courseName"
						x={layout.courseName.position.x}
						y={layout.courseName.position.y}
						onPositionChange={onPositionChange}
						borderStyle={borderStyle}
						isExporting={isExporting}
					>
						<Typography
							sx={{
								fontSize: layout.courseName.fontSize,
								fontWeight: 500,
							}}
						>
							{courseName || "Nombre del Curso"}
						</Typography>
					</DraggableField>

					{/* DURATION */}
					<DraggableField
						id="duration"
						x={layout.duration.position.x}
						y={layout.duration.position.y}
						onPositionChange={onPositionChange}
						borderStyle={borderStyle}
						isExporting={isExporting}
					>
						<Typography sx={{ fontSize: layout.duration.fontSize }}>
							{`Con una duración de ${duration || 120} horas académicas`}
						</Typography>
					</DraggableField>

					{/* DATE */}
					<DraggableField
						id="date"
						x={layout.date.position.x}
						y={layout.date.position.y}
						onPositionChange={onPositionChange}
						borderStyle={borderStyle}
						isExporting={isExporting}
					>
						<Typography sx={{ fontSize: layout.date.fontSize }}>
							{`Ciudad Guayana, ${certificateDate || "02 de Junios de 2026"}`}
						</Typography>
					</DraggableField>

					{/* QR */}
					<DraggableField
						id="qr"
						x={layout.qr.position.x}
						y={layout.qr.position.y}
						onPositionChange={onPositionChange}
						borderStyle={
							shouldShowGuides ? "2px dashed green" : "none"
						}
						isExporting={isExporting}
					>
						<QRCodeCanvas
							value={qrValue || "https://fundauneg.edu.ve"}
							size={layout.qr.size}
						/>
					</DraggableField>
				</DndContext>
			</div>
		</div>
	);
}
