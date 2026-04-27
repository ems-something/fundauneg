"use client";

import React, { useState, useEffect } from "react";
import { validationSchema } from "@/utils/validations";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Formik, Form } from "formik";
import { CloudUpload } from "@mui/icons-material";
import {
	Avatar,
	TextField,
	Button,
	Box,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

interface FormValues {
	doc: string;
	rif: string;
	name: string;
	lastname: string;
	email: string;
	phone: string;
	highSchoolDiploma: File | null;
	universityDegree: File | null;
}

export default function RegistrationForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [avatar, setAvatar] = useState<File | null>(null);
	const [preview, setPreview] = useState<string | null>(null);

	// prevent memory leak
	useEffect(() => {
		return () => {
			if (preview) URL.revokeObjectURL(preview);
		};
	}, [preview]);

	const handleFile = (file: File) => {
		setAvatar(file);
		setPreview(URL.createObjectURL(file));
	};

	const handleSubmit = async (
		values: FormValues,
		{
			setSubmitting,
			resetForm,
		}: {
			setSubmitting: (isSubmitting: boolean) => void;
			resetForm: () => void;
		},
	) => {
		try {
			setIsLoading(true);
			// Send email using Nodemailer
			/*await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });*/

			// Reset the form
			resetForm();

			// Show success message or redirect to a thank you page
			console.log("Email sent successfully!");
		} catch (error) {
			// Handle error
			console.error("Failed to send email:", error);
		} finally {
			setSubmitting(false);
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="flex flex-col items-center">
				{/* Avatar */}
				<div
					className="relative cursor-pointer group"
					onDragOver={(e) => e.preventDefault()}
					onDrop={(e) => {
						e.preventDefault();
						const file = e.dataTransfer.files?.[0];
						if (file) handleFile(file);
					}}
				>
					<Avatar
						src={preview || ""}
						sx={{
							width: 120,
							height: 120,
							backgroundColor: "#1f2937",
						}}
					/>

					{/* Overlay */}
					<div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
						<Typography className="text-xs text-white">
							Cambiar
						</Typography>
					</div>

					{/* Hidden input */}
					<input
						type="file"
						accept="image/*"
						id="avatarUpload"
						className="hidden"
						onChange={(e) => {
							const file = e.target.files?.[0];
							if (file) handleFile(file);
						}}
					/>

					{/* Click trigger */}
					<label
						htmlFor="avatarUpload"
						className="absolute inset-0 cursor-pointer"
					/>
				</div>

				{/* Actions */}
				<div className="mt-3 flex gap-2">
					<label htmlFor="avatarUpload">
						<Button
							variant="outlined"
							component="span"
							size="small"
						>
							Subir
						</Button>
					</label>

					{preview && (
						<Button
							variant="outlined"
							size="small"
							onClick={() => {
								setAvatar(null);
								setPreview(null);
							}}
						>
							Eliminar
						</Button>
					)}
				</div>

				{/* Helper text */}
				<Typography className="text-xs text-gray-400 mt-2 text-center">
					Arrastra o selecciona una imagen
				</Typography>
			</div>

			<Formik<FormValues>
				initialValues={{
					doc: "",
					rif: "",
					name: "",
					lastname: "",
					email: "",
					phone: "",
					highSchoolDiploma: null,
					universityDegree: null,
				}}
				validationSchema={toFormikValidationSchema(validationSchema)}
				onSubmit={handleSubmit}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					setFieldValue,
					isSubmitting,
				}) => (
					<Form>
						<Box className="max-w-2xl mx-auto p-4">
							{/* Grid layout handled by Tailwind */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								{/* Documento */}
								<div className="mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Documento
									</Typography>
									<TextField
										fullWidth
										name="doc"
										value={values.doc}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.doc && Boolean(errors.doc)
										}
										helperText={touched.doc && errors.doc}
										variant="outlined"
									/>
								</div>

								{/* RIF */}
								<div className="mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										RIF
									</Typography>
									<TextField
										fullWidth
										name="rif"
										value={values.rif}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.rif && Boolean(errors.rif)
										}
										helperText={touched.rif && errors.rif}
										variant="outlined"
									/>
								</div>

								{/* Nombre */}
								<div className="mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Nombre
									</Typography>
									<TextField
										fullWidth
										name="name"
										value={values.name}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.name && Boolean(errors.name)
										}
										helperText={touched.name && errors.name}
										variant="outlined"
									/>
								</div>

								{/* Apellido */}
								<div className="mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Apellido
									</Typography>
									<TextField
										fullWidth
										name="lastname"
										value={values.lastname}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.lastname &&
											Boolean(errors.lastname)
										}
										helperText={
											touched.lastname && errors.lastname
										}
										variant="outlined"
									/>
								</div>

								{/* Email */}
								<div className="sm:col-span-2 mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Correo
									</Typography>
									<div className="sm:col-span-2">
										<TextField
											fullWidth
											name="email"
											type="email"
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											error={
												touched.email &&
												Boolean(errors.email)
											}
											helperText={
												touched.email && errors.email
											}
											variant="outlined"
										/>
									</div>
								</div>

								{/* Phone */}
								<div className="sm:col-span-2 mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Teléfono
									</Typography>
									<div className="sm:col-span-2">
										<TextField
											fullWidth
											name="phone"
											type="tel"
											value={values.phone}
											onChange={handleChange}
											onBlur={handleBlur}
											error={
												touched.phone &&
												Boolean(errors.phone)
											}
											helperText={
												touched.phone && errors.phone
											}
											variant="outlined"
										/>
									</div>
								</div>

								<div className="mb-4">
									<FormControl
										sx={{ width: "100%" }}
										size="small"
									>
										<InputLabel id="formation-type-label">
											Formación
										</InputLabel>
										<Select
											labelId="formation-type-label"
											id="formation-type-select"
											value={"Diplomado"}
											label="formation"
											onChange={handleChange}
										>
											<MenuItem value={"Diplomado"}>
												Diplomado
											</MenuItem>
											<MenuItem value={"Curso"}>
												Curso
											</MenuItem>
											<MenuItem value={"Taller"}>
												Taller
											</MenuItem>
										</Select>
									</FormControl>
								</div>

								<div className="mb-4">
									<FormControl
										sx={{ width: "100%" }}
										size="small"
									>
										<InputLabel id="offer-type-label">
											Oferta
										</InputLabel>
										<Select
											labelId="offer-type-label"
											id="offer-type-select"
											value={"Diplomado"}
											label="offer"
											onChange={handleChange}
										>
											<MenuItem value={"Diplomado"}>
												Diplomado
											</MenuItem>
											<MenuItem value={"Curso"}>
												Curso
											</MenuItem>
											<MenuItem value={"Taller"}>
												Taller
											</MenuItem>
										</Select>
									</FormControl>
								</div>

								{/* --- Upload: High School Diploma --- */}
								<div className="mb-4">
									<Button
										startIcon={<CloudUpload />}
										variant="outlined"
										component="label"
										fullWidth
										disabled={isLoading || isSubmitting}
									>
										Subir Título de Bachiller
										<input
											type="file"
											hidden
											accept="image/*,.pdf"
											onChange={(
												event: React.ChangeEvent<HTMLInputElement>,
											) => {
												const file =
													event.currentTarget
														.files?.[0] || null;
												setFieldValue(
													"highSchoolDiploma",
													file,
												);
											}}
										/>
									</Button>

									{values.highSchoolDiploma && (
										<Typography className="mt-1 text-sm">
											{values.highSchoolDiploma?.name}
										</Typography>
									)}

									{touched.highSchoolDiploma &&
										errors.highSchoolDiploma && (
											<Typography className="mt-1 text-sm text-red-500">
												{errors.highSchoolDiploma}
											</Typography>
										)}
								</div>

								{/* --- Upload: University Degree --- */}
								<div className="mb-4">
									<Button
										startIcon={<CloudUpload />}
										variant="outlined"
										component="label"
										fullWidth
									>
										Subir Título Universitario
										<input
											type="file"
											hidden
											accept="image/*,.pdf"
											onChange={(
												event: React.ChangeEvent<HTMLInputElement>,
											) => {
												const file =
													event.currentTarget
														.files?.[0] || null;
												setFieldValue(
													"universityDegree",
													file,
												);
											}}
										/>
									</Button>

									{values.universityDegree && (
										<Typography className="mt-1 text-sm">
											{values.universityDegree?.name}
										</Typography>
									)}

									{touched.universityDegree &&
										errors.universityDegree && (
											<Typography className="mt-1 text-sm text-red-500">
												{errors.universityDegree}
											</Typography>
										)}
								</div>

								{/* Submit */}
								<div className="sm:col-span-2">
									<Button
										fullWidth
										variant="contained"
										type="submit"
										disabled={isLoading || isSubmitting}
									>
										Subscribir
									</Button>
								</div>
							</div>
						</Box>
					</Form>
				)}
			</Formik>
		</>
	);
}
