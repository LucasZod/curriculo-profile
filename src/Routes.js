import React from "react";
import Home from "./Pages/Home";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";
import Header from "./Pages/AppBar";
import Info from "./Pages/Informacoes";
import AddButton from "./DinamicFields";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes(){

    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/curriculo1' component={StepOne}/>
                <Route path='/curriculo2' component={StepTwo}/>
                <Route path='/curriculo3' component={StepThree}/>
                <Route path='/informacoes' component={Info}/>
                <Route path='/testes' component={AddButton}/>
            </Switch>
        </BrowserRouter>
    );
}