// import React from "react";
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import { useState } from 'react';
// import Validacao from "./Validator";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
//
// const useStyles = makeStyles((theme) => ({
//     margin: {
//         margin: theme.spacing(1),
//         width: 350,
//     },
//     button: {
//         margin: theme.spacing(1),
//     },
//     link: {
//         textDecoration: "none",
//     },
//     label: {
//         fontSize: 13,
//         color: "lightslategray",
//         fontFamily: "sans-serif",
//     },
// }));
//
// export default function StepTwo() {
//
//     const page = localStorage.getItem('@curriculo-profile/nome');
//     if (!page){
//         window.location.pathname = '/curriculo1';
//     }
//
//     //SNACKBAR
//     function Alert(props) {
//         return <MuiAlert elevation={6} variant="filled" {...props} />;
//     }
//     const [open, setOpen] = React.useState(false);
//
//     const handleClick = () => {
//         setOpen(true);
//     };
//
//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }
//         setOpen(false);
//     };
//     //SNACKBAR
//
//     const [snack, setSnack] = useState('');
//     const [type, setType] = useState('');
//     const [resumo, setResumo] = useState(localStorage.getItem('@curriculo-profile/resumo') || []);
//     const [historico, setHistorico] = useState(localStorage.getItem('@curriculo-profile/historico') || '');
//     const [campo, setCampo] = useState({input:[]});
//
//
//     function impedirNovaLinha(e) {
//         const element = e.target;
//         const dados = element.value;
//         const name = element.name;
//         var linhas = dados.split('\n');
//
//         if (name === 'resumo'){
//             if (linhas.length > 10){
//                 setSnack('Máximo de linhas de Resumo atingido!');
//                 setType('info');
//                 handleClick();
//                 e.preventDefault();
//             }
//             if (dados.length > 700){
//                 setSnack('A quantidade de caracteres para Resumo deve ser menor que 700!');
//                 setType('info');
//                 handleClick();
//                 setResumo(resumo.substring(-1, 700));
//             }
//         }
//         if (name === 'historico'){
//             if (linhas.length > 14){
//                 setSnack('Máximo de linhas de historico atingido!');
//                 setType('info');
//                 handleClick();
//                 e.preventDefault();
//             }
//             if (dados.length > 1000){
//                 setSnack('A quantidade de caracteres para Historico deve ser menor que 1000!');
//                 setType('info');
//                 handleClick();
//                 setHistorico(historico.substring(-1, 1000));
//             }
//         }
//     }
//
//     const DadosValidator = {
//         resumo, historico
//     }
//
//     const addStorage2 = () =>{
//
//         const props = ['resumo', 'historico'];
//
//         const validacao = Validacao(DadosValidator, props);
//
//         if (validacao.IsValid) {
//
//             localStorage.setItem('@curriculo-profile/resumo', resumo);
//             localStorage.setItem('@curriculo-profile/historico', historico);
//
//             window.location.pathname = "/curriculo3";
//
//         }else{
//             const { resumo, historico } = validacao;
//             const campos = [ resumo, historico ];
//             campos.forEach((campos)=>{
//                 if (campos.isInvalid){
//                     setSnack(campos.menssagem)
//                     setType('error');
//                     handleClick();
//                 }
//             })
//         }
//     }
//
//     function handlerAdd() {
//         setCampo({input: [...campo.input, ""]})
//     }
//
//     function handlerChange(e, index) {
//         let fields = campo.input;
//
//         fields[index] = e.target.value;
//
//         setCampo({input: fields});
//
//         var resumao = fields.reduce((acumulador, numero)=>{
//             return acumulador += numero;
//         },[])
//
//         console.log(resumao);
//     }
//
//     const classes = useStyles();
//     return(
//         <div>
//             <Grid className="Informações Profissionais"
//                   container
//                   direction="column"
//                   justify="space-between"
//                   alignItems="stretch"
//             >
//                 <div>
//                     <form noValidate autoComplete="off">
//
//                         <div>
//
//                             <label className={classes.label}>Linhas Restantes: {11 - resumo.split('\n').length} </label>
//                             <div>
//                                 {
//                                     campo.input.map((field, index)=>(
//                                         <div key={index}>
//                                             <TextField
//                                                 name="resumo"
//                                                 label="Resumo Profissional"
//                                                 id="standard-multiline-static"
//                                                 multiline
//                                                 rows="9"
//                                                 className={classes.margin}
//                                                 value={field}
//                                                 onChange={e => handlerChange(e, index)}
//                                                 onKeyPress={impedirNovaLinha}
//                                                 onPaste={e => e.preventDefault()}
//                                             />
//
//                                         </div>
//                                     ))
//                                 }
//                                 <Button onClick={()=>handlerAdd()}>Add</Button>
//
//
//                             </div>
//
//                             <label className={classes.label}>Linhas Restantes: {15 - historico.split('\n').length} </label>
//                             <div>
//                                 <TextField
//                                     name="historico"
//                                     label="Histórico Profissional"
//                                     id="standard-multiline-static"
//                                     multiline
//                                     rows="9"
//                                     className={classes.margin}
//                                     value={historico}
//                                     onChange={e => setHistorico(e.target.value)}
//                                     onKeyPress={impedirNovaLinha}
//                                     onPaste={e => e.preventDefault()}
//                                 />
//                             </div>
//
//                         </div>
//
//                         <div>
//                             <Link to='/curriculo1' className={classes.link}>
//                                 <Button className={classes.button} variant="contained" color="primary">ANTERIOR</Button>
//                             </Link>
//
//                             <Button onClick={addStorage2} className={classes.button} variant="contained" color="primary">PRÓXIMO</Button>
//                         </div>
//
//                     </form>
//                 </div>
//             </Grid>
//             {/*SNACKBAR*/}
//             <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity={type}>
//                     {snack}
//                 </Alert>
//             </Snackbar>
//             {/*SNACKBAR*/}
//         </div>
//     );
// }