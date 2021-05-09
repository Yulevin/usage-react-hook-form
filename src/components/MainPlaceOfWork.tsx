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

export default function MainPlaceOfWork() {
    const [state, setState] = React.useState({
        privateEnterprise: false,
        state: false,
        individual: false,
        production: false,
        trade: false,
        services: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Grid container item style={{ "margin": "auto", "width": "90%" }}>
            <Grid item xs={12} style={{ "backgroundColor": `${palleteEnum.colorBackgroundHeader}`, "color": `${palleteEnum.colorWhite}`, "borderRadius": "4px" }}>
                <Typography variant="h6" align="center">
                    ОСНОВНОЕ МЕСТО РАБОТЫ
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>Наименование организации-работодателя</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>ИНН организации</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Веб-сайт</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>Рабочий телефон</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>Адрес места работы</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>ФИО руководителя</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Форма собственности</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.privateEnterprise}
                                onChange={handleChange}
                                name="privateEnterprise"
                                color="primary"
                            />
                        }
                        label="Частное предприятие"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.state}
                                onChange={handleChange}
                                name="state"
                                color="primary"
                            />
                        }
                        label="Государственное"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.individual}
                                onChange={handleChange}
                                name="individual"
                                color="primary"
                            />
                        }
                        label="Индивидуальное"
                    />
                </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Род деятельности</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.production}
                                onChange={handleChange}
                                name="production"
                                color="primary"
                            />
                        }
                        label="Производство"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.trade}
                                onChange={handleChange}
                                name="trade"
                                color="primary"
                            />
                        }
                        label="Торговля"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.services}
                                onChange={handleChange}
                                name="services"
                                color="primary"
                            />
                        }
                        label="Услуги"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
