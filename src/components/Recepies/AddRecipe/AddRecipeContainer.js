import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Grid,
    Button,
    TextField,
} from '@material-ui/core';
import {Link} from "react-router-dom";
import IngredientsTable from "./IngredientsTable/IngredientsTable";
import {addRecipeCardStyle, linkStyle} from "../../../styles";

const AddRecipeContainer = (props) => {

    const classesLink = linkStyle();
    const classes = addRecipeCardStyle();

    return (
            <Card className={classes.card}>
                <form>
                    <CardHeader title={'New Recipe'}/>
                    <Divider/>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={6}>
                                <Grid item
                                      md={11}
                                      xs={11}>
                                    <TextField fullWidth margin="dense" variant="outlined" type="text" label="Name"
                                               name="name"
                                               error={!!props.errors.name}
                                               inputRef={props.register({required: true})}/>
                                </Grid>
                                <Grid
                                    item
                                    md={11}
                                    xs={11}
                                >
                                    <TextField fullWidth margin="dense" variant="outlined" type="tel"
                                               name="source"
                                               label='Source'
                                               inputRef={props.register()}/>
                                </Grid>

                                <Grid item
                                      md={6}
                                      xs={6}>
                                    <TextField fullWidth margin="dense" variant="outlined"  label="Preparation Time"
                                               name="time"
                                               type={'time'}
                                               defaultValue="00:00"
                                               error={!!props.errors.time}
                                               inputRef={props.register({required: true})}/>
                                </Grid>
                                <Grid item
                                      md={11}
                                      xs={11}>
                                    <TextField fullWidth margin="dense" variant="outlined" type="text" label="Preparation Instructions"
                                               name="instructions"
                                               multiline
                                               rows={4}
                                               rowsMax={20}
                                               error={!!props.errors.instructions}
                                               inputRef={props.register({required: true})}/>
                                </Grid>
                            </Grid>

                            <Grid item xs={6} md={6}>
                                <IngredientsTable/>
                            </Grid>
                        </Grid>

                    </CardContent>
                    <Divider/>
                    <CardActions style={{display: "flex", justifyContent: 'flex-end'}}>
                        <Button
                            color='secondary'
                            variant='contained'
                        >
                            <Link to={'/'} className={classesLink.link}>
                                Cancel
                            </Link>
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={(e) => {
                                e.preventDefault();
                                props.ingredientsBucket.length > 0 ? props.onSubmit() : alert('Recipe must have at least one ingredient!');
                            }}
                        >
                            Save
                        </Button>
                    </CardActions>
                </form>
            </Card>
    );
};

export default AddRecipeContainer;
