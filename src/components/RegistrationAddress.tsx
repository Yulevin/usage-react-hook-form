import React from 'react';
import { Grid, Typography, FormLabel, Input } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useStyles, TInputs } from '../App';

export default function RegistrationAddress() {
    const classes = useStyles();
    const { register } = useForm<TInputs>();

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    АДРЕС РЕГИСТРАЦИИ ПО МЕСТУ ЖИТЕЛЬСТВА
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormLabel component="label">Почтовый индекс</FormLabel>
                <Input {...register("postcode")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormLabel component="label">Область</FormLabel>
                <Input {...register("region")} fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="label">Город</FormLabel>
                <Input {...register("city")} fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="label">Улица</FormLabel>
                <Input {...register("street")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormLabel component="label">Дом</FormLabel>
                <Input {...register("houseNumber")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormLabel component="label">Корпус/Строение</FormLabel>
                <Input {...register("houseBuilding")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormLabel component="label">Квартира</FormLabel>
                <Input {...register("apartmentNumber")} fullWidth={true} />
            </Grid>
        </Grid>
    )
}