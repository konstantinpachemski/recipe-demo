import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIngredientDialog from "../../../Dialogs/AddIngredientDialog/AddIngredientDialog";
import Button from "@material-ui/core/Button";

const IngredientsTableContainer = (props) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow selected>
                            <TableCell>Ingredient</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">
                                <AddIngredientDialog/>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.ingredientsBucket.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {row.ingredient}
                                </TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="right">
                                    <Button>
                                        <DeleteIcon  onClick={(e) => props.handleDelete(i)} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default IngredientsTableContainer;