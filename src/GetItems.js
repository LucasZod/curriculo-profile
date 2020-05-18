import GCCF from "./GCCF";

export default async function Get() {

    const imgData = localStorage.getItem('@curriculo-profile/imgdata');
    const nome = localStorage.getItem('@curriculo-profile/nome');
    const end = localStorage.getItem('@curriculo-profile/end');
    const cidade = localStorage.getItem('@curriculo-profile/cidade');
    const estado = localStorage.getItem('@curriculo-profile/estado');
    const celular = localStorage.getItem('@curriculo-profile/celular');
    const email = localStorage.getItem('@curriculo-profile/email');
    const resumo = localStorage.getItem('@curriculo-profile/resumo');
    const historico = localStorage.getItem('@curriculo-profile/historico');
    const inf = localStorage.getItem('@curriculo-profile/inf');
    const comp = localStorage.getItem('@curriculo-profile/comp');

    const Data ={
        imgData,nome,end,cidade,estado,celular,email,
        resumo,historico,inf,comp
    }

    await GCCF(Data);

    localStorage.clear();

}