"use client";

import { ReactNode, FunctionComponent } from "react";
import { Box, TableCell, Typography } from "@mui/material";

type Props = {
	cellType: string;
	style?: Object;
	colWidth: number;
	children: ReactNode;
};

export const TableBodyCell: FunctionComponent<Props> = ({
	cellType,
	style = {},
	colWidth,
	children,
}) => {
	return (
		<>
			{cellType === "data" ? (
				<TableCell
					align="center"
					style={{
						width: colWidth != null ? colWidth : 150,
					}}
				>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<span
							style={{
								maxWidth: colWidth != null ? colWidth : 100,
								whiteSpace: "nowrap",
								overflow: "hidden",
								textOverflow: "ellipsis",
								fontSize: "11pt",
								lineHeight: 1.5,
								...style,
							}}
						>
							{children}
						</span>
					</Box>
				</TableCell>
			) : (
				<TableCell
					align="center"
					style={{
						width: colWidth,
					}}
				>
					{children}
				</TableCell>
			)}
		</>
	);
};
