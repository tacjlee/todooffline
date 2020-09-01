import { Badge, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import HomeIcon from "@material-ui/icons/Home";
import SyncIcon from "@material-ui/icons/Sync";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { history } from "../configureStore";
import { Todo } from "../store/todolist/types";


export function MainMenu(props: { todoList: Todo[] }) {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.drawerHeader} />
			<Divider />
			<List>
				<ListItem button onClick={() => history.push("/")}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button onClick={() => history.push("/todo")}>
					<ListItemIcon>
						<TodoIcon todoList={props.todoList} />
					</ListItemIcon>
					<ListItemText primary="Todo" />
				</ListItem>
			</List>
			<List>
				<ListItem button onClick={() => history.push("/synctodo")}>
					<ListItemIcon>
						<SyncTodoIcon/>
					</ListItemIcon>
					<ListItemText primary="Sync Todo" />
				</ListItem>
			</List>
		</div>
	);
}

function TodoIcon(props: { todoList: Todo[] }) {
	const uncompletedTodos = props.todoList.filter(t => t.deleted === false);
	if (uncompletedTodos.length > 0) {
		return (
			<Badge color="secondary" badgeContent={uncompletedTodos.length}>
				<FormatListNumberedIcon />
			</Badge>
		);
	} else {
		return <FormatListNumberedIcon />;
	}
}

function SyncTodoIcon() {
	return <SyncIcon/>
}


const drawerWidth = 270;
const useStyles = makeStyles((theme: Theme) => ({
	
	drawerHeader: { ...theme.mixins.toolbar },
	drawerPaper: {
		width: 280,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			position: "relative",
			height: "100%",
		},
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
	},
}));
