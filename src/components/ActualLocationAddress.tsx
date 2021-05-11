import React from 'react';
import { FormControlLabel, Grid, Typography } from '@material-ui/core';
import { useStyles, BlueCheckbox } from '../App';

export default function ActualLocationAddress() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        lessThanSixMonth: false,
        fromSixToOneYear: false,
        fromOneToThreeYears: false,
        fromThreeToTenYears: false,
        overTenYears: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Grid container item className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    АДРЕС ФАКТИЧЕСКОГО МЕСТОНАХОЖДЕНИЯ
                    <Typography className={classes.comment}>
                        заполняется, если отличается от адреса регистрации по месту жительства
                    </Typography>
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
            <Grid item xs={12} sm={2}>
                <Typography>Квартира</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Срок проживания в регионе</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.lessThanSixMonth}
                                onChange={handleChange}
                                name="lessThanSixMonth"
                                color="primary"
                            />
                        }
                        label="Менее 6 месяцев"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.fromSixToOneYear}
                                onChange={handleChange}
                                name="fromSixToOneYear"
                                color="primary"
                            />
                        }
                        label="От 6 до 1 года"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.fromOneToThreeYears}
                                onChange={handleChange}
                                name="fromOneToThreeYears"
                                color="primary"
                            />
                        }
                        label="От 1 до 3 лет"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.fromThreeToTenYears}
                                onChange={handleChange}
                                name="fromThreeToTenYears"
                                color="primary"
                            />
                        }
                        label="От 3 до 10 лет"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.overTenYears}
                                onChange={handleChange}
                                name="overTenYears"
                                color="primary"
                            />
                        }
                        label="Свыше 10 лет"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
