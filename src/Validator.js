import validator from "validator/es";

const validacoesKeys = [
    {
        campo: 'imgData',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'É preciso CARREGAR sua foto a Foto!'
    },
    {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um nome!'
    },
    {
        campo: 'end',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um Endereço!'
    },
    {
        campo: 'cidade',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com uma Cidade!'
    },
    {
        campo: 'estado',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um Estado!'
    },
    {
        campo: 'celular',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um Celular!'
    },
    {
        campo: 'email',
        metodo: 'isEmail',
        validoQuando: true,
        mensagem: 'Entre com um E-mail válido!'
    },
    {
        campo: 'resumo',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um Resumo!'
    },
    {
        campo: 'historico',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um Histórico!'
    },
    {
        campo: 'inf',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com uma Informação!'
    },
    {
        campo: 'comp',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com uma Competencia!'
    },
]

export default function Validacao(data, props) {

    const result = validacoesKeys.filter((valid)=>{
        return props.includes(valid.campo)})

    const verification = valido();

    result.forEach((dados)=>{

        const camposValid = data[dados.campo.toString()];
        const metodoValidacao = validator[dados.metodo];

        if (metodoValidacao(camposValid) !== dados.validoQuando){
            verification[dados.campo] = { isInvalid: true, menssagem: dados.mensagem }
            return verification.IsValid = false;
        }
    })

    return verification;
}

function valido() {
    const validaKey = {};

    validacoesKeys.map((dados) =>{
      return validaKey[dados.campo] = { IsInvalid: false, menssagem:'' }
    });
    return {IsValid: true, ...validaKey}
}
