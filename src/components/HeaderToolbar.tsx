import React from "react";
import { AppBar, IconButton, Toolbar, Typography, useMediaQuery, Link } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";


export function HeaderToolbar() {
    const classes = useStyles();
    
    return (
        <AppBar className={classes.appBar}>
        <Toolbar>
            <Typography
                variant="h6"
                color="inherit"
            >
				<Link href="/todo" style={{color: "white", marginRight: '20px'}}>
					Todo List
				</Link>
				<Link href="/synctodo" style={{color: "white"}}>
					Firebase data
				</Link>
            </Typography>
        </Toolbar>
        </AppBar>
    );
};

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
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
	},
	navIconHide: {
		[theme.breakpoints.up("md")]: {
			display: "none",
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
