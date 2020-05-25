import React from "react";
import Get from "./GetItems";
import Validacao from "./Validator";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useState } from 'react';
import {Link} from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";


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
    label: {
        fontSize: 13,
        color: "lightslategray",
        fontFamily: "sans-serif",
    }
}));

export default function StepThree() {

    const page = localStorage.getItem('@curriculo-profile/resumo');
    if (!page){
        window.location.pathname = '/curriculo2';
    }

    //SNACKBAR
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    //SNACKBAR

    const [snack, setSnack] = useState('');
    const [type, setType] = useState('');
    const [inf, setInf] = useState(localStorage.getItem('@curriculo-profile/inf') || '');
    const [comp, setComp] = useState(localStorage.getItem('@curriculo-profile/comp') || '');

    function impedirNovaLinha(e) {
        const element = e.target;
        const dados = element.value;
        const name = element.name;
        var linhas = dados.split('\n');

        if (name === 'inf'){
            if (linhas.length > 5){
                setSnack('Máximo de linhas de informações atingido!')
                setType('info');
                handleClick();
                e.preventDefault();
            }
            if (dados.length > 350){
                setSnack('A quantidade de caracteres para Informações Pessoais deve ser menor que 350!');
                setType('info');
                handleClick();
                setInf(inf.substring(-1, 350));
            }
        }
        if (name === 'comp'){
            if (linhas.length > 14){
                setSnack('Máximo de linhas de competencia atingido!')
                setType('info');
                handleClick();
                e.preventDefault();
            }
            if (dados.length > 1000){
                setSnack('A quantidade de caracteres para Competências deve ser menor que 1000!');
                setType('info');
                handleClick();
                setComp(comp.substring(-1, 1000));
            }
        }
    }


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
                    setSnack(campos.menssagem)
                    setType('error');
                    handleClick();
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
                        <label className={classes.label}>Linhas Restantes: {6 - inf.split('\n').length}
                        </label>
                        <div>
                    <TextField
                        name="inf"
                        label="Informações Pessoais"
                        id="standard-multiline-static"
                        className={classes.margin}
                        value={inf}
                        onChange={e => setInf(e.target.value)}
                        fullWidth
                        multiline
                        rows="6"
                        onKeyPress={impedirNovaLinha}
                        onPaste={e => e.preventDefault()}
                    />
                        </div>

                        <label className={classes.label}>Linhas Restantes: {15 - comp.split('\n').length}
                        </label>
                        <div>
                    <TextField
                        name="comp"
                        label="Competências"
                        id="standard-multiline-static"
                        multiline
                        rows="9"
                        className={classes.margin}
                        value={comp}
                        onChange={e => setComp(e.target.value)}
                        fullWidth
                        onKeyPress={impedirNovaLinha}
                        onPaste={e => e.preventDefault()}
                    />
                        </div>

                    </div>

                    <div>
                        <Link to="/curriculo2" className={classes.link}>
                <Button className={classes.button} variant="contained" color="primary">ANTERIOR</Button>
                        </Link>

                <Button className={classes.button} onClick={gerarCurriculo} variant="contained" color="primary">GERAR CURRÍCULO</Button>



                    </div>
            </form>
                </div>
            </Grid>

            {/*SNACKBAR*/}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type}>
                    {snack}
                </Alert>
            </Snackbar>
            {/*SNACKBAR*/}
        </div>
    );
}