import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { palleteEnum } from '../App';

export default function RegistrationAddress() {
    return (
        <Grid container item style={{ "margin": "auto", "width": "90%" }}>
            <Grid item xs={12} style={{ "backgroundColor": `${palleteEnum.colorBackgroundHeader}`, "color": `${palleteEnum.colorWhite}`, "borderRadius": "4px" }}>
                <Typography variant="h6" align="center">АДРЕС РЕГИСТРАЦИИ ПО МЕСТУ ЖИТЕЛЬСТВА</Typography>
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