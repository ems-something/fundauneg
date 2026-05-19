"use client";

import {
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import Menu from "@mui/material/Menu";

import { DataTable } from "@/app/components/dashboard/Atoms/DataTable";
import { DataTablePagination } from "@/app/components/dashboard/Atoms/DataTablePagination";

import { TableBodyCell } from "@/app/components/dashboard/Atoms/TableBodyCell";

import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";

import Search from "@/app/components/dashboard/Atoms/Search";
//import { RootContainer } from "@/app/components/dashboard/Atoms/RootContainer";

import AppModal from "@/app/components/dashboard/Modal/";

import {
	listInvoices,
	listInvoiceStatusTypes,
	listInvoicesSearchResults,
} from "@/app/api/actions/invoicing";
import { Invoice, SimpleOrg } from "@/app/api/models/invoicing";
import { InvoicesResponse, InvoiceStatus } from "@/app/api/models/invoicing";
import { listSimpleOrgs } from "@/app/api/actions/organizations";
import { BasicOperationType } from "@/app/components/dashboard/Modal/Helper/interface";

import { AddCircle, MoreHoriz } from "@mui/icons-material";

export function InvoicingTable(props: any) {
	const [filterOrgId, setFilterOrgId] = useState("");
	const [filterStatusId, setFilterStatusId] = useState("");

	const [pageNumber, setPageNumber] = useState(0);
	const [numberResults, setNumberResults] = useState(25);
	const [invoicesResponse, setInvoicesResponse] =
		useState<InvoicesResponse | null>(null);
	const [statusList, setStatusList] = useState<InvoiceStatus[]>([]);
	const [orgsList, setOrgsList] = useState<SimpleOrg[]>([]);

	const [operation, setOperation] = useState<BasicOperationType>("");
	const [openModal, setOpenModal] = useState(false);
	const [invoiceSelected, setInvoiceSelected] = useState<
		Invoice | undefined
	>();
	const [pageBeforeSearch, setPageBeforeSearch] = useState(0);
	const [isSearching, setIsSearching] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	/**
	 * For the tables
	 */
	const columnNames = [
		"ID",
		"Empresa",
		"Referencia",
		"Total USD",
		"Total VES",
		"Tasa BCV",
		"Parcial?",
		"Acciones",
		"Estatus",
		"F. de Pago",
		"F. de Vencimiento",
	];

	async function getInvoices() {
		let query = {
			page_number: pageNumber + 1,
			number_results: numberResults,
		};

		if (filterOrgId.trim().length !== 0)
			query = { ...query, ...{ org_id: filterOrgId } };
		if (filterStatusId.trim().length !== 0)
			query = { ...query, ...{ status_id: filterStatusId } };

		const data: InvoicesResponse = await listInvoices(query);

		if (data) setInvoicesResponse(data);
	}

	async function getSearchInvoices(query: any) {
		if (filterOrgId.trim().length !== 0)
			query = { ...query, ...{ org_id: filterOrgId } };
		if (filterStatusId.trim().length !== 0)
			query = { ...query, ...{ status_id: filterStatusId } };

		const data: InvoicesResponse = await listInvoicesSearchResults(query);

		if (data) setInvoicesResponse(data);
	}

	async function getStatusList() {
		const data: InvoiceStatus[] = await listInvoiceStatusTypes();
		setStatusList(data);
		if (data.length > 0) setFilterStatusId(data[0].id);
	}

	async function getOrgList() {
		const data: SimpleOrg[] = await listSimpleOrgs();
		setOrgsList(data);
	}

	useEffect(() => {
		getStatusList();
		getOrgList();
	}, []);

	useEffect(() => {
		if (isSearching && searchTerm) {
			getSearchInvoices({
				s: searchTerm,
				page_number: pageNumber + 1,
				number_results: numberResults,
			});
		} else if (!isSearching) {
			getInvoices();
		}
	}, [
		pageNumber,
		numberResults,
		filterOrgId,
		filterStatusId,
		isSearching,
		searchTerm,
	]);

	const handleChangePage = (
		event: MouseEvent<HTMLButtonElement> | null,
		newPage: number,
	) => {
		setPageNumber(newPage);
	};

	const handleChangeRowsPerPage = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setNumberResults(parseInt(event.target.value, 10));
		setPageNumber(0);
	};

	const handleOrgChange = (event: SelectChangeEvent<string>) => {
		event.preventDefault();
		setFilterOrgId(event.target.value as string);
	};

	const handleStatusChange = (event: SelectChangeEvent<string>) => {
		event.preventDefault();
		setFilterStatusId(event.target.value as string);
	};

	const handleOnSearch = useDebouncedCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			if (e.target.value.trim().length > 0) {
				if (!isSearching) {
					setPageBeforeSearch(pageNumber);
				}
				setSearchTerm(e.target.value);
				setIsSearching(true);
				setPageNumber(0);
			} else {
				setSearchTerm("");
				setIsSearching(false);
				setPageNumber(pageBeforeSearch);
			}
		},
		300,
	);

	function getOrgById(id: any) {
		let txt = id;
		if (orgsList.length > 0) {
			const orgFound = orgsList.find((org) => org.id == id);
			txt = orgFound?.name;
		}
		return txt;
	}

	function getStatusById(id: any) {
		let txt = id;
		if (statusList.length > 0) {
			const orgFound = statusList.find((st) => st.id == id);
			txt = orgFound?.label;
		}
		return txt;
	}

	const invoiceDetail = async (invoice: Invoice) => {
		setOpenModal(true);
		setOperation("Show");
		setInvoiceSelected(invoice);
	};

	function RowActions({ invoice }: { invoice: Invoice }) {
		const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
		const open = Boolean(anchorEl);
		const handleClick = (event: MouseEvent<HTMLElement>) => {
			setAnchorEl(event.currentTarget);
		};
		const handleClose = () => setAnchorEl(null);

		// Llamar directamente a las funciones existentes
		const handleinvoiceDetail = async () => {
			await invoiceDetail(invoice);
			handleClose();
		};

		const handlePrintDoc = () => {
			invoiceDetail(invoice);
			handleClose();
		};

		return (
			<div>
				<IconButton
					aria-label="acciones"
					onClick={handleClick}
					className="rounded-full bg-gray-100"
				>
					<MoreHoriz className="text-gray-500" />
				</IconButton>
				<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem onClick={handleinvoiceDetail}>Detalles</MenuItem>
				</Menu>
			</div>
		);
	}

	return (
		<div className="relative px-4 pt-4 w-full grid grid-cols-1 gap-2">
			<div className="hidden md:flex items-center justify-between mb-4">
				<div className="flex items-center gap-4">
					<h1 className="text-left font-extrabold text-2xl lg:text-3xl">
						{"Facturación"}
					</h1>
				</div>

				<div className="flex items-center gap-4 w-2/3">
					<div className="flex-1">
						<Search
							placeholder="Buscar factura..."
							handleSearch={handleOnSearch}
						/>
					</div>
					<FormControl
						className="w-32 lg:w-48"
						sx={{ backgroundColor: "white" }}
						size="small"
					>
						<InputLabel id="org-label">Empresa</InputLabel>
						<Select
							labelId="org-label"
							id="org"
							value={filterOrgId}
							label="Empresa"
							onChange={handleOrgChange}
						>
							{orgsList.map((org: any, index: any) => (
								<MenuItem
									value={org.id}
									key={index}
								>{`${org.rif} - ${org.name}`}</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl
						className="w-32 lg:w-48"
						sx={{ backgroundColor: "white" }}
						size="small"
					>
						<InputLabel id="status-label">Estatus</InputLabel>
						<Select
							labelId="status-label"
							id="status"
							value={filterStatusId}
							label="Estatus"
							onChange={handleStatusChange}
						>
							{statusList.map((status: any, index: any) => (
								<MenuItem value={status.id} key={index}>
									{status.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>

			{/* Versión móvil de filtros */}
			<div className="md:hidden mb-4 space-y-3">
				<div className="flex items-center justify-start">
					<h1 className="text-left font-extrabold text-3xl mb-2">
						{"Facturación"}
					</h1>
				</div>

				<div className="w-full">
					<Search
						placeholder="Buscar factura..."
						handleSearch={handleOnSearch}
					/>
				</div>
				<div className="w-full">
					<FormControl
						className="w-full"
						sx={{ backgroundColor: "white" }}
						size="small"
					>
						<InputLabel id="org-mobile-label">Empresa</InputLabel>
						<Select
							labelId="org-mobile-label"
							id="org-mobile"
							value={filterOrgId}
							label="Empresa"
							onChange={handleOrgChange}
						>
							{orgsList.map((org: any, index: any) => (
								<MenuItem
									value={org.id}
									key={index}
								>{`${org.rif} - ${org.name}`}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<div className="w-full">
					<FormControl
						className="w-full"
						sx={{ backgroundColor: "white" }}
						size="small"
					>
						<InputLabel id="status-mobile-label">
							Estatus
						</InputLabel>
						<Select
							labelId="status-mobile-label"
							id="status-mobile"
							value={filterStatusId}
							label="Estatus"
							onChange={handleStatusChange}
						>
							{statusList.map((status: any, index: any) => (
								<MenuItem value={status.id} key={index}>
									{status.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</div>

			<DataTable
				columns={columnNames}
				rows={invoicesResponse ? invoicesResponse.invoices : []}
				ariaLabel="Tabla de Compras y Gastos"
				renderRow={(
					invoice: Invoice,
					_index: number,
					colWidths: number[],
				) => (
					<>
						<TableBodyCell cellType="data" colWidth={colWidths[0]}>
							{`#${invoice.id}`}
						</TableBodyCell>
						<TableBodyCell
							cellType="data"
							colWidth={colWidths[1]}
							style={{
								minWidth: "200px",
							}}
						>
							{getOrgById(invoice.organization_id)}
						</TableBodyCell>
						<TableBodyCell cellType="data" colWidth={colWidths[2]}>
							{invoice.ref ?? "-"}
						</TableBodyCell>
						<TableBodyCell cellType="data" colWidth={colWidths[3]}>
							{invoice.amount_usd}
						</TableBodyCell>
						<TableBodyCell cellType="data" colWidth={colWidths[4]}>
							{invoice.amount_ves}
						</TableBodyCell>
						<TableBodyCell cellType="data" colWidth={colWidths[5]}>
							{invoice.rate_bcv}
						</TableBodyCell>
						<TableBodyCell
							cellType="data"
							colWidth={colWidths[6]}
							style={{
								backgroundColor:
									invoice.is_partial == 1
										? "mediumseagreen"
										: "lightcoral",
								color: "white",
								fontWeight: "bold",
								borderRadius: "30px",
								width: "30px",
							}}
						>
							{invoice.is_partial == 1 ? "Si" : "No"}
						</TableBodyCell>

						<TableBodyCell
							cellType="service"
							colWidth={colWidths[7]}
						>
							<RowActions invoice={invoice} />
						</TableBodyCell>

						<TableBodyCell
							cellType="data"
							colWidth={colWidths[8]}
							style={{
								backgroundColor:
									invoice.status_id == "rejected"
										? "red"
										: invoice.status_id == "success"
											? "green"
											: invoice.status_id == "processing"
												? "darkolivegreen"
												: invoice.status_id == "pending"
													? "orange"
													: "",
								color: "white",
								fontWeight: "bold",
								borderRadius: "30px",
								minWidth:
									invoice.status_id == "rejected" ||
									invoice.status_id == "pending"
										? "90px"
										: invoice.status_id == "success" ||
											  invoice.status_id == "processing"
											? "100px"
											: "",
							}}
						>
							{getStatusById(invoice.status_id)}
						</TableBodyCell>
						<TableBodyCell cellType="data" colWidth={colWidths[9]}>
							{invoice.payment_date
								? invoice.payment_date.toLocaleString()
								: "-"}
						</TableBodyCell>
						<TableBodyCell cellType="data" colWidth={colWidths[10]}>
							{invoice.payment_due_date
								? invoice.payment_due_date.toLocaleString()
								: "-"}
						</TableBodyCell>
					</>
				)}
			/>

			<DataTablePagination
				onPageChange={handleChangePage}
				rowsPerPageOptions={[5, 25, 50]}
				rowsPerPage={numberResults}
				labelRowsPerPage=""
				onRowsPerPageChange={handleChangeRowsPerPage}
				count={invoicesResponse ? invoicesResponse.total_count : 0}
				page={pageNumber}
			/>

			<div className="absolute bottom-4 left-5">
				{operation && (
					<AppModal
						invoice={invoiceSelected}
						modalViewContent="Invoices"
						operation={operation}
						isOpen={openModal}
						setIsOpen={setOpenModal}
						onSuccess={() => {
							getInvoices();
							setOpenModal(false);
						}}
					/>
				)}
			</div>
		</div>
	);
}
