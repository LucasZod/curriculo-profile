import React from "react";
import Home from "./Home";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Header from "./AppBar";
import Info from "./Informacoes";
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
            </Switch>
        </BrowserRouter>
    );
}