import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Grid, Typography, FormLabel } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { BlueCheckBox } from '../customComponents/BlueCheckBox';
import { useStyles } from '../../App';
import { NextButton } from '../customComponents/NextButton';

type TInputs = {
    actualPostcode: string,
    actualRegion: string,
    actualCity: string,
    actualStreet: string,
    actualHouseNumber: string,
    actualHouseBuilding: string,
    actualApartmentNumber: string,
};

export const ActualLocationAddress = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();

    const { register, handleSubmit } = useForm<TInputs>();

    const [checkBoxState, setCheckBoxState] = useState({
        lessThanSixMonth: false,
        fromSixToOneYear: false,
        fromOneToThreeYears: false,
        fromThreeToTenYears: false,
        overTenYears: false,
    });

    const checkBoxHandleChange = (event: React.BaseSyntheticEvent): void => {
        setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
        return;
    }

    const onSubmit = (data: {}): void => {
        console.log('Actual Location Address: ', data, { ...checkBoxState });
        history.push('/EducationStatus');
        return;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Actual Location Address
                    </Typography>
                    <Typography
                        component='h3'
                        variant='subtitle1'
                        align='center'
                        className={classes.comment}
                    >
                        fill if you live in a different address
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('actualPostcode')}
                        id='actualPostcode'
                        type='text'
                        name='actualPostcode'
                        label='Actual Postcode'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('actualRegion')}
                        id='actualRegion'
                        type='text'
                        name='actualRegion'
                        label='Actual Region'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('actualCity')}
                        id='actualCity'
                        type='text'
                        name='actualCity'
                        label='Actual City'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('actualStreet')}
                        id='actualStreet'
                        type='text'
                        name='actualStreet'
                        label='Actual Street'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Input
                        {...register('actualHouseNumber')}
                        id='actualHouseNumber'
                        type='text'
                        name='actualHouseNumber'
                        label='Actual House Number'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Input
                        {...register('actualHouseBuilding')}
                        id='actualHouseBuilding'
                        type='text'
                        name='actualHouseBuilding'
                        label='Actual House Building'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Input
                        {...register('actualApartmentNumber')}
                        id='actualApartmentNumber'
                        type='text'
                        name='actualApartmentNumber'
                        label='Actual Apartment Number'
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component='label'>Living Time in the Region</FormLabel>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='lessThanSixMonth'
                            name='lessThanSixMonth'
                            checked={checkBoxState.lessThanSixMonth}
                            onChange={checkBoxHandleChange}
                            color='primary'
                            label='Less Than Six Month'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromSixToOneYear'
                            name='fromSixToOneYear'
                            checked={checkBoxState.fromSixToOneYear}
                            onChange={checkBoxHandleChange}
                            color='primary'
                            label='From Six to One Year'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromOneToThreeYears'
                            name='fromOneToThreeYears'
                            checked={checkBoxState.fromOneToThreeYears}
                            onChange={checkBoxHandleChange}
                            color='primary'
                            label='From One to Three Years'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromThreeToTenYears'
                            name='fromThreeToTenYears'
                            checked={checkBoxState.fromThreeToTenYears}
                            onChange={checkBoxHandleChange}
                            color='primary'
                            label='From Three to Ten Years'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='overTenYears'
                            name='overTenYears'
                            checked={checkBoxState.overTenYears}
                            onChange={checkBoxHandleChange}
                            color='primary'
                            label='Over Ten Years'
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
