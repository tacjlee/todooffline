// prettier-ignore
import {Button, Dialog, DialogActions, DialogTitle, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useActions } from "../hooks";
import * as TodoActions from "../store/todolist/action";


interface Props {
	open: boolean;
	onClose: () => void;
}

export function TodoDialog(props: Props) {
	const { open, onClose } = props;
	const classes = useStyles();
	const [newTodoText, setNewTodoText] = React.useState("");
	const todoActions = useActions(TodoActions);

	const handleClose = () => {
		if(newTodoText.length >0){
			todoActions.addTodo({
				todoId: Date.now(),
				deleted: false,
				status: 'Todo',
				text: newTodoText,
			});
		}
		
		onClose();
		// reset todo text if user reopens the dialog
		setNewTodoText("");
	};

	const handleChange = (event: any) => {
		setNewTodoText(event.target.value);
	};

	return (
		<Dialog open={open} onClose={handleClose} >
			<DialogTitle>Add a new Todo</DialogTitle>
			<TextField
				id="multiline-flexible"
				multiline
				placeholder="Todo text"
				value={newTodoText}
				onChange={handleChange}
				className={classes.textField}
			/>
			<DialogActions>
				<Button color="primary"
				variant="outlined"
				 onClick={handleClose}
				className={classes.okButton}
				 >
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const useStyles = makeStyles({
	textField: {
		width: "380px",
		margin: "10px 20px",
	},
	okButton:{
		margin: "10px 10px",
		width: "100px"
	}
});
