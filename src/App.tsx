// prettier-ignore
import { Drawer as DrawerMui } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Router } from "react-router-dom";
import { history } from "./configureStore";
import { HomePage, TodoPage, SyncTodoPage } from "./pages";
import { RootState } from "./store/index";
import { withRoot } from "./withRoot";

import {HeaderToolbar} from './components/HeaderToolbar';
import {MainMenu} from './components/MainMenu';

function Routes() {
	const classes = useStyles();
	return (
		<div className={classes.content}>
			<Route exact={true} path="/" component={HomePage} />
			<Route exact={true} path="/home" component={HomePage} />
			<Route exact={true} path="/todo" component={TodoPage} />
			<Route exact={true} path="/synctodo" component={SyncTodoPage} />
		</div>
	);
}

function App() {
	const classes = useStyles();
	const todoList = useSelector((state: RootState) => state.todoList);

	return (
		<Router history={history}>
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<HeaderToolbar></HeaderToolbar>
					<DrawerMui
						variant="permanent"
						open
						classes={{
							paper: classes.drawerPaper,
						}}
					>
						<MainMenu todoList={todoList} />
					</DrawerMui>
					<Routes />
				</div>
			</div>
		</Router>
	);
}

const drawerWidth = 270;
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
	},
	
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

export default withRoot(App);
