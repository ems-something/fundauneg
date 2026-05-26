"use client";

import React, { useState, useEffect } from "react";
import { validationSchema } from "@/app/utils/validations";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Formik, Form, useFormikContext } from "formik";
import { CloudUpload } from "@mui/icons-material";
import {
	Avatar,
	TextField,
	Button,
	Box,
	Typography,
	FormControl,
	FormControlLabel,
	Checkbox,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { FormikDatePicker } from "@/app/components/dashboard/registration/FormikDatePicker";

interface FormValues {
	doc: string;
	rif: string;
	name: string;
	lastname: string;
	birthdate: Dayjs;
	gender: string;
	email: string;
	phone: string;
	instagram: string;
	address: string;
	representativeDoc: string;
	representativeName: string;
	educationLevel: string;
	universityDegree: File | null;
	studiesInProgress: string;
	company: string;
	companyPosition: string;
	companyAddress: string;
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
				<h2 className="text-white text-3xl text-center mb-1 font-medium title-font">
					Inscríbete
				</h2>
				<p className="leading-relaxed text-gray-400 mb-4">
					Se parte de la comunidad de Fundauneg
				</p>

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
					birthdate: dayjs(),
					gender: "",
					email: "",
					phone: "",
					instagram: "",
					address: "",
					representativeDoc: "",
					representativeName: "",
					educationLevel: "",
					universityDegree: null,
					studiesInProgress: "",
					company: "",
					companyPosition: "",
					companyAddress: "",
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
										size="small"
										required
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
										size="small"
										required
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
										size="small"
										required
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
										size="small"
										required
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

								{/* F. Nacimiento */}
								<div className="mb-4">
									<FormControl
										fullWidth
										sx={{
											minHeight: 40,
											backgroundColor: "#1f2937",
										}}
									>
										<FormikDatePicker
											name="birthdate"
											label="F. Nacimiento"
											format="DD/MM/YYYY"
											slotProps={{
												textField: {
													required: true,
													id: "birthdate",
													size: "small",
												},
											}}
											sx={{ p: 0, color: "#9ca3af" }}
										/>
									</FormControl>
								</div>

								{/* Género */}
								<div className="mb-4">
									<Typography className="block h-4 text-left leading-7 text-sm text-gray-400">
										Género
									</Typography>
									<FormControl
										fullWidth
										required
										id="gender"
										sx={{ minHeight: 16 }}
									>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-evenly",
												alignItems: "center",
												borderRadius: 1,
												ml: 2,
												height: "16px",
											}}
										>
											<FormControlLabel
												label={"Masc."}
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
															values.gender ===
															"male"
														}
														onChange={() =>
															setFieldValue(
																"gender",
																"male",
															)
														}
													/>
												}
											/>

											<FormControlLabel
												label={"Fem."}
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
															values.gender ===
															"female"
														}
														onChange={() =>
															setFieldValue(
																"gender",
																"female",
															)
														}
													/>
												}
											/>
										</Box>
									</FormControl>
								</div>

								{/* Email */}
								<div className="sm:col-span-2 mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Correo
									</Typography>
									<div className="sm:col-span-2">
										<TextField
											fullWidth
											size="small"
											required
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
								<div className=" mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Teléfono
									</Typography>
									<div className="sm:col-span-2">
										<TextField
											fullWidth
											size="small"
											required
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

								{/* Instagram */}
								<div className=" mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Instagram
									</Typography>
									<div className="sm:col-span-2">
										<TextField
											fullWidth
											size="small"
											required
											name="instagram"
											value={values.instagram}
											onChange={handleChange}
											onBlur={handleBlur}
											error={
												touched.instagram &&
												Boolean(errors.instagram)
											}
											helperText={
												touched.instagram &&
												errors.instagram
											}
											variant="outlined"
										/>
									</div>
								</div>

								{/* Dirección */}
								<div className="sm:col-span-2 mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Dirección
									</Typography>
									<div className="sm:col-span-2">
										<TextField
											fullWidth
											size="small"
											required
											name="address"
											value={values.address}
											onChange={handleChange}
											onBlur={handleBlur}
											error={
												touched.address &&
												Boolean(errors.address)
											}
											helperText={
												touched.address &&
												errors.address
											}
											variant="outlined"
										/>
									</div>
								</div>

								{/* Documento del Representante*/}
								<div className="mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Documento del Representante (opcional)
									</Typography>
									<TextField
										fullWidth
										size="small"
										name="doc"
										value={values.representativeDoc}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.representativeDoc &&
											Boolean(errors.representativeDoc)
										}
										helperText={
											touched.representativeDoc &&
											errors.representativeDoc
										}
										variant="outlined"
									/>
								</div>

								{/* Nombre del representante */}
								<div className="mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Nombre del Representante (opcional)
									</Typography>
									<TextField
										fullWidth
										size="small"
										name="representativeName"
										value={values.representativeName}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.representativeName &&
											Boolean(errors.representativeName)
										}
										helperText={
											touched.representativeName &&
											errors.representativeName
										}
										variant="outlined"
									/>
								</div>

								<div className="mb-4">
									<FormControl
										sx={{ width: "100%" }}
										size="small"
									>
										<InputLabel id="education-level-type-label">
											Grado de Instrucción
										</InputLabel>

										<Select
											labelId="education-level-type-label"
											id="formation-type-select"
											value={values.educationLevel}
											label="Grado de Instrucción"
											onChange={handleChange}
											onBlur={handleBlur}
											error={
												touched.educationLevel &&
												Boolean(errors.educationLevel)
											}
										>
											<MenuItem value={"primaria"}>
												Primaria
											</MenuItem>
											<MenuItem value={"bachiller"}>
												Bachiller
											</MenuItem>
											<MenuItem value={"tecnico_medio"}>
												Tecnico Medio
											</MenuItem>
											<MenuItem value={"universitario"}>
												Universitario
											</MenuItem>
											<MenuItem value={"postgrado"}>
												Postgrado
											</MenuItem>
											<MenuItem value={"doctorado"}>
												Doctorado
											</MenuItem>
										</Select>
									</FormControl>
								</div>

								{/* --- Upload: University Degree --- */}
								<div className="mb-4">
									<Button
										startIcon={<CloudUpload />}
										variant="outlined"
										component="label"
										fullWidth
										sx={{ height: "40px" }}
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

								{/* Estudios en proceso */}
								<div className="sm:col-span-2 mb-4">
									<Typography className="text-sm text-gray-400 mb-1 text-left">
										Estudios en Proceso (Especifique)
									</Typography>

									<TextField
										fullWidth
										size="small"
										name="studiesInProgress"
										value={values.studiesInProgress}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.studiesInProgress &&
											Boolean(errors.studiesInProgress)
										}
										helperText={
											touched.studiesInProgress &&
											errors.studiesInProgress
										}
										variant="outlined"
									/>
								</div>

								{/* Empresa */}
								<div className="mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Empresa donde Labora
									</Typography>
									<TextField
										fullWidth
										size="small"
										required
										name="doc"
										value={values.company}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.company &&
											Boolean(errors.company)
										}
										helperText={
											touched.company && errors.company
										}
										variant="outlined"
									/>
								</div>

								{/* Cargo */}
								<div className="mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Cargo que Desemepeña
									</Typography>
									<TextField
										fullWidth
										size="small"
										required
										name="companyPosition"
										value={values.companyPosition}
										onChange={handleChange}
										onBlur={handleBlur}
										error={
											touched.companyPosition &&
											Boolean(errors.companyPosition)
										}
										helperText={
											touched.companyPosition &&
											errors.companyPosition
										}
										variant="outlined"
									/>
								</div>

								{/* Dirección de la empresa*/}
								<div className="sm:col-span-2 mb-4">
									<Typography className="block text-left leading-7 text-sm text-gray-400 mb-1">
										Dirección de la Empresa
									</Typography>
									<div className="sm:col-span-2">
										<TextField
											fullWidth
											size="small"
											required
											name="companyAddress"
											value={values.companyAddress}
											onChange={handleChange}
											onBlur={handleBlur}
											error={
												touched.companyAddress &&
												Boolean(errors.companyAddress)
											}
											helperText={
												touched.companyAddress &&
												errors.companyAddress
											}
											variant="outlined"
										/>
									</div>
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
