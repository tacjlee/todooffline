import { Grid, Typography , Link} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { SyncTodoTable } from "../components";


export function SyncTodoPage() {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			<Grid item xs={6}>
				<Typography variant="h4" gutterBottom>
					Synchronized Todo To MockAPI
				</Typography>
			</Grid>
			<Grid item xs={6}>
			</Grid>
			<Grid item xs={12}>
				<SyncTodoTable />
			</Grid>
			
			<span className={classes.marginRight5}>From MockAPI: </span>
			<Link href="https://mockapi.io/projects/5f4dba46eeec51001608ee65" className={classes.linkColor}>
				https://mockapi.io/projects/5f4dba46eeec51001608ee65 
  			</Link>
			
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

	linkColor:{
		color: "blue"
	},

	marginRight5:{
		marginRight: 5
	}

}));
