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
        margin: theme.spacing(3),
        width: 500,
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
    },
}));

export default function StepTwo() {

    const loremIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

    const [resumo, setResumo] = useState(loremIpsum);
    const [historico, setHistorico] = useState(loremIpsum + loremIpsum);

    const DadosValidator = {
        resumo, historico
    }

    const addStorage2 = () =>{

        const validacao = Validacao(DadosValidator);

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
                    <form noValidate autoComplete="off">
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


                    <div>
                    <Link to='/curriculo1' className={classes.link}>
                    <Button className={classes.button} variant="contained" color="primary">ANTERIOR</Button>
                    </Link>

                    <Button onClick={addStorage2} className={classes.button} variant="contained" color="primary">PRÓXIMO</Button>

                    </div>

                    </form>

                </Grid>
        </div>
    );
}