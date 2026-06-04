"use client";

import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	TextField,
	IconButton,
	Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
	KeyboardArrowUp,
	KeyboardArrowDown,
	KeyboardArrowLeft,
	KeyboardArrowRight,
} from "@mui/icons-material";

interface Props {
	title: string;
	value: any;
	onChange: (field: string, value: number) => void;
}

export default function CoordinateEditor({ title, value, onChange }: Props) {
	return (
		<Accordion
			sx={{
				borderRadius: 2,
				border: "1px solid",
				borderColor: "#374151",
				color: "#9ca3af",

				"&:first-of-type": {
					borderTopLeftRadius: 6,
					borderTopRightRadius: 6,
				},

				"&:last-of-type": {
					borderBottomLeftRadius: 6,
					borderBottomRightRadius: 6,
				},

				"&:before": {
					display: "none",
				},
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon sx={{ color: "#9ca3af" }} />}
			>
				<Typography>{title}</Typography>
			</AccordionSummary>

			<AccordionDetails>
				<Box className="flex flex-col gap-2">
					<div className="grid grid-cols-2 gap-2">
						<TextField
							size="small"
							label="X"
							type="number"
							value={Number.isFinite(value.x) ? value.x : ""}
							onChange={(e) =>
								onChange("x", Number(e.target.value))
							}
						/>

						<TextField
							size="small"
							label="Y"
							type="number"
							value={Number.isFinite(value.y) ? value.y : ""}
							onChange={(e) =>
								onChange("y", Number(e.target.value))
							}
						/>
					</div>

					<div className="flex justify-center">
						<IconButton onClick={() => onChange("y", value.y - 1)}>
							<KeyboardArrowUp />
						</IconButton>
					</div>

					<div className="flex justify-center gap-4">
						<IconButton onClick={() => onChange("x", value.x - 1)}>
							<KeyboardArrowLeft />
						</IconButton>

						<IconButton onClick={() => onChange("y", value.y + 1)}>
							<KeyboardArrowDown />
						</IconButton>

						<IconButton onClick={() => onChange("x", value.x + 1)}>
							<KeyboardArrowRight />
						</IconButton>
					</div>

					{"fontSize" in value && (
						<TextField
							size="small"
							label="Font Size"
							type="number"
							value={
								Number.isFinite(value.fontSize)
									? value.fontSize
									: ""
							}
							onChange={(e) =>
								onChange("fontSize", Number(e.target.value))
							}
						/>
					)}

					{"size" in value && (
						<TextField
							size="small"
							label="QR Size"
							type="number"
							value={
								Number.isFinite(value.size) ? value.size : ""
							}
							onChange={(e) =>
								onChange("size", Number(e.target.value))
							}
						/>
					)}
				</Box>
			</AccordionDetails>
		</Accordion>
	);
}
