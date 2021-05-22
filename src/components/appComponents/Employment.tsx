import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, FormLabel } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { BlueCheckBox } from '../customComponents/BlueCheckBox';
import { useStyles } from '../../App';
import { NextButton } from '../customComponents/NextButton';

export const Employment = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();

    const { handleSubmit } = useForm();

    const [checkBoxState, setCheckBoxState] = useState({
        lessThanSixMonth: false,
        fromSixMonthToOneYear: false,
        fromOneToThreeYears: false,
        fromThreeToTenYears: false,
        overTenYears: false,
    });

    const handleChangeBox = (event: React.BaseSyntheticEvent): void => {
        setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
        return;
    }

    const onSubmit = (): void => {
        console.log('Employment: ', {...checkBoxState});
        history.push('/MainPlaceOfWork');
        return;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Employment
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12}>
                        <FormLabel component='label'>Total work experience</FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='lessThanSixMonth'
                            label='Less Than Six Month'
                            checked={checkBoxState.lessThanSixMonth}
                            onChange={handleChangeBox}
                            color='primary'
                            name='lessThanSixMonth'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromSixMonthToOneYear'
                            label='From Six Month to One Year'
                            checked={checkBoxState.fromSixMonthToOneYear}
                            onChange={handleChangeBox}
                            name='fromSixMonthToOneYear'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromOneToThreeYears'
                            label='From One to Three Years'
                            checked={checkBoxState.fromOneToThreeYears}
                            onChange={handleChangeBox}
                            name='fromOneToThreeYears'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromThreeToTenYears'
                            label='From Three to Ten Years'
                            checked={checkBoxState.fromThreeToTenYears}
                            onChange={handleChangeBox}
                            name='fromThreeToTenYears'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='overTenYears'
                            label='Over Ten Years'
                            checked={checkBoxState.overTenYears}
                            onChange={handleChangeBox}
                            name='overTenYears'
                            color='primary'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid>
        </Form>
    );
}
