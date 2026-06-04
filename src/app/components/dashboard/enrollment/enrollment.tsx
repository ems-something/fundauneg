"use client";

import { useState } from "react";
import {
	Box,
	Typography,
	TextField,
	FormControl,
	FormControlLabel,
	Checkbox,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@mui/material";

const mockData = {
	Diplomado: {
		image: "/images/content/graduates/programacion_web.jpg",
		description: `Se busca ofrecer los conocimientos y herramientas necesarias para realizar una valoración especializada del estado de los órganos del cuerpo humano con fin diagnóstico y terapéutico. Asimismo aportar las herramientas para desempeñarse exitosamente como médico ecografista.
            
            Contenido Programático:
            
            * Física y Fundamentos Básicos de Ultrasonidos.
            * Técnicas de Exploración
            * Estudio de la Imagen Ecografía, Relación con la Tomografía y Resonancia Magnética.
            * Fundamentos de Anatomía.
            * Nociones Básicas de Pequeñas Partes: Mamas, Tiroides y Testículo.
            * Ecografía Abdominal: Normal  Patología.Benigna y Maligna.
            * El Retroperitoneo.Normal.Patología a Benigna y Maligna.
            * Ecografía Pélvica Femenina y Masculina.`,
		program: "Diplomado en Tecnología",
		offers: [
			"Ecografía Abdominal",
			"Formación Docente",
			"Programación Web",
		],
		preRegistrationFee: "50$",
		registrationFee: "100$",
		investment: "300$",
		installments: "3",
		duration: "196 h (3 Meses) ",
		facilitator: "Dr. Eddy Cañas",
		addressedTo: "Médicos generales y especializados",
		schedule: "Viernes de 1:00 pm a 5:00 pm / Sábado de 8:00 am a 4:00 pm",
		requirements: "Planilla de Inscripción, Copia de la C.I y RIF",
	},
	Curso: {
		image: "/images/content/courses/como_generar_ingreso_en_mercados_financiero.jpg",
		description: `Se busca ofrecer los conocimientos y herramientas necesarias para realizar una valoración especializada del estado de los órganos del cuerpo humano con fin diagnóstico y terapéutico. Asimismo aportar las herramientas para desempeñarse exitosamente como médico ecografista.
            
            Contenido Programático:
            
            * Física y Fundamentos Básicos de Ultrasonidos.
            * Técnicas de Exploración
            * Estudio de la Imagen Ecografía, Relación con la Tomografía y Resonancia Magnética.
            * Fundamentos de Anatomía.
            * Nociones Básicas de Pequeñas Partes: Mamas, Tiroides y Testículo.
            * Ecografía Abdominal: Normal  Patología.Benigna y Maligna.
            * El Retroperitoneo.Normal.Patología a Benigna y Maligna.
            * Ecografía Pélvica Femenina y Masculina.`,
		program: "Curso de Desarrollo Web",
		offers: [
			"Asistente Administrativo",
			"Atención al Cliente",
			"Cómo Generar Ingreso en Mercados Financiero",
		],
		preRegistrationFee: "50$",
		registrationFee: "100$",
		investment: "200$",
		installments: "4",
		duration: "196 h (3 Meses) ",
		facilitator: "Dr. Eddy Cañas",
		addressedTo: "Médicos generales y especializados",
		schedule: "Viernes de 1:00 pm a 5:00 pm / Sábado de 8:00 am a 4:00 pm",
		requirements: "Planilla de Inscripción, Copia de la C.I y RIF",
	},
	Taller: {
		image: "/images/content/workshops/marketing_digital_para_redes_sociales.jpg",
		description: `Se busca ofrecer los conocimientos y herramientas necesarias para realizar una valoración especializada del estado de los órganos del cuerpo humano con fin diagnóstico y terapéutico. Asimismo aportar las herramientas para desempeñarse exitosamente como médico ecografista.
            
            Contenido Programático:
            
            * Física y Fundamentos Básicos de Ultrasonidos.
            * Técnicas de Exploración
            * Estudio de la Imagen Ecografía, Relación con la Tomografía y Resonancia Magnética.
            * Fundamentos de Anatomía.
            * Nociones Básicas de Pequeñas Partes: Mamas, Tiroides y Testículo.
            * Ecografía Abdominal: Normal  Patología.Benigna y Maligna.
            * El Retroperitoneo.Normal.Patología a Benigna y Maligna.
            * Ecografía Pélvica Femenina y Masculina.`,
		program: "Taller de UX/UI",
		offers: ["Marketing Digital para Redes Sociales"],
		preRegistrationFee: "15$",
		registrationFee: "30$",
		investment: "60$",
		installments: "2",
		duration: "196 h (3 Meses) ",
		facilitator: "Dr. Eddy Cañas",
		addressedTo: "Médicos generales y especializados",
		schedule: "Viernes de 1:00 pm a 5:00 pm / Sábado de 8:00 am a 4:00 pm",
		requirements: "Planilla de Inscripción, Copia de la C.I y RIF",
	},
};

export default function EnrollmentView() {
	const [education, setEducation] = useState("Diplomado");
	const [offer, setOffer] = useState("");
	const [studyMode, setStudyMode] = useState("");
	const [academicCohort, setAcademicCohort] = useState("");
	const [voucher, setVoucher] = useState("");
	const [paymentType, setPaymentType] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const [paymentFormat, setPaymentFormat] = useState("");

	const selected = mockData[education as keyof typeof mockData];

	return (
		<Box className="w-full max-w-6xl mx-auto p-4">
			<div className="flex flex-col text-center mb-4 ">
				<h2 className="text-white text-3xl font-medium title-font">
					Inscribe una oferta académica
				</h2>
				<p className="leading-relaxed text-gray-400 mb-4">
					Se parte de la comunidad de Fundauneg
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* LEFT SIDE */}
				<div className="flex flex-col w-full">
					{/* Image */}
					<div className="flex-1 mb-4">
						<img
							src={selected.image}
							alt="program"
							className="w-full h-full object-cover rounded-md"
						/>
					</div>

					{/* Description */}
					<div className="flex-1 mb-4">
						<Typography className="text-gray-300 text-sm text-justify whitespace-pre-line">
							{selected.description}
						</Typography>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div className="flex flex-col mb-4 items-start text-left">
					{/* Formación */}
					<div className="mb-4 w-full flex gap-2">
						<div className="flex-1">
							<FormControl fullWidth size="small">
								<InputLabel>Formación</InputLabel>
								<Select
									value={education}
									label="Formación"
									onChange={(e) => {
										setEducation(e.target.value);
										setOffer(""); // reset offer when education changes
									}}
								>
									<MenuItem value="Diplomado">
										Diplomado
									</MenuItem>
									<MenuItem value="Curso">Curso</MenuItem>
									<MenuItem value="Taller">Taller</MenuItem>
								</Select>
							</FormControl>
						</div>

						{/*Oferta SELECT */}
						<div className="flex-1">
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
					</div>

					<div className="mb-4 w-full flex gap-2">
						{/* Study Mode */}
						<div className="flex-1">
							<FormControl fullWidth size="small">
								<InputLabel>Modalidad</InputLabel>
								<Select
									value={studyMode}
									label="Modalidad"
									onChange={(e) =>
										setStudyMode(e.target.value)
									}
								>
									<MenuItem value="Presencial">
										Presencial
									</MenuItem>
									<MenuItem value="Híbrido">
										Semipresencial
									</MenuItem>
									<MenuItem value="Virtual">Virtual</MenuItem>
								</Select>
							</FormControl>
						</div>

						<div className="flex-1">
							<FormControl fullWidth size="small">
								<InputLabel>Cohorte Academico</InputLabel>
								<Select
									value={academicCohort}
									label="Cohorte Academico"
									onChange={(e) =>
										setAcademicCohort(e.target.value)
									}
								>
									<MenuItem value="Presencial">
										2026-I
									</MenuItem>
									<MenuItem value="Híbrido">2026-II</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>

					{/* Coordinador */}
					<div className="mb-4 w-full">
						<Typography className="block text-sm text-gray-400 mb-1 self-center">
							Facilitador
						</Typography>

						<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
							{selected.facilitator}
						</div>
					</div>

					{/* Dirigido a */}
					<div className="mb-4 w-full">
						<Typography className="block text-sm text-gray-400 mb-1 self-center">
							Dirigido a
						</Typography>

						<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
							{selected.addressedTo}
						</div>
					</div>

					{/* Voucher + Type */}
					<div className="mb-4 w-full flex gap-2">
						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								Referencia de Pago
							</Typography>
							<TextField
								fullWidth
								size="small"
								placeholder="Referencia de pago"
								value={voucher}
								onChange={(event) => {
									const { value } = event.target;
									// Keep only digits (0-9). Use /[^0-9.]/g to allow decimals.
									const onlyNums = value.replace(
										/[^0-9]/g,
										"",
									);
									setVoucher(onlyNums);
								}}
								// Triggers numeric keyboard on mobile devices
								slotProps={{
									htmlInput: {
										inputMode: "numeric",
										pattern: "[0-9]*",
									},
								}}
							/>
						</div>

						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								Forma de Pago
							</Typography>
							<FormControl size="small" fullWidth>
								<InputLabel>Forma de pago</InputLabel>
								<Select
									value={paymentMethod}
									label="Forma de pago"
									onChange={(e) =>
										setPaymentMethod(e.target.value)
									}
								>
									<MenuItem value="transfer">
										Transferencia
									</MenuItem>
									<MenuItem value="usd">Divisas</MenuItem>
									<MenuItem value="cash">
										Efectivo Bs
									</MenuItem>
								</Select>
							</FormControl>
						</div>

						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								Tipo de Pago
							</Typography>
							<FormControl size="small" fullWidth>
								<InputLabel>Tipo</InputLabel>
								<Select
									value={paymentType}
									label="Tipo"
									onChange={(e) =>
										setPaymentType(e.target.value)
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

					<div className="mb-4 w-full flex gap-2">
						{/* N° de Cuotas */}
						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								N° de Cuotas
							</Typography>

							<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
								{selected.installments}
							</div>
						</div>

						{/* Inversión Total */}
						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								Inversión Total
							</Typography>

							<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
								{selected.investment}
							</div>
						</div>

						{/* Formato de pago */}
						<div className="flex-1">
							<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
								Formato de Pago
							</Typography>
							<FormControl
								fullWidth
								required
								id="gender"
								sx={{ minHeight: 30 }}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: "center",
										borderRadius: 1,
										py: 0.5,
										height: "30px",
									}}
								>
									<FormControlLabel
										label={"Total"}
										sx={{
											m: 0,
											color: "#9ca3af",
											alignContent: "center",
										}}
										control={
											<Checkbox
												size="small"
												sx={{ p: "4px" }}
												checked={
													paymentFormat === "total"
												}
												onChange={() =>
													setPaymentFormat("total")
												}
											/>
										}
									/>

									<FormControlLabel
										label={"Parcial"}
										sx={{
											m: 0,
											color: "#9ca3af",
											alignContent: "center",
										}}
										control={
											<Checkbox
												size="small"
												sx={{ p: "4px" }}
												checked={
													paymentFormat === "parcial"
												}
												onChange={() =>
													setPaymentFormat("parcia;")
												}
											/>
										}
									/>
								</Box>
							</FormControl>
						</div>
					</div>

					<div className="mb-4 w-full flex gap-2">
						{/* Monto a Cancelar */}
						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								Monto a Cancelar
							</Typography>

							<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
								{paymentType === "pre"
									? selected.preRegistrationFee
									: selected.registrationFee}
							</div>
						</div>

						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								Duración
							</Typography>

							<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
								{selected.duration}
							</div>
						</div>
					</div>

					{/* Horario */}
					<div className="mb-4 w-full">
						<Typography className="block text-sm text-gray-400 mb-1 self-center">
							Horario
						</Typography>

						<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
							{selected.schedule}
						</div>
					</div>

					{/* Requisitos */}
					<div className="mb-4 w-full">
						<Typography className="block text-sm text-gray-400 mb-1 self-center">
							Requisitos Obligatorios
						</Typography>

						<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
							{selected.requirements}
						</div>
					</div>

					{/* Submit */}

					<Button variant="contained" className="w-full">
						Inscribir
					</Button>
				</div>
			</div>
		</Box>
	);
}
