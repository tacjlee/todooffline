// prettier-ignore
import { Tooltip, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CancelIcon from "@material-ui/icons/Cancel";

import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import React, {useEffect, useState} from "react";
import { useActions } from "../hooks";
import {RootState} from "../store";

import * as TodoActions from "../store/todolist/action";

import { Todo } from "../store/todolist/types";
import { todosRef } from "../firebase";


export function TodoTable() {
	const classes = useStyles();
	const todoList = useSelector((state: RootState) => state.todoReducer.todoList);
	const todoActions = useActions(TodoActions);
	
	const [todos, setTodoList] = useState<any>([]);
	useEffect(()=>{
		todosRef.on('value', (snapshot) => {
			let items = snapshot.val();
			let newState = [];
			for (let item in items) {
			  newState.push({
				id: item,
				text: items[item].text,
				status: items[item].status
			  });
			}
			//setTodoList(newState)
			todoActions.setTodos(newState);
		  });
	},[]);


	const onRowClick = (todo: Todo) => {
		//Put your code here
	};

	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell style={{width: '20%'}} padding="default">Id</TableCell>
						<TableCell style={{width: '40%'}} padding="default">Text</TableCell>
						<TableCell style={{width: '20%'}} padding="default">Status</TableCell>
						<TableCell style={{width: '20%'}} padding="default">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todoList.map((item: Todo) => {
						return (
							<TableRow
								key={item.id}
								hover
								onClick={event => onRowClick(item)}
							>
								<TableCell >{item.id}</TableCell>
								<TableCell >{item.text}</TableCell>
								<TableCell padding="none">{item.status}</TableCell>
								<TableCell padding="none">
									{ item.status==='Todo' ?
										<span>
											<Tooltip title="Start" arrow>
												<Button
													className={classes.marginRight8}
													aria-label="Start"
													color="primary"
													variant="outlined"
													onClick={() =>
														todoActions.startTodo(item.id)
													}
												>
													<PlayArrowIcon />
												</Button>
											</Tooltip>
											<Tooltip title="Delete" arrow>
												<Button
													aria-label="Delete"
													color="secondary"
													variant="outlined"
													onClick={() =>
														todoActions.deleteTodo(item.id)
													}
												>
													<DeleteIcon />
												</Button>	
											</Tooltip>
										</span>
									: null}

									{ item.status==='In-Progress' ?
										<span>
											<Tooltip title="Done" arrow>
												<Button
													className={classes.marginRight8}
													aria-label="Done"
													color="primary"
													variant="outlined"
													onClick={() => todoActions.doneTodo(item.id) }
												>
													<DoneIcon />
												</Button>
											</Tooltip>
											<Tooltip title="Cancel" arrow>
												<Button
													aria-label="Cancel"
													color="default"
													variant="outlined"
													onClick={ () => 
														todoActions.cancelTodo(item.id) 
													}
												>
													<CancelIcon />
												</Button>
											</Tooltip>
										</span>
									 : null}
									 { item.status=== 'Done' || item.status === 'Canceled' ?
										<span>
											<Tooltip title="Delete" arrow>
												<Button
													aria-label="Delete"
													color="secondary"
													variant="outlined"
													// onClick={() =>
													// 	todoActions.deleteTodo(item.id)
													// }
												>
													<DeleteIcon />
												</Button>	
											</Tooltip>
										</span>
									 : null}
									
									
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}

const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
	},
	marginRight8:{
		marginRight: 8
	},
	
});
