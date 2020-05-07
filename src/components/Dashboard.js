import React from "react";
import Grid from "@material-ui/core/Grid";
import { Switch, Route } from "react-router-dom";
import ListRecipes from "./Recepies/ListRecipes/ListRecipes";
import ShowRecipe from "./Recepies/ShowRecipe/ShowRecipe";


const Dashboard = () => {

    return (
        <>
            <Route>
                <Switch>
                    <Route path={'/recipes/:recipe'} exact render={(propsRouter) => (
                            <ShowRecipe {...propsRouter}/>
                    )}
                    />

                    <Route path={'/'} exact render={(propsRouter) => (
                        <Grid container spacing={3} justify="center" alignItems="stretch">
                            <ListRecipes />
                        </Grid>
                    )
                    }/>
                </Switch>
            </Route>
        </>
    )
};

export default Dashboard;