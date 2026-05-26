"use client";

import { IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useMemo, MouseEvent, FunctionComponent, ChangeEvent } from "react";

type Props = {
	page: number;
	rowsPerPage: number;
	count: number;
	onPageChange: (
		event: MouseEvent<HTMLButtonElement> | null,
		newPage: number,
	) => void;
	onRowsPerPageChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	rowsPerPageOptions?: number[];
	labelRowsPerPage?: string;
	className?: string;
	modalMode?: boolean;
};

export const DataTablePagination: FunctionComponent<Props> = ({
	page,
	rowsPerPage,
	count,
	onPageChange,
	onRowsPerPageChange,
	rowsPerPageOptions = [5, 25, 50],
	className = "",
	modalMode = false,
}) => {
	const totalPages = Math.max(
		1,
		Math.ceil((count || 0) / (rowsPerPage || 1)),
	);
	const isFirstPage = page <= 0;
	const isLastPage = page >= totalPages - 1;
	const displayedPages = useMemo(() => {
		const FIXED_NUMBERS = 5;
		const current = page + 1;
		if (totalPages <= FIXED_NUMBERS) {
			return Array.from({ length: totalPages }, (_, i) => i + 1) as (
				| number
				| string
			)[];
		}
		const pages: (number | string)[] = [];
		const first = 1;
		const last = totalPages;
		if (current <= 3) {
			pages.push(1, 2, 3, last - 1, last);
			if (last - 1 > 4) pages.splice(3, 0, "...");
			return pages;
		}
		if (current >= last - 2) {
			pages.push(1, 2, last - 2, last - 1, last);
			if (last - 2 > 3) pages.splice(2, 0, "...");
			return pages;
		}
		pages.push(first, current - 1, current, current + 1, last);
		if (current - 1 > 2) pages.splice(1, 0, "...");
		if (current + 1 < last - 1) pages.splice(pages.length - 1, 0, "...");
		return pages;
	}, [page, totalPages]);

	const changeRows = (value: number) => {
		const fakeEvent = {
			target: { value: String(value) },
		} as unknown as ChangeEvent<HTMLInputElement>;
		onRowsPerPageChange(fakeEvent);
	};

	return (
		<>
			<div
				className={`hidden max-[425px]:hidden min-[426px]:max-[767px]:hidden min-[768px]:flex h-12 inline-flex justify-center items-center gap-8 overflow-hidden mt-4 ${className || ""}`}
			>
				<div className="px-2 rounded-full flex justify-start items-center gap-2 overflow-hidden">
					<div className="w-10 h-10 relative bg-white rounded-full overflow-hidden flex items-center justify-center">
						<span>
							<IconButton
								onClick={(e) => onPageChange(e, page - 1)}
								aria-disabled={isFirstPage}
								className={`rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/20 ${
									isFirstPage
										? "pointer-events-none hover:scale-100 active:scale-100 hover:bg-transparent"
										: ""
								}`}
							>
								<NavigateBefore
									className={`text-gray-500 ${isFirstPage ? "opacity-40" : ""}`}
								/>
							</IconButton>
						</span>
					</div>
					{modalMode ? (
						<div className="px-3 py-2 flex justify-center items-center overflow-hidden">
							<span className="text-lg font-medium text-gray-700">
								{page + 1}
							</span>
						</div>
					) : (
						<div className="px-3 py-2 bg-gray-200 rounded-full flex justify-center items-center gap-4 overflow-hidden">
							{displayedPages.map((p, idx) => {
								const isCurrent = p === page + 1;
								if (p === "...")
									return (
										<div
											key={`ellipsis-${idx}`}
											className="justify-start text-gray-500 text-xl font-medium"
										>
											...
										</div>
									);
								return (
									<button
										key={`p-${p}`}
										onClick={(e) =>
											onPageChange(
												e as any,
												(p as number) - 1,
											)
										}
										className={`relative w-7 h-7 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${
											isCurrent
												? "bg-gray-100 border-2 border-gray-400 shadow-sm"
												: "hover:bg-white/60 hover:shadow"
										}`}
										aria-current={
											isCurrent ? "page" : undefined
										}
									>
										<span
											className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium ${
												isCurrent
													? "text-gray-700"
													: "text-gray-600"
											}`}
										>
											{p}
										</span>
									</button>
								);
							})}
						</div>
					)}
					<div className="w-10 h-10 relative bg-white rounded-full overflow-hidden flex items-center justify-center">
						<span>
							<IconButton
								onClick={(e) => onPageChange(e, page + 1)}
								aria-disabled={isLastPage}
								className={`rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/20 ${
									isLastPage
										? "pointer-events-none hover:scale-100 active:scale-100 hover:bg-transparent"
										: ""
								}`}
							>
								<NavigateNext
									className={`text-gray-500 ${isLastPage ? "opacity-40" : ""}`}
								/>
							</IconButton>
						</span>
					</div>
				</div>
				<div className="w-64 h-12 bg-gray-200 rounded-full flex justify-center items-center gap-1 overflow-hidden">
					{rowsPerPageOptions.map((opt) => (
						<button
							key={`rows-${opt}`}
							onClick={() => changeRows(opt)}
							className={`w-20 h-10 relative rounded-full overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95 ${
								rowsPerPage === opt
									? "bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]"
									: "hover:bg-white/60"
							}`}
						>
							<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">
								{opt}
							</span>
						</button>
					))}
				</div>
			</div>
			<div
				className={`hidden max-[425px]:hidden min-[426px]:max-[767px]:flex min-[768px]:hidden h-8 max-[600px]:h-7 inline-flex justify-center items-center gap-4 max-[600px]:gap-2 overflow-hidden mt-3 ${className || ""}`}
			>
				<div className="px-2 rounded-full flex justify-start items-center gap-1.5 overflow-hidden">
					<div className="w-7 h-7 max-[600px]:w-6 max-[600px]:h-6 relative bg-white rounded-full overflow-hidden flex items-center justify-center">
						<span>
							<IconButton
								onClick={(e) => onPageChange(e, page - 1)}
								aria-disabled={isFirstPage}
								className={`rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/20 ${
									isFirstPage
										? "pointer-events-none hover:scale-100 active:scale-100 hover:bg-transparent"
										: ""
								}`}
								size="small"
							>
								<NavigateBefore
									className={`text-gray-500 text-xs max-[600px]:text-[10px] ${isFirstPage ? "opacity-40" : ""}`}
								/>
							</IconButton>
						</span>
					</div>
					{modalMode ? (
						<div className="px-1.5 max-[600px]:px-1 py-1 max-[600px]:py-0.5 flex justify-center items-center overflow-hidden">
							<span className="text-xs max-[600px]:text-[10px] font-medium text-gray-700">
								{page + 1}
							</span>
						</div>
					) : (
						<div className="px-2 max-[600px]:px-1 py-1 max-[600px]:py-0.5 bg-gray-200 rounded-full flex justify-center items-center gap-2 max-[600px]:gap-1 overflow-hidden">
							{displayedPages.map((p, idx) => {
								const isCurrent = p === page + 1;
								if (p === "...")
									return (
										<div
											key={`ellipsis-medium-${idx}`}
											className="justify-start text-gray-500 text-xs max-[600px]:text-[10px] font-medium"
										>
											...
										</div>
									);
								return (
									<button
										key={`p-medium-${p}`}
										onClick={(e) =>
											onPageChange(
												e as any,
												(p as number) - 1,
											)
										}
										className={`relative w-5 h-5 max-[600px]:w-4 max-[600px]:h-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${
											isCurrent
												? "bg-gray-100 border-2 border-gray-400 shadow-sm"
												: "hover:bg-white/60 hover:shadow"
										}`}
										aria-current={
											isCurrent ? "page" : undefined
										}
									>
										<span
											className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs max-[600px]:text-[10px] font-medium ${
												isCurrent
													? "text-gray-700"
													: "text-gray-600"
											}`}
										>
											{p}
										</span>
									</button>
								);
							})}
						</div>
					)}
					<div className="w-7 h-7 max-[600px]:w-6 max-[600px]:h-6 relative bg-white rounded-full overflow-hidden flex items-center justify-center">
						<span>
							<IconButton
								onClick={(e) => onPageChange(e, page + 1)}
								aria-disabled={isLastPage}
								className={`rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/20 ${
									isLastPage
										? "pointer-events-none hover:scale-100 active:scale-100 hover:bg-transparent"
										: ""
								}`}
								size="small"
							>
								<NavigateNext
									className={`text-gray-500 text-xs max-[600px]:text-[10px] ${isLastPage ? "opacity-40" : ""}`}
								/>
							</IconButton>
						</span>
					</div>
				</div>
				<div className="w-40 max-[600px]:w-36 h-8 max-[600px]:h-7 bg-gray-200 rounded-full flex justify-center items-center gap-1 overflow-hidden">
					{rowsPerPageOptions.map((opt) => (
						<button
							key={`rows-medium-${opt}`}
							onClick={() => changeRows(opt)}
							className={`w-14 max-[600px]:w-12 h-7 max-[600px]:h-6 relative rounded-full overflow-hidden transition-all duration-200 hover:scale-105 active:scale-95 ${
								rowsPerPage === opt
									? "bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]"
									: "hover:bg-white/60"
							}`}
						>
							<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-xs max-[600px]:text-[10px] font-medium">
								{opt}
							</span>
						</button>
					))}
				</div>
			</div>
			<div
				className={`max-[425px]:block min-[426px]:hidden ${modalMode ? "mt-3 pt-2" : "space-y-2 mt-3"} ${className || ""}`}
			>
				{modalMode ? (
					<div className="flex justify-center items-center gap-2 sm:gap-3 overflow-hidden">
						<div className="px-0.5 rounded-full flex justify-start items-center gap-0.5 overflow-hidden">
							<div className="w-5 h-5 sm:w-6 sm:h-6 relative bg-white rounded-full overflow-hidden flex items-center justify-center">
								<span>
									<IconButton
										onClick={(e) =>
											onPageChange(e, page - 1)
										}
										aria-disabled={isFirstPage}
										className={`rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/20 ${
											isFirstPage
												? "pointer-events-none hover:scale-100 active:scale-100 hover:bg-transparent"
												: ""
										}`}
										size="small"
									>
										<NavigateBefore
											className={`text-gray-500 text-xs ${isFirstPage ? "opacity-40" : ""}`}
										/>
									</IconButton>
								</span>
							</div>
							<div className="px-1 sm:px-1.5 py-0.5 flex justify-center items-center overflow-hidden">
								<span className="text-xs font-medium text-gray-700">
									{page + 1}
								</span>
							</div>
							<div className="w-5 h-5 sm:w-6 sm:h-6 relative bg-white rounded-full overflow-hidden flex items-center justify-center">
								<span>
									<IconButton
										onClick={(e) =>
											onPageChange(e, page + 1)
										}
										aria-disabled={isLastPage}
										className={`rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/20 ${
											isLastPage
												? "pointer-events-none hover:scale-100 active:scale-100 hover:bg-transparent"
												: ""
										}`}
										size="small"
									>
										<NavigateNext
											className={`text-gray-500 text-xs ${isLastPage ? "opacity-40" : ""}`}
										/>
									</IconButton>
								</span>
							</div>
						</div>
						<div className="w-32 h-6 bg-gray-200 rounded-full flex justify-center items-center gap-0.5 px-1">
							{rowsPerPageOptions.map((opt) => (
								<button
									key={`rows-modal-mobile-${opt}`}
									onClick={() => changeRows(opt)}
									className={`flex-1 h-5 relative rounded-full transition-all duration-200 hover:scale-105 active:scale-95 z-10 ${
										rowsPerPage === opt
											? "bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]"
											: "hover:bg-white/60"
									}`}
									style={{ touchAction: "manipulation" }}
								>
									<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-xs font-medium pointer-events-none select-none">
										{opt}
									</span>
								</button>
							))}
						</div>
					</div>
				) : (
					<>
						<div className="flex justify-center items-center">
							<div className="px-2 rounded-full flex justify-start items-center gap-2 overflow-hidden">
								<div className="w-10 h-10 relative bg-white rounded-full overflow-hidden flex items-center justify-center">
									<span>
										<IconButton
											onClick={(e) =>
												onPageChange(e, page - 1)
											}
											aria-disabled={isFirstPage}
											className={`rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/20 ${
												isFirstPage
													? "pointer-events-none hover:scale-100 active:scale-100 hover:bg-transparent"
													: ""
											}`}
										>
											<NavigateBefore
												className={`text-gray-500 ${isFirstPage ? "opacity-40" : ""}`}
											/>
										</IconButton>
									</span>
								</div>
								<div className="px-2 py-1.5 bg-gray-200 rounded-full flex justify-center items-center gap-3 overflow-hidden">
									{displayedPages.map((p, idx) => {
										const isCurrent = p === page + 1;
										if (p === "...")
											return (
												<div
													key={`ellipsis-mobile-${idx}`}
													className="justify-start text-gray-500 text-lg font-medium"
												>
													...
												</div>
											);
										return (
											<button
												key={`p-mobile-${p}`}
												onClick={(e) =>
													onPageChange(
														e as any,
														(p as number) - 1,
													)
												}
												className={`relative w-6 h-6 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${
													isCurrent
														? "bg-gray-100 border-2 border-gray-400 shadow-sm"
														: "hover:bg-white/60 hover:shadow"
												}`}
												aria-current={
													isCurrent
														? "page"
														: undefined
												}
											>
												<span
													className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium ${
														isCurrent
															? "text-gray-700"
															: "text-gray-600"
													}`}
												>
													{p}
												</span>
											</button>
										);
									})}
								</div>
								<div className="w-10 h-10 relative bg-white rounded-full overflow-hidden flex items-center justify-center">
									<span>
										<IconButton
											onClick={(e) =>
												onPageChange(e, page + 1)
											}
											aria-disabled={isLastPage}
											className={`rounded-full transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/20 ${
												isLastPage
													? "pointer-events-none hover:scale-100 active:scale-100 hover:bg-transparent"
													: ""
											}`}
										>
											<NavigateNext
												className={`text-gray-500 ${isLastPage ? "opacity-40" : ""}`}
											/>
										</IconButton>
									</span>
								</div>
							</div>
						</div>

						<div className="flex justify-center items-center px-2">
							<div className="w-full max-w-40 h-10 bg-gray-200 rounded-full flex justify-center items-center gap-0.5 px-1">
								{rowsPerPageOptions.map((opt) => (
									<button
										key={`rows-mobile-${opt}`}
										onClick={() => changeRows(opt)}
										className={`flex-1 h-8 relative rounded-full transition-all duration-200 hover:scale-105 active:scale-95 z-10 ${
											rowsPerPage === opt
												? "bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)]"
												: "hover:bg-white/60"
										}`}
										style={{ touchAction: "manipulation" }}
									>
										<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-xs font-medium pointer-events-none select-none">
											{opt}
										</span>
									</button>
								))}
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};
