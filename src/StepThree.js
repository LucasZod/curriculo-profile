import React from "react";
import Get from "./GetItems";
import Validacao from "./Validator";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useState } from 'react';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        width: 350,
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
    }
}));

export default function StepThree() {


    const [inf, setInf] = useState(localStorage.getItem('@curriculo-profile/inf') || '');
    const [comp, setComp] = useState(localStorage.getItem('@curriculo-profile/comp') || '');


    const DadosValidator = {
        inf, comp
    }

    const gerarCurriculo = () =>{

        const props = ['inf', 'comp'];

        const validacao = Validacao(DadosValidator, props);

        if (validacao.IsValid)
        {
            localStorage.setItem('@curriculo-profile/inf', inf);
            localStorage.setItem('@curriculo-profile/comp', comp);

            Get();


        }else{
            const { inf, comp } = validacao;
            const campos = [ inf, comp ];
            campos.forEach((campos)=>{
                if (campos.isInvalid){
                    alert(campos.menssagem)
                }
            })
        }

    }


    const classes = useStyles();

    return(

        <div>
            <Grid className="Informações Profissionais"
                  container
                  direction="column"
                  justify="space-between"
                  alignItems="stretch"
            >
                <div>
            <form noValidate autoComplete="off">
                    <div>
                    <TextField
                        label="Informações Pessoais"
                        id="standard-multiline-static"
                        multiline
                        rows="9"
                        className={classes.margin}
                        value={inf}
                        onChange={e => setInf(e.target.value)}
                        fullWidth
                        
                    />
                    <TextField
                        label="Competências"
                        id="standard-multiline-static"
                        multiline
                        rows="9"
                        className={classes.margin}
                        value={comp}
                        onChange={e => setComp(e.target.value)}
                        fullWidth
                    />
                    </div>

                    <div>
                        <Link to="/curriculo2" className={classes.link}>
                <Button className={classes.button} variant="contained" color="primary">ANTERIOR</Button>
                        </Link>

                        <Link to='/curriculo1' className={classes.link}>
                <Button className={classes.button} onClick={gerarCurriculo} variant="contained" color="primary">GERAR CURRÍCULO</Button>
                        </Link>
                    </div>
            </form>
                </div>

            </Grid>
        </div>
    );
}