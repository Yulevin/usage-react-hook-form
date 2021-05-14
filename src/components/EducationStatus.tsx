import React from 'react';
import { useForm } from 'react-hook-form';
import { FormControlLabel, Grid, Typography, Input,FormLabel } from '@material-ui/core';
import { useStyles, TInputs, BlueCheckbox } from '../App';

export default function EducationStatus() {
    const classes = useStyles();
    const { register } = useForm<TInputs>();
    const [checkBoxState, setCheckBoxState] = React.useState({
        degree: false,
        higher: false,
        secondHigher: false,
        incompleteHigher: false,
        specializedSecondary: false,
        secondary: false,
        lowerSecondary: false,
        married: false,
        single: false,
        divorced: false,
        civilMarriage: false,
        other: false,
    });

    const checkBoxHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
    };

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    ОБРАЗОВАНИЕ И СЕМЕЙНОЕ ПОЛОЖЕНИЕ
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="label">Уровень образования</FormLabel>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.degree}
                                onChange={checkBoxHandleChange}
                                name="degree"
                                color="primary"
                            />
                        }
                        label="Ученая степень/MBA"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.higher}
                                onChange={checkBoxHandleChange}
                                name="higher"
                                color="primary"
                            />
                        }
                        label="Высшее"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.secondHigher}
                                onChange={checkBoxHandleChange}
                                name="secondHigher"
                                color="primary"
                            />
                        }
                        label="Второе высшее"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.incompleteHigher}
                                onChange={checkBoxHandleChange}
                                name="incompleteHigher"
                                color="primary"
                            />
                        }
                        label="Неоконченное высшее"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.specializedSecondary}
                                onChange={checkBoxHandleChange}
                                name="specializedSecondary"
                                color="primary"
                            />
                        }
                        label="Среднее специальное"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.secondary}
                                onChange={checkBoxHandleChange}
                                name="secondary"
                                color="primary"
                            />
                        }
                        label="Среднее"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.lowerSecondary}
                                onChange={checkBoxHandleChange}
                                name="lowerSecondary"
                                color="primary"
                            />
                        }
                        label="Неполное среднее"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="label">Семейное положение</FormLabel>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.married}
                                onChange={checkBoxHandleChange}
                                name="married"
                                color="primary"
                            />
                        }
                        label="Женат/Замужем"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.single}
                                onChange={checkBoxHandleChange}
                                name="single"
                                color="primary"
                            />
                        }
                        label="Холост/Не замужем"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.divorced}
                                onChange={checkBoxHandleChange}
                                name="divorced"
                                color="primary"
                            />
                        }
                        label="В разводе"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.civilMarriage}
                                onChange={checkBoxHandleChange}
                                name="civilMarriage"
                                color="primary"
                            />
                        }
                        label="Гражданский брак"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.other}
                                onChange={checkBoxHandleChange}
                                name="other"
                                color="primary"
                            />
                        }
                        label="Другое"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="label">
                    Сколько иждивенцев находится на вашем содержании?
                </FormLabel>
                <Input {...register("dependent")} fullWidth={true}/>
            </Grid>
        </Grid>
    )
}