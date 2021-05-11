import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../App';

export default function RegistrationAddress() {
    const classes = useStyles();

    return (
        <Grid container item className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    АДРЕС РЕГИСТРАЦИИ ПО МЕСТУ ЖИТЕЛЬСТВА
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Почтовый индекс</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Область</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
                <Typography>Город</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
                <Typography>Улица</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={1}>
                <Typography>Дом</Typography>
            </Grid>
            <Grid item xs={12} sm={1}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Корпус/Строение</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
                <Typography>Квартира</Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
                <Typography align="center">...</Typography>
            </Grid>
        </Grid>
    )
}