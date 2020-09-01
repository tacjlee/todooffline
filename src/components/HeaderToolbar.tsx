import React from "react";
import { AppBar, IconButton, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { RootState } from "../store";
import { connect } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";


const mapStateToProps = (state: RootState) => ({
  todolist: state.todoList,
});

const mapDispatchToProps = {  };
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedHeaderToolbar: React.FC<Props> = ({
  todolist
}) => {
    const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(true);
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
    };
    
    return (
        <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                className={classes.navIconHide}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                color="inherit"
                noWrap={isMobile}
            >
                Todo List
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

export const HeaderToolbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedHeaderToolbar);
