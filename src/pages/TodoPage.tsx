import { Button, Grid, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import * as React from "react";
import { TodoDialog, TodoTable } from "../components";
import TodoSyncService from "../services/TodoSyncService";
import { RootState } from "../store";


export function TodoPage() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const syncService = new TodoSyncService();
	const todoList = useSelector((state: RootState) => state.todoList);

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddTodo = () => {
		setOpen(true);
	};

	const handleSyncTodo = () => {
		syncService.initializeInternetStatusListener();
		syncService.sendDataOnline();
	};
	return (
		<Grid container className={classes.root}>
			<TodoDialog open={open} onClose={handleClose} />
			<Grid item xs={6}>
				<Typography variant="h4" gutterBottom>
					Todo List
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<div className={classes.buttonContainer}>
					<Button
						className={classes.testButton}
						variant="contained"
						color="primary"
						onClick={handleSyncTodo}
					>
						Test Sync Todo
					</Button>

					<Button
						className={classes.button}
						variant="contained"
						color="secondary"
						onClick={handleAddTodo}
					>
						Add Todo
					</Button>

				</div>
			</Grid>
			<Grid item xs={12}>
				<TodoTable />
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: 20,
		[theme.breakpoints.down("md")]: {
			paddingTop: 50,
			paddingLeft: 15,
			paddingRight: 15,
		},
	},

	buttonContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
	},

	button: {
		marginBottom: 15,
	},

	testButton:{
		marginRight: 10,
		marginBottom: 15
	}

}));
