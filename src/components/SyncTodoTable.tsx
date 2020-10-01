// prettier-ignore
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { todosRef } from "../firebase";

//https://dev.to/gsto/new-redux-hooks-a-before-and-after-comparison-are-they-better-loj
//https://topdev.vn/blog/lam-sao-de-fetch-du-lieu-bang-react-hook/


export function SyncTodoTable() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [todos, setTodos] = useState<any>([]);
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
			setTodos(newState)
		  });
	},[]);

	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell style={{width: '20%'}} padding="default">Todo Id</TableCell>
						<TableCell style={{width: '50%'}} padding="default">Text</TableCell>
						<TableCell style={{width: '10%'}} padding="default">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todos.map((item: any) => {
						return (
							<TableRow
								key={item.id}
								hover
							>
								<TableCell >{item.id}</TableCell>
								<TableCell >{item.text}</TableCell>
								<TableCell padding="none">{item.status}</TableCell>
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
