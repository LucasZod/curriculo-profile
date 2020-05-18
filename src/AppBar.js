import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 20,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: "none",
    },

}));

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link className={classes.link} to='/'>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Currículo Profile
                    </Typography>
                </Toolbar>
            </AppBar>
            </Link>
        </div>
    );
}