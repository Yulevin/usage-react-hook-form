import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { palleteEnum } from '../App';

export default function MonthlyIncome() {
    return (
        <Grid container item style={{ "margin": "auto", "width": "90%" }}>
            <Grid item xs={12} style={{ "backgroundColor": `${palleteEnum.colorBackgroundHeader}`, "color": `${palleteEnum.colorWhite}`, "borderRadius": "4px" }}>
                <Typography variant="h6" align="center">ЕЖЕМЕСЯЧНЫЕ ДОХОДЫ</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Доход по основному месту работы</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Доход от работы по совместительству</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Пенсия</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Иные доходы</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
        </Grid>
    )
}