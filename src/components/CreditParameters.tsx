import React from 'react';
import { FormControlLabel, Grid, Typography } from '@material-ui/core';
import { useStyles, BlueCheckbox } from '../App';

export default function CreditParameters() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        agree: false,
        disagree: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Grid container item className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    ПАРАМЕТРЫ ЗАПРАШИВАЕМОГО КРЕДИТА
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography paragraph>Сумма кредита</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Срок кредита</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...мес</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Typography paragraph>
                    Подписывая настоящее Заявление Клиент подтверждает согласие добровольно
                    заключить в удовлетворяющей требованиям Банка страховой компании договор
                    личного страхования, действующий на момент заключения Кредитного договора.
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={3}>
                <Grid item xs={12} sm={12}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.agree}
                                onChange={handleChange}
                                name="agree"
                                color="primary"
                            />
                        }
                        label="Согласен"
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.disagree}
                                onChange={handleChange}
                                name="disagree"
                                color="primary"
                            />
                        }
                        label="Не согласен"
                    />
                </Grid>
            </Grid >
        </Grid >
    )
}