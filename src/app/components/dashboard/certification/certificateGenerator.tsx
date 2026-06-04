"use client";

import { useRef, useState } from "react";

import {
	Box,
	Button,
	Switch,
	FormControlLabel,
	TextField,
	Typography,
} from "@mui/material";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import CoordinateEditor from "@/app/components/dashboard/certification/coordinateEditor";

import { CustomDatePicker } from "@/app/components/dashboard/Atoms/CustomDatePicker";
import dayjs from "dayjs";

import dynamic from "next/dynamic";

const CertificatePreview = dynamic(() => import("./certificatePreview"), {
	ssr: false,
});

export default function CertificateGenerator() {
	const certificateRef = useRef<HTMLDivElement>(null);

	const [templateUrl, setTemplateUrl] = useState("");

	const [fullName, setFullName] = useState("");

	const [documentId, setDocumentId] = useState("");

	const [educationName, setEducationName] = useState("");

	const [duration, setDuration] = useState("");

	const [certificateDate, setCertificateDate] =  useState<any>(dayjs());

	const [qrValue, setQrValue] = useState("");

	const [showGuides, setShowGuides] = useState(true);

	const [isExporting, setIsExporting] = useState(false);

	const [layout, setLayout] = useState({
		fullName: {
			position: {
				x: 195,
				y: 177,
			},
			fontSize: 25,
		},

		documentId: {
			position: {
				x: 264,
				y: 223,
			},
			fontSize: 15,
		},

		courseName: {
			position: {
				x: 223,
				y: 264,
			},
			fontSize: 20,
		},

		duration: {
			position: {
				x: 202,
				y: 302,
			},
			fontSize: 10,
		},

		date: {
			position: {
				x: 212,
				y: 325,
			},
			fontSize: 10,
		},

		qr: {
			position: {
				x: 451,
				y: 275,
			},
			size: 70,
		},
	});

	type LayoutKey =
		| "fullName"
		| "documentId"
		| "courseName"
		| "duration"
		| "date"
		| "qr";

	type LayoutItem = {
		x: number;
		y: number;
		fontSize?: number;
		size?: number;
	};

	type Layout = Record<LayoutKey, LayoutItem>;

	const generatePDF = async () => {
		if (!certificateRef.current) return;

		try {
			setIsExporting(true);

			await new Promise((resolve) => setTimeout(resolve, 100));

			const canvas = await html2canvas(certificateRef.current, {
				scale: 3,
				useCORS: true,
			});

			const img = canvas.toDataURL("image/png");

			const pdf = new jsPDF({
				orientation: "landscape",
				unit: "mm",
				format: "a4",
			});

			pdf.addImage(img, "PNG", 0, 0, 297, 210);

			pdf.save("certificate.pdf");
		} finally {
			setIsExporting(false);
		}
	};

	return (
		<Box className="w-full max-w-7xl mx-auto p-4">
			<div className="flex flex-col text-center mb-4">
				<h2 className="text-white text-3xl font-medium">
					Generar Certificado
				</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{
					<div className="w-full min-h-[470px]">
						{templateUrl ? (
							<CertificatePreview
								certificateRef={certificateRef}
								templateUrl={templateUrl}
								layout={layout}
								fullName={fullName}
								documentId={documentId}
								courseName={educationName}
								duration={duration}
								certificateDate={certificateDate}
								qrValue={qrValue}
								showGuides={showGuides}
								isExporting={isExporting}
								onPositionChange={(field, x, y) => {
									setLayout((prev) => ({
										...prev,
										[field as LayoutKey]: {
											...prev[field as LayoutKey],
											x,
											y,
										},
									}));
								}}
							/>
						) : (
							<div
								className="flex flex-col min-h-[470px] items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-4 bg-gray-800 text-gray-300 cursor-pointer hover:border-secondary transition overflow-hidden mb-4"
								onDragOver={(e) => e.preventDefault()}
								onDrop={(e) => {
									e.preventDefault();
									const file = e.dataTransfer.files?.[0];
									if (file) {
										setTemplateUrl(
											URL.createObjectURL(file),
										);
									}
								}}
							>
								<input
									type="file"
									accept="image/*"
									className="hidden"
									id="imageUpload"
									onChange={(e) => {
										const file =
											e.target.files?.[0] || null;
										if (file) {
											setTemplateUrl(
												URL.createObjectURL(file),
											);
										}
									}}
								/>

								<>
									<Typography className="text-sm mb-2">
										Vista previa del certificado
									</Typography>

									<Typography className="text-xs text-gray-400 mb-3">
										Arrastra una imagen aquí
									</Typography>

									<Typography className="text-xs text-gray-400 mb-4">
										o haz clic para seleccionar
									</Typography>

									<label htmlFor="imageUpload">
										<Button
											variant="outlined"
											component="span"
										>
											Seleccionar una Plantilla
										</Button>
									</label>
								</>
							</div>
						)}
					</div>
				}

				<div className="flex flex-col gap-3">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
						<TextField
                            size="small"
							label="Nombre"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>

						<TextField
                            size="small"
							label="Documento"
							value={documentId}
							onChange={(e) => setDocumentId(e.target.value)}
						/>

						<TextField
                            size="small"
							label="Formación"
							value={educationName}
							onChange={(e) => setEducationName(e.target.value)}
						/>

						<TextField
                            size="small"
							label="Duración"
							value={duration}
							onChange={(e) => setDuration(e.target.value)}
						/>

                        <CustomDatePicker
                            sx={{
                                minHeight: 40,
                                backgroundColor: "#1f2937",
                                color: "#9ca3af",
                            }}
                            useContainer={true}
                            dateSelected={certificateDate}
                            setDateSelected={setCertificateDate}
                        />
            
						<TextField
                            size="small"
							label="QR URL"
							value={qrValue}
							onChange={(e) => setQrValue(e.target.value)}
						/>
					</div>

					<FormControlLabel
						className="text-gray-300"
						control={
							<Switch
								checked={showGuides}
								onChange={(e) =>
									setShowGuides(e.target.checked)
								}
							/>
						}
						label="Mostrar Guías"
					/>

					<Typography
						variant="h6"
						className="text-gray-300 mt-4 mb-2"
					>
						Configuración de Posiciones
					</Typography>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
						<CoordinateEditor
							title="Nombre"
							value={layout.fullName}
							onChange={(field, value) =>
								setLayout((prev) => ({
									...prev,
									fullName: {
										...prev.fullName,
										[field]: value,
									},
								}))
							}
						/>

						<CoordinateEditor
							title="Cédula"
							value={layout.documentId}
							onChange={(field, value) =>
								setLayout((prev) => ({
									...prev,
									documentId: {
										...prev.documentId,
										[field]: value,
									},
								}))
							}
						/>

						<CoordinateEditor
							title="Curso"
							value={layout.courseName}
							onChange={(field, value) =>
								setLayout((prev) => ({
									...prev,
									courseName: {
										...prev.courseName,
										[field]: value,
									},
								}))
							}
						/>

						<CoordinateEditor
							title="Duración"
							value={layout.duration}
							onChange={(field, value) =>
								setLayout((prev) => ({
									...prev,
									duration: {
										...prev.duration,
										[field]: value,
									},
								}))
							}
						/>

						<CoordinateEditor
							title="Fecha"
							value={layout.date}
							onChange={(field, value) =>
								setLayout((prev) => ({
									...prev,
									date: {
										...prev.date,
										[field]: value,
									},
								}))
							}
						/>

						<CoordinateEditor
							title="QR"
							value={layout.qr}
							onChange={(field, value) =>
								setLayout((prev) => ({
									...prev,
									qr: {
										...prev.qr,
										[field]: value,
									},
								}))
							}
						/>
					</div>

					<Button variant="contained" onClick={generatePDF}>
						Generar PDF
					</Button>
				</div>
			</div>
		</Box>
	);
}
