import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from '../customComponents/Form';
import { Grid, Typography, Box } from '@material-ui/core';
import { Input } from '../customComponents/Input';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { useStyles } from '../../App';
import { TRegistrationAddressInputs } from '../../types';
import { setRegistrationAddressActionCreator } from '../../redux';

export const RegistrationAddress = (): JSX.Element => {
    const classes = useStyles();
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

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Registration Address
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('postCode', {
                            required: 'This field is required'
                        })}
                        id='postCode'
                        type='text'
                        label='Post Code*'
                    />
                    {
                        errors.postCode &&
                        <Box component='span' className={classes.error}>
                            {errors.postCode.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('region', {
                            required: 'This field is required'
                        })}
                        id='region'
                        type='text'
                        label='Region*'
                    />
                    {
                        errors.region &&
                        <Box component='span' className={classes.error}>
                            {errors.region.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('city', {
                            required: 'This field is required'
                        })}
                        id='city'
                        type='text'
                        label='City*'
                    />
                    {
                        errors.city &&
                        <Box component='span' className={classes.error}>
                            {errors.city.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('street', {
                            required: 'This field is required'
                        })}
                        id='street'
                        type='text'
                        label='Street*'
                    />
                    {
                        errors.street &&
                        <Box component='span' className={classes.error}>
                            {errors.street.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Input
                        {...register('houseNumber', {
                            required: 'This field is required'
                        })}
                        id='houseNumber'
                        type='text'
                        label='House Number*'
                    />
                    {
                        errors.houseNumber &&
                        <Box component='span' className={classes.error}>
                            {errors.houseNumber.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Input
                        {...register('houseBuilding', {
                            required: 'This field is required'
                        })}
                        id='houseBuilding'
                        type='text'
                        label='House Building*'
                    />
                    {
                        errors.houseBuilding &&
                        <Box component='span' className={classes.error}>
                            {errors.houseBuilding.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Input
                        {...register('apartment', {
                            required: 'This field is required'
                        })}
                        id='apartment'
                        type='text'
                        label='Apartment*'
                    />
                    {
                        errors.apartment &&
                        <Box component='span' className={classes.error}>
                            {errors.apartment.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid>
        </Form>
    );
}
