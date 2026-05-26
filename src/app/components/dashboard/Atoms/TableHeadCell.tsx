"use client";

import { TableCell } from "@mui/material";

import {
	useRef,
	useState,
	FunctionComponent,
	ReactNode,
	MouseEvent as ReactMouseEvent,
} from "react";

type Props = {
	index: number;
	colWidth: number;
	onChangeColWidths: (callback: (prevWidths: number[]) => number[]) => void;
	children: ReactNode;
};

export const TableHeadCell: FunctionComponent<Props> = ({
	index,
	colWidth,
	onChangeColWidths,
	children,
}) => {
	const colRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [isResizing, setIsResizing] = useState(false);

	const handleMouseDown =
		(index: number) => (event: ReactMouseEvent<HTMLDivElement>) => {
			const startX = event.clientX;
			const startWidth = colRefs.current[index]?.offsetWidth || 0;
			setIsResizing(true);

			const onMouseMove = (moveEvent: MouseEvent) => {
				const newWidth = startWidth + (moveEvent.clientX - startX);
				onChangeColWidths((prevWidths: number[]) => {
					const newWidths = [...prevWidths];
					newWidths[index] = newWidth;
					return newWidths;
				});
			};

			const onMouseUp = () => {
				setIsResizing(false);
				document.removeEventListener("mousemove", onMouseMove);
				document.removeEventListener("mouseup", onMouseUp);
			};

			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
		};

	return (
		<TableCell
			key={index}
			className="font-bold"
			align="center"
			style={{
				backgroundColor: "bg-gray-900",
				minWidth: colWidth || "auto",
				whiteSpace: "nowrap",
				cursor: "col-resize",
				height: "36px",
				lineHeight: "36px",
			}}
			onMouseDown={handleMouseDown(index)}
		>
			<div
				className="text-center"
				ref={(el) => {
					colRefs.current[index] = el;
				}}
				style={{
					position: "relative",
					display: "inline-block",
				}}
			>
				<span>{children}</span>
				<div
					style={{
						cursor: "col-resize",
						position: "absolute",
						right: 0,
						top: 0,
						height: "100%",
						width: "5px",
						zIndex: 1,
					}}
				/>
			</div>
		</TableCell>
	);
};
