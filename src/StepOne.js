import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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

}));

export default function StepOne() {


    const [img, setImg] = useState();
    const [imgData, setImgData] = useState('');
    const [nome, setNome] = useState(localStorage.getItem('@curriculo-profile/nome') || '');
    const [end, setEnd] = useState(localStorage.getItem('@curriculo-profile/end') || '');
    const [cidade, setCidade] = useState(localStorage.getItem('@curriculo-profile/cidade') || '');
    const [estado, setEstado] = useState(localStorage.getItem('@curriculo-profile/estado') || '');
    const [celular, setCelular] = useState(localStorage.getItem('@curriculo-profile/celular') || '');
    const [email, setEmail] = useState(localStorage.getItem('@curriculo-profile/email') || '');


    const filesSelectedHandle = async event =>{
        await setImg(event.target.files[0]);
    }

    const fileUploadHandler = async event =>{
        event.preventDefault();
        if(!img)
        {
            alert("Você precisa CARREGAR uma foto");
            return;
        }else {
            const reader = new FileReader();
            await reader.readAsDataURL(img);
            reader.onload = () => {
                setImgData(reader.result);
            }
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

            window.location.pathname = "/curriculo2";
        }else
        {
            const { imgData, nome, end, cidade, estado, celular, email } = validaTudo;
            const campos = [imgData, nome, end, cidade, estado, celular, email];
            campos.forEach((campo) =>{
                if (campo.isInvalid){
                    alert(campo.menssagem);
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
                <Button variant='outlined' onClick={fileUploadHandler}>Enviar</Button>
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
                    <TextField
                    id="standard-basic"
                    label="Cidade"
                    name="cidade"
                    className={classes.margin}
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    />

                    <TextField
                    id="standard-basic"
                    label="Estado"
                    name="estado"
                    className={classes.margin}
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                    />
                    </div>

                    <div>
                    <TextField
                    id="standard-basic"
                    label="Celular"
                    name="celular"
                    className={classes.margin}
                    value={celular}
                    onChange={e => setCelular(e.target.value)}
                    />

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

                {/*<Button onClick={()=>{localStorage.clear()}}>ZERAR STORAGE</Button>*/}



            </form>
            </Grid>
        </div>
    );
}