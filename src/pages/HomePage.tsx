import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import {RootState} from "../store";

export function HomePage() {
	const classes = useStyles();
	const todoList = useSelector((state: RootState) => state.todoList);

	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				Home Page
			</Typography>
			<Typography variant="h6" gutterBottom>
				You have {todoList.length} TODOs in your list!
			</Typography>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		height: "100%",
		textAlign: "center",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
	},

	centerContainer: {
		flex: 1,
		height: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},

	button: {
		marginTop: 20,
	},
});
