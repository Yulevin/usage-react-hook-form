import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from '../customComponents/Form';
import { Grid, Typography, FormLabel } from '@material-ui/core';
import { Input } from '../customComponents/Input';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { CustomButton as BackButton } from '../customComponents/CustomButton';
import { useGlobalStyles } from '../../App';
import { TRegistrationAddressInputs } from '../../types';
import { setRegistrationAddressActionCreator } from '../../redux';

export const RegistrationAddress = (): JSX.Element => {
    const classes = useGlobalStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TRegistrationAddressInputs>();

    const registrationAddressId = { id: 'registrationAddress' };

    const onSubmit = (inputsState: TRegistrationAddressInputs): void => {
        dispatch(setRegistrationAddressActionCreator({
            ...registrationAddressId,
            ...inputsState,
        }));
        history.push('/ActualLocationAddress');
        return;
    }

    const handleBackButton = (): void => {
        history.goBack();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Registration Address
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel component='legend' color='secondary'>
                        Post code*
                    </FormLabel>
                    <Input
                        {...register('postCode', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^([0-9][0-9][0-9])[/]([0-9][0-9][0-9])$/,
                                message: '⚠️ Please enter the correct post code format',
                            },
                        })}
                        id='postCode'
                        type='text'
                        label='NNN/NNN'
                    />
                    {
                        errors.postCode &&
                        <Typography className={classes.error}>
                            {errors.postCode.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormLabel component='legend' color='secondary'>
                        Region*
                    </FormLabel>
                    <Input
                        {...register('region', {
                            required: '⚠️ This field is required'
                        })}
                        id='region'
                        type='text'
                    />
                    {
                        errors.region &&
                        <Typography className={classes.error}>
                            {errors.region.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component='legend' color='secondary'>
                        City*
                    </FormLabel>
                    <Input
                        {...register('city', {
                            required: '⚠️ This field is required'
                        })}
                        id='city'
                        type='text'
                    />
                    {
                        errors.city &&
                        <Typography className={classes.error}>
                            {errors.city.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component='legend' color='secondary'>
                        Street*
                    </FormLabel>
                    <Input
                        {...register('street', {
                            required: '⚠️ This field is required'
                        })}
                        id='street'
                        type='text'
                    />
                    {
                        errors.street &&
                        <Typography className={classes.error}>
                            {errors.street.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='legend' color='secondary'>
                        House Number*
                    </FormLabel>
                    <Input
                        {...register('houseNumber', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^[0-9][0-9]?[0-9]?$/,
                                message: '⚠️ This field is no more 3 numbers'
                            }
                        })}
                        id='houseNumber'
                        type='text'
                    />
                    {
                        errors.houseNumber &&
                        <Typography className={classes.error}>
                            {errors.houseNumber.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='legend' color='secondary'>
                        Building
                    </FormLabel>
                    <Input
                        {...register('houseBuilding')}
                        id='houseBuilding'
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='legend' color='secondary'>
                        Apartment*
                    </FormLabel>
                    <Input
                        {...register('apartment', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^[0-9][0-9]?[0-9]?[0-9]?[0-9]?$/,
                                message: '⚠️ This field is no more 5 symbols and numbers only',
                            }
                        })}
                        id='apartment'
                        type='text'
                    />
                    {
                        errors.apartment &&
                        <Typography className={classes.error}>
                            {errors.apartment.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={6}>
                    <BackButton type='button' onClick={handleBackButton}>Back</BackButton>
                </Grid>
                <Grid item xs={6}>
                    <NextButton type='submit'>Next</NextButton>
                </Grid>
            </Grid>
        </Form>
    );
}
