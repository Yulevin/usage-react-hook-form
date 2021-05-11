import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../App';

export default function MonthlyIncome() {
    const classes = useStyles();

    return (
        <Grid container item className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    ЕЖЕМЕСЯЧНЫЕ ДОХОДЫ
                </Typography>
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