import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import Validacao from "./Validator";
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        width: 300,
    },
    button: {
            margin: theme.spacing(1),
        },
    input: {
        display: 'none',
    },
    align: {
        alignItems: "center",
    },
    body:{
        backgroundColor: "",
    },
    link:{
        textDecoration: "none",
    },
    label: {
        fontSize: 14,
    }

}));

export default function StepOne() {


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
    
    const estad = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

    const [snack, setSnack] = useState('');
    const [keysnack, setkey] = useState(true);
    const [imgData, setImgData] = useState(localStorage.getItem('@curriculo-profile/imgdata') || '');
    const [nome, setNome] = useState(localStorage.getItem('@curriculo-profile/nome') || '');
    const [end, setEnd] = useState(localStorage.getItem('@curriculo-profile/end') || '');
    const [cidade, setCidade] = useState(localStorage.getItem('@curriculo-profile/cidade') || '');
    const [estado, setEstado] = useState(localStorage.getItem('@curriculo-profile/estado') || '');
    const [celular, setCelular] = useState(localStorage.getItem('@curriculo-profile/celular') || '');
    const [email, setEmail] = useState(localStorage.getItem('@curriculo-profile/email') || '');
    
    function ValidaCel(e) {
        let valorCel = e.target.value;
        if (valorCel.length > 15){
            e.preventDefault();
        }
    }

            function LimparDados() {
            setSnack('Dados LIMPADOS com sucesso!');
            setkey(true);
            handleClick();
            setTimeout(()=>{localStorage.clear();
                window.location.reload();},1500);
            }

    function KeySnack() {
            if (keysnack){
                return 'success'
            }else{
                return 'error'
            }
        }

    const filesSelectedHandle = async event => {
        var file = event.target.files[0];
        const reader = new FileReader();
        await reader.readAsDataURL(file);
        reader.onload = () => {
            setImgData(reader.result);
            setSnack('Foto CARREGADA com sucesso!');
            setkey(true);
            handleClick();
        }
    }



    const DadosValidator = {
        imgData, nome, end, cidade, estado, celular, email
    };


    const addStorage1 = () => {

        const props = ['imgData', 'nome', 'end', 'cidade', 'estado', 'celular', 'email'];

        const validaTudo = Validacao(DadosValidator, props);

        if (validaTudo.IsValid) {
            localStorage.setItem('@curriculo-profile/imgdata', imgData);
            localStorage.setItem('@curriculo-profile/nome', nome);
            localStorage.setItem('@curriculo-profile/end', end);
            localStorage.setItem('@curriculo-profile/cidade', cidade);
            localStorage.setItem('@curriculo-profile/estado', estado);
            localStorage.setItem('@curriculo-profile/celular', celular);
            localStorage.setItem('@curriculo-profile/email', email);


            localStorage.setItem('@curriculo-profile/page', true);

            window.location.pathname = "/curriculo2";
        }else
        {
            const { imgData, nome, end, cidade, estado, celular, email } = validaTudo;
            const campos = [imgData, nome, end, cidade, estado, celular, email];
            campos.forEach((campo) =>{
                if (campo.isInvalid){
                    setSnack(campo.menssagem);
                    setkey(false);
                    handleClick()
                }
            })
        }
    }


    const classes = useStyles();

    return(
        <div>
            <Grid
                className={classes.body}
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >

            <form noValidate autoComplete="off">
                <div>
                <input
                    type="file"
                    className={classes.input}
                    id='contained-button-file'
                    onChange={filesSelectedHandle}
                />
                    <label htmlFor="contained-button-file">
                        <Button className={classes.button} variant="contained" color="primary" component="span">
                            Carregar Sua Foto
                        </Button>
                    </label>
                </div>

                    <div>
                    <TextField
                    id="standard-basic"
                    label="Nome Completo"
                    name="nome"
                    className={classes.margin}
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    />
                    </div>

                    <div>
                    <TextField
                    id="standard-basic"
                    label="Endereço"
                    name="end"
                    className={classes.margin}
                    value={end}
                    onChange={e => setEnd(e.target.value)}
                    />
                    </div>

                    <div>
                    <InputLabel  id="demo-simple-select-label" className={classes.label}>Estado</InputLabel>
                        <Select
                            label="Estado"
                            className={classes.margin}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={estado}
                            onChange={e => setEstado(e.target.value)}
                        >
                            {estad.map((estado)=>(
                                <MenuItem key={estado} value={estado}>{estado}</MenuItem>
                            ))}
                        </Select>
                    </div>

                    <div>
                        <TextField
                            id="standard-basic"
                            label="Cidade"
                            name="cidade"
                            className={classes.margin}
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />
                    </div>

                    <div>
                    <TextField
                    id="standard-basic"
                    placeholder="(DDD) 9 9999-9999"
                    label="Celular"
                    name="celular"
                    className={classes.margin}
                    value={celular}
                    onChange={e => setCelular(e.target.value)}
                    onKeyPress={ValidaCel}
                    />
                    </div>

                    <div>
                    <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    className={classes.margin}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    </div>

                <Link to='/' className={classes.link}>
                    <Button className={classes.button} variant="contained" color="primary">ANTERIOR</Button>
                </Link>

                    <Button className={classes.button} onClick={addStorage1} variant="contained" color="primary">PRÓXIMO</Button>

                <Button variant="outlined" onClick={()=>{LimparDados()}}>Limpar Seus Dados</Button>

            </form>
            </Grid>
            <Snackbar/>

            {/*SNACKBAR*/}
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={KeySnack()}>
                    {snack}
                </Alert>
            </Snackbar>
            {/*SNACKBAR*/}

        </div>

    );
}