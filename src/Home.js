import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

export default function Home(){

    const useStyles = makeStyles((theme)=>({
        root: {
            textAlign: "",
        },
        button:{
            margin: 10,
        },
        link:{
            textDecoration: "none",

        },
        botao:{
            padding: 50,
        }
    }));

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.button}>
            <Link className={classes.link} to='/curriculo1'>
                <Button className={classes.botao} color="primary" variant="outlined">Gerador de Currículo</Button>
            </Link>
            </div>

        </div>
    );
}