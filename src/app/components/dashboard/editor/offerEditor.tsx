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
	const [pdf, setPdf] = useState<File | null>(null);

	// prevent memory leak
	useEffect(() => {
		return () => {
			if (preview) URL.revokeObjectURL(preview);
		};
	}, [preview]);

	return (
		<Box className="w-full max-w-5xl mx-auto p-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* LEFT: Image Upload */}
				<div
					className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-4 bg-gray-800 text-gray-300 cursor-pointer hover:border-secondary transition relative overflow-hidden"
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
						<div className="w-full h-64 relative">
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

				{/* RIGHT: Form */}
				<div className="flex flex-col items-start text-left">
					{/* Title */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-1 text-left">
							Título
						</Typography>

						<TextField
							fullWidth
							placeholder="Título"
							variant="outlined"
						/>
					</div>

					{/* Description */}
					<div className="mb-6 w-full">
						<Typography className="text-sm text-gray-400 mb-1 text-left">
							Descripción
						</Typography>

						<TextField
							fullWidth
							multiline
							rows={4}
							placeholder="Descripción"
							variant="outlined"
						/>
					</div>

					{/* 🔥 Select (NEW) */}
					<div className="mb-4 w-full">
						<FormControl sx={{ width: "100%" }} size="small">
							<InputLabel id="formation-type-label">
								Formación
							</InputLabel>

							<Select
								labelId="formation-type-label"
								id="formation-type-select"
								value={"Diplomado"}
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

					{/* PDF Upload */}
					<div className="mb-4 w-full">
						<Typography className="text-sm text-gray-400 mb-2 text-left">
							Información (PDF)
						</Typography>

						<Button variant="outlined" component="label" fullWidth>
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

					{/* Submit */}
					<Button variant="contained" className="w-full">
						Guardar
					</Button>
				</div>
			</div>
		</Box>
	);
}
