import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, FormLabel, Input } from '@material-ui/core';
import { useStyles, TInputs } from '../App';

export default function Contacts() {
    const classes = useStyles();

    const { register } = useForm<TInputs>();

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    КОНТАКТЫ
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                    <FormLabel component='label'>Мобильный телефон</FormLabel>
                    <Input {...register("phone")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={6}>
                    <FormLabel component='label'>Дополнительный телефон</FormLabel>
                    <Input {...register("additionalPhone")} fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
                    <FormLabel component='label'>Email</FormLabel>
                    <Input {...register("email")} fullWidth={true} />
            </Grid>
        </Grid>
    )
}