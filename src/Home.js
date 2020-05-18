import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
export default function Home(){

    const useStyles = makeStyles((theme)=>({
        button:{
            textDecoration: "none",
            margin: 10,
        },
    }));

    const classes = useStyles();

    return(
        <div>
            <Link className={classes.button} to='/curriculo1'>
                <Button color="primary" variant="outlined">Curriculo com Foto</Button>
            </Link>
            <Button color="primary" variant="outlined">Curriculo sem Foto</Button>
        </div>
    );
}