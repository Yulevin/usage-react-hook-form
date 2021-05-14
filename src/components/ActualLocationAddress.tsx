import React from 'react';
import { useForm } from 'react-hook-form';
import { FormControlLabel, Grid, Typography, FormLabel, Input } from '@material-ui/core';
import { useStyles, BlueCheckbox, TInputs } from '../App';

export default function ActualLocationAddress() {
    const classes = useStyles();
    const { register } = useForm<TInputs>();
    const [checkBoxState, setCheckBoxState] = React.useState({
        lessThanSixMonth: false,
        fromSixToOneYear: false,
        fromOneToThreeYears: false,
        fromThreeToTenYears: false,
        overTenYears: false,
    });

    const checkBoxHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
    };

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    АДРЕС ФАКТИЧЕСКОГО МЕСТОНАХОЖДЕНИЯ
                    <Typography className={classes.comment}>
                        заполняется, если отличается от адреса регистрации по месту жительства
                    </Typography>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormLabel component="label">Почтовый индекс</FormLabel>
                <Input {...register("actualPostcode")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormLabel component="label">Область</FormLabel>
                <Input {...register("actualRegion")} fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="label">Город</FormLabel>
                <Input {...register("actualCity")} fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="label">Улица</FormLabel>
                <Input {...register("actualStreet")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormLabel component="label">Дом</FormLabel>
                <Input {...register("actualHouseNumber")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormLabel component="label">Корпус/Строение</FormLabel>
                <Input {...register("actualHouseBuilding")} fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormLabel component="label">Квартира</FormLabel>
                <Input {...register("actualApartmentNumber")} fullWidth={true} />
            </Grid>
            <Grid item xs={12}>
                <FormLabel>Срок проживания в регионе</FormLabel>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.lessThanSixMonth}
                                onChange={checkBoxHandleChange}
                                name="lessThanSixMonth"
                                color="primary"
                            />
                        }
                        label="Менее 6 месяцев"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.fromSixToOneYear}
                                onChange={checkBoxHandleChange}
                                name="fromSixToOneYear"
                                color="primary"
                            />
                        }
                        label="От 6 до 1 года"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.fromOneToThreeYears}
                                onChange={checkBoxHandleChange}
                                name="fromOneToThreeYears"
                                color="primary"
                            />
                        }
                        label="От 1 до 3 лет"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.fromThreeToTenYears}
                                onChange={checkBoxHandleChange}
                                name="fromThreeToTenYears"
                                color="primary"
                            />
                        }
                        label="От 3 до 10 лет"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={checkBoxState.overTenYears}
                                onChange={checkBoxHandleChange}
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
