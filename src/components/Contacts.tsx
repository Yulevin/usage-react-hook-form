import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../App';

export default function Contacts() {
    const classes = useStyles();

    return (
        <Grid container item className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    КОНТАКТЫ
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Мобильный телефон</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Дополнительный телефон</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
                <Typography>Email</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Typography align="center">...</Typography>
            </Grid>
        </Grid>
    )
}