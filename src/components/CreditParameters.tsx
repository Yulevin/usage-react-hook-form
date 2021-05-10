import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { FormControlLabel, Grid, Typography } from '@material-ui/core';
import { palleteEnum } from '../App';

const BlueCheckbox = withStyles({
    root: {
        color: blue[900],
        '&$checked': {
            color: blue[900],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function CreditParameters() {
    const [state, setState] = React.useState({
        agree: false,
        disagree: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Grid container item style={{ "margin": "auto", "width": "90%" }}>
            <Grid item xs={12} style={{ "backgroundColor": `${palleteEnum.colorBackgroundHeader}`, "color": `${palleteEnum.colorWhite}`, "borderRadius": "4px" }}>
                <Typography variant="h6" align="center">ПАРАМЕТРЫ ЗАПРАШИВАЕМОГО КРЕДИТА</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Сумма кредита</Typography>
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
                <Typography>
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