import validator from "validator/es";

const validacoesKeys = [
    {
        campo: 'imgData',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'É preciso ENVIAR a Foto'
    },
    {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um nome'
    },
    {
        campo: 'end',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um Endereço'
    },
    {
        campo: 'cidade',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com uma Cidade'
    },
    {
        campo: 'estado',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um Estado'
    },
    {
        campo: 'celular',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um Celular'
    },
    {
        campo: 'email',
        metodo: 'isEmail',
        validoQuando: true,
        mensagem: 'Entre com um E-mail valido'
    },
    // {
    //     campo: 'resumo',
    //     metodo: 'isEmpty',
    //     validoQuando: false,
    //     mensagem: 'Entre com um Resumo'
    // },
    // {
    //     campo: 'historico',
    //     metodo: 'isEmpty',
    //     validoQuando: false,
    //     mensagem: 'Entre com um Historico'
    // },

]

export default function Validacao(data, props) {


    const result = props.map((prop)=>{
        return validacoesKeys.filter((valid)=>{
            return valid.campo === prop;
        })
    })

   const array = result.map((resultado)=>{
            return [].concat(resultado);
    })

    console.log(array)

    const verification = valido();

    validacoesKeys.forEach((dados)=>{

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
