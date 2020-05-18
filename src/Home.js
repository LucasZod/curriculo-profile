import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
export default function Home(){

    const useStyles = makeStyles((theme)=>({
        button:{
            margin: 10,
        },
        link:{
            textDecoration: "none",
        },
    }));

    const classes = useStyles();

    return(
        <div>
            <div className={classes.button}>
            <Link className={classes.link} to='/curriculo1'>
                <Button color="primary" variant="outlined">Curriculo com Foto</Button>
            </Link>
            </div>

            <div className={classes.button}>
            <Link className={classes.link} to='/'>
            <Button color="primary" variant="outlined">Curriculo sem Foto</Button>
            </Link>
            </div>
        </div>
    );
}