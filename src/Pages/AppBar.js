import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';

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
        color: "white",
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    linktwo: {
        textDecoration: 'none',
        color: 'black',
        marginLeft: 13,
        marginRight: 13,
    },
    tamojunto: {
        color: "white",
        fontSize: 15,
        fontFamily: "sans-serif",

    },
    curriculo: {
        textDecoration: "none",
        color: "white",
    }

}));

export default function Header() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link className={classes.linktwo} to='/informacoes'>
                    <ListItem button key='Informações'>
                        <ContactsOutlinedIcon className={classes.linktwo} fontSize='small'/>
                        <ListItemText primary='Informações' />
                    </ListItem>
                </Link>
                <Link className={classes.linktwo} to='/coronatracker'>
                    <ListItem button key='Corona Tracker'>
                        <AddAlertIcon className={classes.linktwo} fontSize='small'/>
                        <ListItemText primary='Corona Tracker' />
                    </ListItem>
                </Link>
            </List>
        </div>

    );
    const Inf = () =>(
        ['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className={classes.link} onClick={toggleDrawer(anchor, true)}>{<InfoOutlinedIcon/>}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))
    );

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Inf/>
                    <Typography variant="h5" className={classes.title}>
                        <Link className={classes.curriculo} to='/'>
                        Currículo Profile
                        </Link>
                    </Typography>
                    <div className={classes.tamojunto}>
                    #TamoJuntoNessa
                    </div>
                </Toolbar>
            </AppBar>

        </div>


    );
}