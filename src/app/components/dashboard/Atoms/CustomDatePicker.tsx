import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/es";

const datePickerSx = {
	"& fieldset": {
		borderColor: "#374151",
		borderWidth: "1px",
	},
};

export function CustomDatePicker({
	dateSelected,
	setDateSelected,
	useContainer,
	format,
	slotProps,
	sx,
	label,
	disableFuture = true,
	disablePast = false,
	disabled = false,
}: {
	dateSelected: any;
	setDateSelected: any;
	useContainer?: boolean;
	format?: string;
	slotProps?: any;
	sx?: any;
	label?: string;
	disableFuture?: boolean;
	disablePast?: boolean;
	disabled?: boolean;
}) {
	return (
		<LocalizationProvider adapterLocale="es" dateAdapter={AdapterDayjs}>
			{useContainer ? (
				<DatePicker
					sx={{ width: "100%" }}
					label={label ?? "Fecha"}
					disabled={disabled}
					disableFuture={disableFuture && !disablePast}
					disablePast={disablePast && !disableFuture}
					value={dateSelected}
					onChange={(newValue) => setDateSelected(newValue)}
					desktopModeMediaQuery="@media (min-width: 0px)"
					slotProps={{
						...slotProps,
						textField: {
							size: "small",
							className: "w-full",
							...slotProps?.textField,
							InputProps: {
								...slotProps?.textField?.InputProps,
								style: {
									borderRadius: "10px",
									backgroundColor: "white",
									...slotProps?.textField?.InputProps?.style,
								},
							},
							sx: {
								...datePickerSx,
								...slotProps?.textField?.sx,
								...sx,
							},
						},
					}}
				/>
			) : (
				<DatePicker
					label={label ?? "Fecha"}
					disabled={disabled}
					disableFuture={disableFuture && !disablePast}
					disablePast={disablePast && !disableFuture}
					value={dateSelected}
					onChange={(newValue) => setDateSelected(newValue)}
					format={format}
					desktopModeMediaQuery="@media (min-width: 0px)"
					slotProps={{
						...slotProps,
						textField: {
							size: "small",
							fullWidth: true,
							...slotProps?.textField,
							InputProps: {
								...slotProps?.textField?.InputProps,
								style: {
									borderRadius: "10px",
									backgroundColor: "white",
									...slotProps?.textField?.InputProps?.style,
								},
							},
							sx: {
								...datePickerSx,
								...slotProps?.textField?.sx,
								...sx,
							},
						},
					}}
				/>
			)}
		</LocalizationProvider>
	);
}
