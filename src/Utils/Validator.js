import validator from "validator/es";

const validacoesKeys = [
    {
        campo: 'imgData',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'É preciso CARREGAR sua Foto!'
    },
    {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com seu nome!'
    },
    {
        campo: 'end',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com seu Endereço!'
    },
    {
        campo: 'cidade',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com sua Cidade!'
    },
    {
        campo: 'estado',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com seu Estado!'
    },
    {
        campo: 'celular',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com seu numero de Celular!'
    },
    {
        campo: 'email',
        metodo: 'isEmail',
        validoQuando: true,
        mensagem: 'Entre com seu E-Mail válido!'
    },
    {
        campo: 'resumo',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com seu Resumo Profissional!'
    },
    {
        campo: 'historico',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com seu Histórico Profissional!'
    },
    {
        campo: 'inf',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com suas Informações Pessoais!'
    },
    {
        campo: 'comp',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com sua Competencia Profissional!'
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
