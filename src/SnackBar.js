import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import React from "react";

export default function SBar(snack, string) {

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    if (string === 'success')
    {
        return (
            <Snackbar open={true} autoHideDuration={6000}>
                <Alert severity='success'>
                    {snack}
                </Alert>
            </Snackbar>
        )
    }

    if (string === 'error')
    {
        return (
            <Snackbar open={true} autoHideDuration={6000}>
                <Alert severity='success'>
                    {snack}
                </Alert>
            </Snackbar>
        )
    }



}
