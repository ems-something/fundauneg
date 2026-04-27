import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "#111827", // bg-gray-900
			paper: "#1f2937", // bg-gray-800
		},
		text: {
			primary: "#f3f4f6",
			secondary: "#9ca3af",
		},
	},

	components: {
		// 🔥 TEXTFIELD
		MuiTextField: {
			defaultProps: {
				variant: "outlined",
				fullWidth: true,
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					backgroundColor: "#1f2937",
					borderRadius: "0.375rem",
					color: "#f3f4f6",

					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "#374151",
					},

					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "#374151",
					},

					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "#1e9ae6",
					},

					// ❌ remove red error border
					"&.Mui-error .MuiOutlinedInput-notchedOutline": {
						borderColor: "#374151",
					},

					"&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
						{
							borderColor: "#1e9ae6",
						},
				},
			},
		},

		// 🔥 LABEL
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: "#9ca3af",
					"&.Mui-focused": {
						color: "#9ca3af",
					},
					"&.Mui-error": {
						color: "#9ca3af",
					},
				},
			},
		},

		// 🔥 SELECT
		MuiSelect: {
			styleOverrides: {
				select: {
					color: "#9ca3af",
				},
				icon: {
					color: "#9ca3af",
				},
			},
		},

		// 🔥 FORM CONTROL (for borders)
		MuiFormControl: {
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "#374151",
					},
				},
			},
		},

		// 🔥 BUTTON
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: "0.375rem",
				},
				contained: {
					color: "#111827",
					backgroundColor: "#f3f4f6", // primary
					"&:hover": {
						backgroundColor: "#1e9ae6", // secondary
					},
				},
				outlined: {
					borderColor: "#6b7280",
					color: "#f3f4f6",
				},
			},
		},

		// 🔥 HELPER TEXT
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					marginLeft: 0,
					color: "#ef4444",
				},
			},
		},
	},
});
