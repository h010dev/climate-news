import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FreeSoloCreateOption from "./SearchBar";

const Navbar = ({ countries }) => {
	// Handles updating state when something is typed in the search bar
	const [country, setCountry] = useState("");

	// // Handles on enter
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("COUNRY: ", country);
	// };

	// const handleChange = (e) => {
	// 	e.preventDefault();
	// 	setCountry(e.target.value);
	// };

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" style={{ background: "#219fff" }}>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						<u>Climate News</u>
					</Typography>

					<FreeSoloCreateOption countries={countries} />
					
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
