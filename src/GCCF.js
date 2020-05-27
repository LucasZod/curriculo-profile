import jsPDF from 'jspdf';
export default function GCCF(Data) {

    const { imgData, nome, end, cidade, estado, celular, email,
        resumo, historico, inf, comp } = Data;


    const doc = new jsPDF();

    if (imgData){
        doc.addImage(imgData, 'JPEG', 3, 10, 37, 40);
    }

    doc.setFontSize(20);
    doc.text(45, 17, `${nome}`);

    doc.setFontSize(12);
    doc.text(45, 26, `${end}`);

    doc.setFontSize(12);
    doc.text(45, 31, `${cidade} - ${estado}`);

    doc.setFontSize(12);
    doc.text(45, 36, `${celular}`);

    doc.setFontSize(12);
    doc.text(45, 41, `${email}`);

    doc.setFontSize(12);
    doc.text(3, 60, "Resumo Profissional");
    doc.setLineWidth(0.2);
    doc.line(3, 63, 208, 63);

    const res = doc.setFontSize(10)
        .splitTextToSize(`${resumo}`, 150);
    doc.text(46, 70, res);


    doc.setFontSize(12);
    doc.text(3, 110, "Histórico Profissional");
    doc.setLineWidth(0.2);
    doc.line(3, 113, 208, 113);

    const his = doc.setFontSize(10)
        .splitTextToSize(`${historico}`, 150);
    doc.text(46, 120, his);


    doc.setFontSize(12);
    doc.text(3, 188, "Informações Pessoais");
    doc.setLineWidth(0.2);
    doc.line(3, 191, 208, 191);

    const info = doc.setFontSize(10)
        .splitTextToSize(`${inf}`, 150);
    doc.text(46, 198, info);


    doc.setFontSize(12);
    doc.text(3, 220, "Competências");
    doc.setLineWidth(0.2);
    doc.line(3, 223, 208, 223);

    const compe = doc.setFontSize(10)
        .splitTextToSize(`${comp}`, 150);
    doc.text(46, 230, compe);


    doc.save('newcurriculoprofile');
    // doc.output('dataurlnewwindow');

}