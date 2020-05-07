import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Button, CardMedia} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import {getTime} from "../../../helpers";
import LinkMUI from "@material-ui/core/Link";

const ShowRecipeContainer = (props) => {

    return (
        <div>
            {props.recipes.map((recipe, index) => index == props.selectedRecipe && (
                <Grid container justify="center" alignItems="stretch">
                    <Grid item key={index} component={Card} className={props.classes2.card}>
                        <CardMedia
                            className={props.classes2.media}
                            image={'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg'}
                        />
                        <Grid container xs component={CardContent} justify="space-between" direction='row'
                              className={props.classes.content}>

                            <Grid item xs={6}>
                                <Typography variant="h4" component="h2">
                                    {recipe.name && recipe.name}
                                </Typography>

                                {recipe.source && (
                                    <Typography component={LinkMUI} href={recipe.source} gutterBottom >
                                            {recipe.source}
                                    </Typography>
                                )}

                                <Typography variant={'h6'}>Ingredients:</Typography>
                                <Typography gutterBottom>
                                    {recipe.ingredients && recipe.ingredients.map((item, index) => (
                                            recipe.ingredients.length !== index + 1 ?
                                                `${item.ingredient} ${item.quantity}, `
                                                :
                                                `${item.ingredient} ${item.quantity}`
                                        )
                                    )}
                                </Typography>

                                <Typography variant={'h6'}>Time to prepare:</Typography>
                                <Typography gutterBottom>
                                    {recipe.time && getTime(recipe.time)}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant={'h6'}>Preparation instructions:</Typography>
                                <Typography gutterBottom>
                                    {recipe.instructions && recipe.instructions}
                                </Typography>
                            </Grid>
                        </Grid>
                        <CardActions style={{justifyContent: 'space-between'}}>
                            <Button color="secondary" variant="contained"
                                    onClick={() => {
                                        console.log(props);
                                        props.handleToggleDeleteDialogStatus();
                                    }}
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            ))
            }
        </div>
    );
};

export default ShowRecipeContainer;
