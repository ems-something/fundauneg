"use client";

import { useState } from "react";
import {
	Box,
	Typography,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

const mockData = {
	Diplomado: {
		image: "/images/diplomado.jpg",
		description: "Programa intensivo con enfoque práctico.",
		program: "Diplomado en Tecnología",
		offers: ["20% descuento", "Pago en cuotas"],
		fee: "$100",
	},
	Curso: {
		image: "/images/curso.jpg",
		description: "Curso corto especializado.",
		program: "Curso de Desarrollo Web",
		offers: ["10% descuento", "Acceso premium"],
		fee: "$50",
	},
	Taller: {
		image: "/images/taller.jpg",
		description: "Taller práctico presencial.",
		program: "Taller de UX/UI",
		offers: ["Sin descuento"],
		fee: "$30",
	},
};

export default function EnrollmentView() {
	const [formation, setFormation] = useState("Diplomado");
	const [offer, setOffer] = useState("");
	const [studyMode, setStudyMode] = useState("");
	const [voucherType, setVoucherType] = useState("pre");
	const [voucher, setVoucher] = useState("");

	const selected = mockData[formation as keyof typeof mockData];

	return (
		<Box className="w-full max-w-6xl mx-auto p-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* LEFT SIDE */}
				<div className="flex flex-col">
					{/* Image */}
					<div className="w-full h-64 mb-4">
						<img
							src={selected.image}
							alt="program"
							className="w-full h-full object-cover rounded-md"
						/>
					</div>

					{/* Description */}
					<Typography className="text-gray-300 text-sm">
						{selected.description}
					</Typography>
				</div>

				{/* RIGHT SIDE */}
				<div className="flex flex-col items-start text-left">
					{/* Formación */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-6">
							Formación
						</Typography>

						<FormControl fullWidth size="small">
							<InputLabel>Formación</InputLabel>
							<Select
								value={formation}
								label="Formación"
								onChange={(e) => {
									setFormation(e.target.value);
									setOffer(""); // reset offer when formation changes
								}}
							>
								<MenuItem value="Diplomado">Diplomado</MenuItem>
								<MenuItem value="Curso">Curso</MenuItem>
								<MenuItem value="Taller">Taller</MenuItem>
							</Select>
						</FormControl>
					</div>

					{/* Program Info */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-1">
							Programa
						</Typography>
						<Typography className="text-white">
							{selected.program}
						</Typography>
					</div>

					{/* 🔥 Oferta SELECT */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-1">
							Oferta
						</Typography>

						<FormControl fullWidth size="small">
							<InputLabel>Oferta</InputLabel>
							<Select
								value={offer}
								label="Oferta"
								onChange={(e) => setOffer(e.target.value)}
							>
								{selected.offers.map((o) => (
									<MenuItem key={o} value={o}>
										{o}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>

					{/* Study Mode */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-1">
							Modalidad de estudio
						</Typography>

						<FormControl fullWidth size="small">
							<InputLabel>Modalidad</InputLabel>
							<Select
								value={studyMode}
								label="Modalidad"
								onChange={(e) => setStudyMode(e.target.value)}
							>
								<MenuItem value="Presencial">
									Presencial
								</MenuItem>
								<MenuItem value="Híbrido">Híbrido</MenuItem>
								<MenuItem value="Virtual">Virtual</MenuItem>
							</Select>
						</FormControl>
					</div>

					{/* Voucher + Type */}
					<div className="mb-4 w-full flex gap-2">
						<div className="flex-[2]">
							<TextField
								fullWidth
								size="small"
								placeholder="Referencia de pago"
								value={voucher}
								onChange={(e) => setVoucher(e.target.value)}
							/>
						</div>

						<div className="flex-1">
							<FormControl size="small" fullWidth>
								<InputLabel>Tipo</InputLabel>
								<Select
									value={voucherType}
									label="Tipo"
									onChange={(e) =>
										setVoucherType(e.target.value)
									}
								>
									<MenuItem value="pre">
										Preinscripción
									</MenuItem>
									<MenuItem value="full">
										Inscripción
									</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>
					{/* Fee */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-1">
							Monto a pagar
						</Typography>

						<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
							{selected.fee}
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
}
