import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { FormControlLabel, Grid, Typography } from '@material-ui/core';
import { palleteEnum } from '../App';

const GreenCheckbox = withStyles({
    root: {
        color: blue[100],
        '&$checked': {
            color: blue[200],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function Employment() {
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
        <Grid container item style={{ "margin": "auto", "width": "90%" }}>
            <Grid item xs={12} style={{ "backgroundColor": `${palleteEnum.colorBackgroundHeader}`, "color": `${palleteEnum.colorWhite}`, "borderRadius": "4px" }}>
                <Typography variant="h6" align="center">
                    ЗАНЯТОСТЬ
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Общий трудовой стаж</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
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
                            <Checkbox
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
                            <Checkbox
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
                            <Checkbox
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
                            <Checkbox
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
