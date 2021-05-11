import React from 'react';
import { FormControlLabel, Grid, Typography } from '@material-ui/core';
import { useStyles, BlueCheckbox } from '../App';

export default function EducationStatus() {
    const classes = useStyles();

    const [state, setState] = React.useState({
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Grid container item className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    ОБРАЗОВАНИЕ И СЕМЕЙНОЕ ПОЛОЖЕНИЕ
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Уровень образования</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.degree}
                                onChange={handleChange}
                                name="degree"
                                color="primary"
                            />
                        }
                        label="Ученая степень/MBA"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.higher}
                                onChange={handleChange}
                                name="higher"
                                color="primary"
                            />
                        }
                        label="Высшее"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.secondHigher}
                                onChange={handleChange}
                                name="secondHigher"
                                color="primary"
                            />
                        }
                        label="Второе высшее"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.incompleteHigher}
                                onChange={handleChange}
                                name="incompleteHigher"
                                color="primary"
                            />
                        }
                        label="Неоконченное высшее"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.specializedSecondary}
                                onChange={handleChange}
                                name="specializedSecondary"
                                color="primary"
                            />
                        }
                        label="Среднее специальное"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.secondary}
                                onChange={handleChange}
                                name="secondary"
                                color="primary"
                            />
                        }
                        label="Среднее"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.lowerSecondary}
                                onChange={handleChange}
                                name="lowerSecondary"
                                color="primary"
                            />
                        }
                        label="Неполное среднее"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Семейное положение</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.married}
                                onChange={handleChange}
                                name="married"
                                color="primary"
                            />
                        }
                        label="Женат/Замужем"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.single}
                                onChange={handleChange}
                                name="single"
                                color="primary"
                            />
                        }
                        label="Холост/Не замужем"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.divorced}
                                onChange={handleChange}
                                name="divorced"
                                color="primary"
                            />
                        }
                        label="В разводе"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.civilMarriage}
                                onChange={handleChange}
                                name="civilMarriage"
                                color="primary"
                            />
                        }
                        label="Гражданский брак"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.other}
                                onChange={handleChange}
                                name="other"
                                color="primary"
                            />
                        }
                        label="Другое"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography>Сколько иждивенцев находится на вашем содержании?</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography align="center">...</Typography>
            </Grid>
        </Grid>
    )
}