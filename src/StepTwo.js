import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useState } from 'react';
import Validacao from "./Validator";

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
    },
}));

export default function StepTwo() {


    const [resumo, setResumo] = useState(localStorage.getItem('@curriculo-profile/resumo') || '');
    const [historico, setHistorico] = useState(localStorage.getItem('@curriculo-profile/historico') || '');

    const DadosValidator = {
        resumo, historico
    }

    const addStorage2 = () =>{

        const props = ['resumo', 'historico'];

        const validacao = Validacao(DadosValidator, props);

        if (validacao.IsValid) {

            localStorage.setItem('@curriculo-profile/resumo', resumo);
            localStorage.setItem('@curriculo-profile/historico', historico);

            window.location.pathname = "/curriculo3";

        }else{
            const { resumo, historico } = validacao;
            const campos = [ resumo, historico ];
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
                        label="Resumo Profissional"
                        id="standard-multiline-static"
                        multiline
                        rows="9"
                        className={classes.margin}
                        value={resumo}
                        onChange={e => setResumo(e.target.value)}

                    />


                    <TextField
                        label="Histórico Profissional"
                        id="standard-multiline-static"
                        multiline
                        rows="9"
                        className={classes.margin}
                        value={historico}
                        onChange={e => setHistorico(e.target.value)}
                    />
                    </div>

                    <div>
                    <Link to='/curriculo1' className={classes.link}>
                    <Button className={classes.button} variant="contained" color="primary">ANTERIOR</Button>
                    </Link>

                    <Button onClick={addStorage2} className={classes.button} variant="contained" color="primary">PRÓXIMO</Button>
                    </div>

                    </form>
                    </div>
                </Grid>
        </div>
    );
}