// prettier-ignore
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/styles";
import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { Todo } from "../store/todolist/types";
import { RootState} from "../store";
import { loadSyncTodoList} from "../store/synctodo/action";

const mapStateToProps = (state: RootState) => ({
	syncTodoList: state.rootSyncTodo.syncTodoList
});
const mapDispatchToProps: any = {
	loadSyncTodoList, // will be wrapped into a dispatch call automatically
};
type AllProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const UnconnectedSyncTodoTable: React.FC<AllProps> =({ syncTodoList, loadSyncTodoList}) =>{
	const classes = useStyles();
	useEffect(() => {
		loadSyncTodoList();
	}, [])

	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell style={{width: '20%'}} padding="default">Mock Api Id</TableCell>
						<TableCell style={{width: '20%'}} padding="default">Todo Id</TableCell>
						<TableCell style={{width: '50%'}} padding="default">Text</TableCell>
						<TableCell style={{width: '10%'}} padding="default">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{syncTodoList.map((item: Todo) => {
						return (
							<TableRow
								key={item.todoId}
								hover
							>
								<TableCell >{item.id}</TableCell>
								<TableCell >{item.todoId}</TableCell>
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

export const SyncTodoTable = connect( mapStateToProps, mapDispatchToProps)(UnconnectedSyncTodoTable);
