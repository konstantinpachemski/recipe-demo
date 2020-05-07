import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import AddRecipe from "./components/Recepies/AddRecipe/AddRecipe";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path="/addRecipe" component={AddRecipe} />
            <Route path="/" component={Dashboard} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
