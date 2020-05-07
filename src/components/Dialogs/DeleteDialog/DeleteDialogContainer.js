import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from "@material-ui/core/DialogContentText";
import {Link} from "react-router-dom";

const DeleteDialogContainer = (props) => {
    return (
        <div>
            <Dialog
                open={props.openDeleteDialog}
                onClose={props.handleCloseDeleteDialog}
            >
                <DialogTitle>{'Delete Recipe'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this recipe?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleCloseDeleteDialog} color="primary">
                        Cancel
                    </Button>
                    <Button
                        component={Link}
                        to={`/`}
                        color="secondary"
                        variant="contained"
                        autoFocus
                        onClick={() => {
                            props.handleCloseDeleteDialog();
                            props.handleDelete(props.selectedRecipe);
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteDialogContainer;