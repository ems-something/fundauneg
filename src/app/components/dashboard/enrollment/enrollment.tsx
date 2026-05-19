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
		description:
			" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis ipsum a mattis fermentum. Nam sed urna quis augue iaculis dignissim. Sed sed egestas nisi, eget viverra arcu. Praesent euismod id diam id bibendum. Vestibulum sodales in metus non tempor. Sed fermentum elit a nisl congue, vel vestibulum metus sollicitudin. In auctor commodo dui, pharetra tincidunt nibh cursus sed. Nulla sed rhoncus erat. Proin pretium vehicula pellentesque. Donec pellentesque a dui et molestie. Curabitur erat ante, scelerisque sit amet volutpat non, venenatis a lacus. Suspendisse ut ultrices ex, sed vehicula purus. Vestibulum ultrices luctus diam, in iaculis enim commodo at.Nam nec tortor egestas, pharetra sem quis, venenatis nisi. Nulla id tristique urna. Aliquam viverra fringilla malesuada. Etiam ex mauris, elementum eu venenatis interdum, ullamcorper a lectus. Nunc erat massa, ultricies sed lobortis nec, maximus in quam. Phasellus nec purus tortor. Integer convallis sapien ac enim interdum blandit sed eget ipsum. Aenean nec bibendum lorem. Pellentesque dignissim mi a tincidunt pellentesque. Suspendisse at mauris eu nulla iaculis bibendum. Nunc eros nunc, rutrum dignissim erat vitae, pharetra tincidunt tellus. Proin quis nibh odio. Proin vestibulum turpis non egestas gravida. Vivamus tincidunt justo ut arcu gravida volutpat. Phasellus bibendum suscipit dolor consequat auctor. Nunc dignissim libero interdum arcu eleifend, id auctor quam pretium.",
		program: "Diplomado en Tecnología",
		offers: ["20% descuento", "Pago en cuotas"],
		fee: "$100",
	},
	Curso: {
		image: "/images/content/courses/como_generar_ingreso_en_mercados_financiero.jpg",
		description:
			" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis ipsum a mattis fermentum. Nam sed urna quis augue iaculis dignissim. Sed sed egestas nisi, eget viverra arcu. Praesent euismod id diam id bibendum. Vestibulum sodales in metus non tempor. Sed fermentum elit a nisl congue, vel vestibulum metus sollicitudin. In auctor commodo dui, pharetra tincidunt nibh cursus sed. Nulla sed rhoncus erat. Proin pretium vehicula pellentesque. Donec pellentesque a dui et molestie. Curabitur erat ante, scelerisque sit amet volutpat non, venenatis a lacus. Suspendisse ut ultrices ex, sed vehicula purus. Vestibulum ultrices luctus diam, in iaculis enim commodo at. Nam nec tortor egestas, pharetra sem quis, venenatis nisi. Nulla id tristique urna. Aliquam viverra fringilla malesuada. Etiam ex mauris, elementum eu venenatis interdum, ullamcorper a lectus. Nunc erat massa, ultricies sed lobortis nec, maximus in quam. Phasellus nec purus tortor. Integer convallis sapien ac enim interdum blandit sed eget ipsum. Aenean nec bibendum lorem. Pellentesque dignissim mi a tincidunt pellentesque.",
		program: "Curso de Desarrollo Web",
		offers: ["10% descuento", "Acceso premium"],
		fee: "$50",
	},
	Taller: {
		image: "/images/content/workshops/marketing_digital_para_redes_sociales.jpg",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis ipsum a mattis fermentum. Nam sed urna quis augue iaculis dignissim. Sed sed egestas nisi, eget viverra arcu. Praesent euismod id diam id bibendum. Vestibulum sodales in metus non tempor. Sed fermentum elit a nisl congue, vel vestibulum metus sollicitudin. In auctor commodo dui, pharetra tincidunt nibh cursus sed. Nulla sed rhoncus erat. Proin pretium vehicula pellentesque. Donec pellentesque a dui et molestie. Curabitur erat ante, scelerisque sit amet volutpat non, venenatis a lacus. Suspendisse ut ultrices ex, sed vehicula purus. Vestibulum ultrices luctus diam, in iaculis enim commodo at. Nam nec tortor egestas, pharetra sem quis, venenatis nisi. Nulla id tristique urna. Aliquam viverra fringilla malesuada. Etiam ex mauris, elementum eu venenatis interdum, ullamcorper a lectus. Nunc erat massa, ultricies sed lobortis nec, maximus in quam. Phasellus nec purus tortor. Integer convallis sapien ac enim interdum blandit sed eget ipsum. Aenean nec bibendum lorem. Pellentesque dignissim mi a tincidunt pellentesque. Suspendisse at mauris eu nulla iaculis bibendum. Nunc eros nunc, rutrum dignissim erat vitae, pharetra tincidunt tellus. Proin quis nibh odio. Proin vestibulum turpis non egestas gravida. Vivamus tincidunt justo ut arcu gravida volutpat.",
		program: "Taller de UX/UI",
		offers: ["Sin descuento"],
		fee: "$30",
	},
};

export default function EnrollmentView() {
	const [formation, setFormation] = useState("Diplomado");
	const [offer, setOffer] = useState("");
	const [studyMode, setStudyMode] = useState("");
	const [academicCohort, setAcademicCohort] = useState("");
	const [voucherType, setVoucherType] = useState("");
	const [voucher, setVoucher] = useState("");
	const [paymentFormat, setPaymentFormat] = useState("");

	const selected = mockData[formation as keyof typeof mockData];

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
				<div className="flex flex-col">
					{/* Image */}
					<div className="w-full h-[312px] mb-4">
						<img
							src={selected.image}
							alt="program"
							className="w-full h-full object-cover rounded-md"
						/>
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
									value={formation}
									label="Formación"
									onChange={(e) => {
										setFormation(e.target.value);
										setOffer(""); // reset offer when formation changes
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

					{/* Voucher + Type */}
					<div className="mb-4 w-full flex gap-2">
						<div className="flex-[2]">
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
								Tipo de Pago
							</Typography>
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

					<div className="mb-4 w-full flex gap-2">
						{/* Fee */}
						<div className="flex-[2]">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								Monto a Cancelar
							</Typography>

							<div className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-gray-300">
								{selected.fee}
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

					{/* Submit */}

					<Button variant="contained" className="w-full">
						Inscribir
					</Button>
				</div>
			</div>
			{/* Description */}

			<Typography className="text-gray-300 text-sm text-justify">
				{selected.description}
			</Typography>
		</Box>
	);
}
