import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { palleteEnum } from '../App';

export default function Contacts() {
    return (
        <Grid container item style={{ "margin": "auto", "width": "90%" }}>
            <Grid item xs={12} style={{ "backgroundColor": `${palleteEnum.colorBackgroundHeader}`, "color": `${palleteEnum.colorWhite}`, "borderRadius": "4px" }}>
                <Typography variant="h6" align="center">КОНТАКТЫ</Typography>
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