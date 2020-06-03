import {Grid, Card, Typography, CardContent} from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import cx from 'classnames';

import styles from './Cards.module.css';

export default function Cards({ data:{ confirmed, recovered, deaths, lastUpdate} }) {

    if (!confirmed){
        return 'Loading...';
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={6} justify="center">

            <Grid item component={Card} xs={12} md={3} className={cx(styles.infected, styles.card)} >
                <CardContent>
                    <Typography color="textSecondary">Confirmados: </Typography>
                    <Typography variant="h6">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={1.8}
                            separator="."
                        />
                    </Typography>
                    <Typography variant="h6" color="textSecondary">Data:</Typography>
                    <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                </CardContent>
            </Grid>

                <Grid xs={12} md={3} item component={Card} className={cx(styles.recovered, styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary">Recuperados: </Typography>
                        <Typography variant="h6">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2}
                                separator="."
                            />
                        </Typography>
                        <Typography variant="h6" color="textSecondary">Data:</Typography>
                        <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>

                <Grid xs={12} md={3} item component={Card} className={cx(styles.deaths, styles.card)}>
                    <CardContent>
                        <Typography  color="textSecondary">Mortes: </Typography>
                        <Typography variant="h6" color="secondary">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator="."
                            />
                        </Typography>
                        <Typography variant="h6" color="textSecondary">Data:</Typography>
                        <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )

}

