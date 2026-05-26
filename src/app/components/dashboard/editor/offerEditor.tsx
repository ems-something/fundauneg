"use client";

import { useState, useEffect } from "react";
import {
	Box,
	TextField,
	Button,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

export default function ContentForm() {
	const [image, setImage] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);
	const [coordinator, setCoordinator] = useState("");
	const [addressedTo, setAddressedTo] = useState("");
	const [pdf, setPdf] = useState<File | null>(null);

	// prevent memory leak
	useEffect(() => {
		return () => {
			if (preview) URL.revokeObjectURL(preview);
		};
	}, [preview]);

	return (
		<Box className="w-full max-w-5xl mx-auto p-4">
			<h2 className="text-white text-3xl text-center mb-4 font-medium title-font">
				Nueva oferta académica
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* LEFT: Image Upload */}
				<div className="mb-4">
					<div
						className="flex flex-col h-[440px] items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-4 bg-gray-800 text-gray-300 cursor-pointer hover:border-secondary transition overflow-hidden mb-4"
						onDragOver={(e) => e.preventDefault()}
						onDrop={(e) => {
							e.preventDefault();
							const file = e.dataTransfer.files?.[0];
							if (file) {
								setImage(file);
								setPreview(URL.createObjectURL(file));
							}
						}}
					>
						<input
							type="file"
							accept="image/*"
							className="hidden"
							id="imageUpload"
							onChange={(e) => {
								const file = e.target.files?.[0] || null;
								if (file) {
									setImage(file);
									setPreview(URL.createObjectURL(file));
								}
							}}
						/>

						{!preview && (
							<>
								<Typography className="text-sm mb-2">
									Arrastra una imagen aquí
								</Typography>

								<Typography className="text-xs text-gray-400 mb-3">
									o haz clic para seleccionar
								</Typography>

								<label htmlFor="imageUpload">
									<Button variant="outlined" component="span">
										Seleccionar imagen
									</Button>
								</label>
							</>
						)}

						{preview && (
							<div className="w-full h-[366px] relative">
								<img
									src={preview}
									alt="preview"
									className="w-full h-full object-cover rounded-md"
								/>

								{/* Overlay */}
								<div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center gap-2">
									<label htmlFor="imageUpload">
										<Button
											variant="contained"
											component="span"
											size="small"
										>
											Cambiar
										</Button>
									</label>

									<Button
										variant="outlined"
										size="small"
										onClick={() => {
											setImage(null);
											setPreview(null);
										}}
									>
										Eliminar
									</Button>
								</div>
							</div>
						)}
					</div>

					{/* PDF Upload */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-2 text-left">
							Información (PDF)
						</Typography>

						<Button
							variant="outlined"
							component="label"
							fullWidth
							sx={{ height: "40spx" }}
						>
							Cargar PDF
							<input
								type="file"
								hidden
								accept="application/pdf"
								onChange={(e) => {
									const file = e.target.files?.[0] || null;
									setPdf(file);
								}}
							/>
						</Button>

						{pdf && (
							<Typography className="mt-2 text-sm text-gray-300 text-left">
								{pdf.name}
							</Typography>
						)}
					</div>
				</div>

				{/* RIGHT: Form */}
				<div className="flex flex-col items-start text-left mb-4">
					{/* Title */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-1 text-left">
							Título
						</Typography>

						<TextField
							fullWidth
							size="small"
							required
							placeholder="Título"
							variant="outlined"
						/>
					</div>

					{/* Formación */}
					<div className="mb-4 w-full">
						<FormControl sx={{ width: "100%" }} size="small">
							<InputLabel id="formation-type-label">
								Formación
							</InputLabel>

							<Select
								labelId="formation-type-label"
								id="formation-type-select"
								value={""}
								label="Formación"
								onChange={() => {
									"";
								}}
							>
								<MenuItem value={"Diplomado"}>
									Diplomado
								</MenuItem>
								<MenuItem value={"Curso"}>Curso</MenuItem>
								<MenuItem value={"Taller"}>Taller</MenuItem>
							</Select>
						</FormControl>
					</div>

					{/* Coordinador */}
					<div className="mb-4 w-full">
						<Typography className="block text-sm text-gray-400 mb-1 self-center">
							Coordinador
						</Typography>

						<TextField
							fullWidth
							size="small"
							required
							placeholder="Coordinador"
							variant="outlined"
						/>
					</div>

					{/* Dirigido a */}
					<div className="mb-4 w-full">
						<Typography className="block text-sm text-gray-400 mb-1 self-center">
							Dirigido a
						</Typography>

						<TextField
							fullWidth
							size="small"
							required
							placeholder="Dirigido a"
							variant="outlined"
						/>
					</div>

					<div className="mb-4 w-full flex gap-2">
						{/* N° de Cuotas */}
						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								N° de Cuotas
							</Typography>

							<TextField
								fullWidth
								size="small"
								required
								placeholder="Inversión Total"
								variant="outlined"
							/>
						</div>

						{/* Inversión Total */}
						<div className="flex-1">
							<Typography className="block text-sm text-gray-400 mb-1 self-center">
								Inversión Total
							</Typography>

							<TextField
								fullWidth
								size="small"
								required
								placeholder="Inversión Total"
								variant="outlined"
							/>
						</div>
					</div>

					{/* Duración */}
					<div className="mb-4 w-full">
						<Typography className="block text-sm text-gray-400 mb-1 self-center">
							Duración
						</Typography>

						<TextField
							fullWidth
							size="small"
							required
							placeholder="Inversión Total"
							variant="outlined"
						/>
					</div>

					{/* Horario */}
					<div className="w-full">
						<Typography className="block text-sm text-gray-400 mb-1 self-center">
							Horario
						</Typography>

						<TextField
							fullWidth
							size="small"
							required
							placeholder="Inversión Total"
							variant="outlined"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center text-left">
				{/* Description */}
				<div className="mb-6 w-full">
					<Typography className="text-sm text-gray-400 mb-1 text-left">
						Descripción
					</Typography>

					<TextField
						fullWidth
						multiline
						rows={5}
						placeholder="Descripción"
						variant="outlined"
					/>
				</div>

				{/* Submit */}
				<Button className="w-2/3" variant="contained">
					Guardar
				</Button>
			</div>
		</Box>
	);
}
