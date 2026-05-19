"use client";

import {
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Box,
} from "@mui/material";
import { TableHeadCell } from "@/app/components/dashboard/Atoms/TableHeadCell";
import {
	TABLE_HEIGHT,
	TABLE_HEIGHT_FOR_PHONES,
	TABLE_HEIGHT_FOR_SE,
	TABLE_HEIGHT_FOR_TABLETS,
} from "@/app/utils/tableMeasures";
import { ReactNode, useMemo, useState } from "react";

type DataTableProps = {
	columns: string[];
	rows: any[];
	renderRow: (row: any, index: number, colWidths: number[]) => ReactNode;
	ariaLabel?: string;
	minWidth?: number;
	stickyHeader?: boolean;
	className?: string;
	title?: string;
	icon?: ReactNode;
	height?: string;
	showHeader?: boolean;
	useModernDesign?: boolean;
	rowOnClick?: any;
};

export function DataTable({
	columns,
	rows,
	renderRow,
	ariaLabel = "Tabla",
	minWidth = 650,
	stickyHeader = true,
	className = "",
	title,
	icon,
	height = "h-[400px] 2xsm:h-[450px] xs:h-[500px] sm:h-[600px] md:h-[clamp(500px,50vh,800px)]",
	showHeader = false,
	useModernDesign = true,
	rowOnClick = null,
}: DataTableProps) {
	const [colWidths, setColWidths] = useState<number[]>(() =>
		Array(columns.length).fill(100),
	);

	const header = useMemo(
		() => (
			<TableHead>
				<TableRow>
					{columns.map((header: string, index: number) => (
						<TableHeadCell
							key={index}
							index={index}
							colWidth={colWidths[index]}
							onChangeColWidths={setColWidths}
						>
							{header}
						</TableHeadCell>
					))}
				</TableRow>
			</TableHead>
		),
		[columns, colWidths],
	);

	if (!useModernDesign) {
		return (
			<div className={`rounded-[10px] bg-white ${className}`}>
				<Paper>
					<TableContainer
						component={Paper}
						sx={{
							height: {
								se: TABLE_HEIGHT_FOR_SE,
								xs: TABLE_HEIGHT_FOR_PHONES,
								sm: TABLE_HEIGHT_FOR_TABLETS,
								md: TABLE_HEIGHT,
							},
						}}
					>
						<Table
							stickyHeader={stickyHeader}
							sx={{ minWidth }}
							aria-label={ariaLabel}
							size="small"
						>
							{header}
							<TableBody>
								{rows?.map((row: any, index: number) => (
									<TableRow
										onClick={() => rowOnClick?.(row)}
										key={index}
										sx={{
											"&:last-child td, &:last-child th":
												{ border: 0 },
										}}
									>
										{renderRow(row, index, colWidths)}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</div>
		);
	}

	return (
		<div
			className={`rounded-xl outline outline-1 outline-gray-500/70 bg-white w-full overflow-hidden ${height} flex flex-col ${className}`}
		>
			{showHeader && (title || icon) && (
				<div className="border-b border-gray-200 py-2 sm:py-3 px-2 sm:px-4 flex items-center justify-center gap-1 sm:gap-2">
					{title && (
						<span className="text-lg font-semibold text-gray-800">
							{title}
						</span>
					)}
					{icon && <span className="text-purple-600">{icon}</span>}
				</div>
			)}
			<div
				className="flex-1 w-full overflow-x-auto"
				style={{ minHeight: "300px" }}
			>
				<TableContainer
					component={Box}
					sx={{
						height: "100%",
						"& .MuiTableCell-root": {
							textAlign: "center",
							fontSize: "14px",
							fontWeight: "400",
							height: "40px",
							lineHeight: "40px",
							padding: "0 8px",
							backgroundColor: "white",
							"@media (max-width: 1024px)": {
								fontSize: "12px",
							},
						},
						"& .MuiTableCell-head": {
							color: "#646464",
							backgroundColor: "#fafafa",
							borderBottom: "1px solid #e0e0e0",
							fontSize: "14px",
							height: "45px",
							fontWeight: "bold",
							"@media (max-width: 1024px)": {
								fontSize: "12px",
							},
						},
						"& .MuiTableRow-root": {
							backgroundColor: "white",
						},
					}}
				>
					<Table
						stickyHeader={stickyHeader}
						sx={{ minWidth }}
						aria-label={ariaLabel}
						size="small"
					>
						{header}
						<TableBody>
							{rows?.map((row: any, index: number) => (
								<TableRow
									onClick={() => rowOnClick?.(row)}
									key={index}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									{renderRow(row, index, colWidths)}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
