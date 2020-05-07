import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";
import {resetIngredients} from "../redux/reducers/NewRecipeSlice";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        textDecoration: "none",
        color: 'inherit'
    },
}));

const activeStyle = { color: "#F15B2A" };

export const Header = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <>
            <Toolbar className={classes.toolbar} >
                <Button component={NavLink} className={classes.toolbarLink} onClick={() => dispatch(resetIngredients())} to="/" activeStyle={activeStyle} exact size="small">
                    Recipes
                </Button>

                <Button component={NavLink} size="small" className={classes.toolbarLink} onClick={() => dispatch(resetIngredients())} to="/addRecipe" activeStyle={activeStyle}>
                    Add Recipe
                </Button>

                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    FOOD RECIPES
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>

            </Toolbar>
            <Toolbar variant="dense" className={classes.toolbarSecondary}>

            </Toolbar>
        </>
    );
};

export default Header;