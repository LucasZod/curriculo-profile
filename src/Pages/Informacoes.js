import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


export default function Info() {

    return(
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography>
            <span>Olá, me chamo <strong>Lucas Moreno Duarte</strong>, sou um eterno estudante de computação e venho através desse simplório App passar uma menssagem, com o avanço da <strong>COVID-19</strong> pelo Brasil é notável que faltará recursos básicos para muita gente, inclusive acesso a informação que no meu ver é de extrema importânica para quem está procurando um emprego, uma vez que as lan houses não serão abertas por um determinado tempo, pensei em uma forma de ajudar as pessoas que não possui um conhecimento muito técnico e também não possui muitos recursos para pagar um currículo que hoje é cobrado em muitos lugares.</span>
                </Typography>
                <Typography>
                    <span>
                        Com esse App você conseguirá fazer seu currículo de graça, tanto pelo celular ou computador, <strong>não é nessessário fazer cadastro, a ideia é ser bem prático. </strong>
            Essa foi uma das formas que achei para ajudar o próximo e fazer minha pequena parte diante dessa insanidade que cada um está passando.</span>
                </Typography>

                <Typography>
                    <span>
            O App ainda está em desenvolvimento uma vez que não consumo a maior parte do meu tempo com isso, como eu disse, é para pessoas menos técnicas e carentes, porém qualquer dúvida, crítica ou até mesmo melhorias estarei a disposição para sana-lás.</span>
                </Typography>

                <Typography>
                        <span>
                            Por enquanto só está disponível <strong>Currículo com Foto</strong>, quando houver tempo, deixarei isso opcional.
                        </span>
                </Typography>

            <Typography>
            <span>Obrigado a todos, e <strong>#TamoJuntoNessa</strong></span>
            </Typography>

                <Typography>
                <span>
                   <strong>Contato:</strong>
                </span>
                </Typography>
                <Typography>
                <span>
                   <strong>(62) 9 8163-8156  </strong>
                    <WhatsAppIcon/>
                </span>
                </Typography>

            </Container>
        </React.Fragment>



    );

}