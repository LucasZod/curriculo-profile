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
        width: 500,
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
    }
}));

export default function StepThree() {

    const loremIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

    const [inf, setInf] = useState('Formação, Cursos, Etc..');
    const [comp, setComp] = useState(loremIpsum);


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
            <form noValidate autoComplete="off">

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

                    <div>
                <Link to="/curriculo2" className={classes.link}>
                <Button className={classes.button} variant="contained" color="primary">ANTERIOR</Button>
                </Link>
                <Button className={classes.button} onClick={gerarCurriculo} variant="contained" color="primary">GERAR CURRÍCULO</Button>
                    </div>
            </form>

            </Grid>
        </div>
    );
}