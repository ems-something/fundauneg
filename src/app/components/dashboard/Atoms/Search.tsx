"use client";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useState, FunctionComponent } from "react";

import SearchIcon from "@mui/icons-material/Search";

type Props = {
	placeholder: string;
	handleSearch: (data: any) => void;
};

const Search: FunctionComponent<Props> = ({ placeholder, handleSearch }) => {
	const [showClearIcon, setShowClearIcon] = useState("none");

	return (
		<div className="rounded-[10px] relative flex flex-1 flex-shrink-0">
			<FormControl
				fullWidth
				className="w-full rounded-md !bg-white text-sm placeholder:text-gray-500"
			>
				<TextField
					placeholder={placeholder}
					onChange={handleSearch}
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						},
					}}
				/>
			</FormControl>
		</div>
	);
};

export default Search;
