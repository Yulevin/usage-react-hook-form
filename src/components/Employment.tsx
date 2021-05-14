import React from 'react';
import { FormControlLabel, Grid, Typography, FormLabel } from '@material-ui/core';
import { useStyles, BlueCheckbox } from '../App';

export default function Employment() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        lessThanSixMonth: false,
        fromSixMonthToOneYear: false,
        fromOneToThreeYears: false,
        fromThreeToTenYears: false,
        overTenYears: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    ЗАНЯТОСТЬ
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <FormLabel component="label">Общий трудовой стаж</FormLabel>
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
                        label="менее 6 месяцев"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.fromSixMonthToOneYear}
                                onChange={handleChange}
                                name="fromSixMonthToOneYear"
                                color="primary"
                            />
                        }
                        label="от 6 месяцев до 1 года"
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
                        label="от 1 до 3 лет"
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
                        label="от 3 до 10 лет"
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
                        label="свыше 10 лет"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
