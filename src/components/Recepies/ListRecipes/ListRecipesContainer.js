import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Button} from "@material-ui/core";
import {CardMedia} from "@material-ui/core";
import trunc from 'lodash/truncate';
import CardActions from "@material-ui/core/CardActions";
import LinkMUI from "@material-ui/core/Link";
import {Link} from "react-router-dom";
import {getTime} from "../../../helpers";
import {listRecipeCardStyle} from "../../../styles";

const ListRecipesContainer = (props) => {
    const classes = listRecipeCardStyle();
    return (
        <>
            {props.recipes.map((recipe, index) =>
                <Grid container xs sm={3}>
                    <Grid item key={index} component={Card} className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg'}
                        />
                        <CardContent className={classes.content}>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"caption"}
                                gutterBottom
                            >
                                #{index+1}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {recipe.name}
                            </Typography>

                            {recipe.source && (
                                <Typography noWrap gutterBottom>
                                    <LinkMUI href={recipe.source}>
                                        {recipe.source}
                                    </LinkMUI>
                                </Typography>
                            )}
                            <Typography variant={'h6'}>Ingredients:</Typography>
                            <Typography gutterBottom>
                                {recipe.ingredients && recipe.ingredients.map((item, index) => index <= 2 && (
                                        recipe.ingredients.length - 1 === index || index === 2 ?
                                            `${item.ingredient}`
                                            :
                                            `${item.ingredient}, `
                                    )
                                )}
                                {recipe.ingredients.length > 2 && '...'}
                            </Typography>

                            <Typography variant={'h6'}>Preparation instructions:</Typography>
                            <Typography gutterBottom>
                                {recipe.instructions &&
                                    trunc(recipe.instructions, {
                                        length: 50,
                                        separator: ' '
                                    })
                                }
                            </Typography>

                            <Typography variant={'h6'}>Time to prepare:</Typography>
                            <Typography gutterBottom>
                                {recipe.time && getTime(recipe.time)}
                            </Typography>

                        </CardContent>
                        <CardActions style={{justifyContent: 'space-between'}}>
                            <Button color="secondary" variant="contained"
                                    onClick={() => {
                                        props.handleSelectRecipeIndex(index);
                                        props.handleToggleDeleteDialogStatus();
                                    }}
                            >
                                Delete
                            </Button>
                            <Button component={Link} color="primary" variant="contained"
                                    to={`/recipes/${index}`}
                            >
                                Details
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            )
            }
        </>
    )};

export default ListRecipesContainer;