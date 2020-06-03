import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography, Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import style from './Informacoes.css';

export default function Info() {

    return(
        <div className={style.container}>
        <Grid>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography>
                    <span>Olá, me chamo Lucas Moreno Duarte, sou um eterno estudante de computação e venho através desse simplório App passar uma menssagem. Com o avanço da <strong>COVID-19</strong> pelo Brasil é notável que faltará recursos básicos para muita gente, inclusive acesso a informação que ao meu ver é de extrema importância para quem está procurando um emprego, uma vez que as lan houses não serão abertas por um determinado tempo. Sendo assim, pensei em uma forma de ajudar as pessoas que não possuem um conhecimento muito técnico e também não possuem muitos recursos para pagar pela elaboração de um currículo, pois, hoje em dia esse serviço é cobrado em muitos lugares.</span>
                </Typography>
                <Typography>
                    <span>
                        Com esse App você conseguirá fazer seu currículo de graça, tanto pelo celular ou computador, <strong>não é nessessário fazer cadastro, a ideia é ser bem prático.</strong>
            Essa foi uma das formas que achei para ajudar o próximo e fazer minha pequena parte diante dessa insanidade que cada um está passando.</span>
                </Typography>

                <Typography>
                    <span>O App ainda está em desenvolvimento uma vez que não consumo a maior parte do meu tempo com isso, como eu disse, é para pessoas menos técnicas e carentes, porém, qualquer dúvida, crítica ou até mesmo melhorias estarei à disposição para saná-las.
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
        </Grid>
        </div>

    );

}