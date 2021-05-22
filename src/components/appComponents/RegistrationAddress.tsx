import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Grid, Typography } from '@material-ui/core';
import { Input } from '../customComponents/Input';
import { Form } from '../customComponents/Form';
import { NextButton } from '../customComponents/NextButton';
import { useStyles } from '../../App';

type TInputs = {
    postCode: string,
    region: string,
    city: string,
    street: string,
    houseNumber: string,
    houseBuilding: string,
    apartment: string,
};

export const RegistrationAddress = () => {
    const classes = useStyles();
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();

    const onSubmit = (data: {}): void => {
        console.log('Registration Address: ', data);
        history.push('/ActualLocationAddress');
        return;
    };

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
                        <span className={classes.error}>
                            {errors.postCode.message}
                        </span>
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
                        <span className={classes.error}>
                            {errors.region.message}
                        </span>
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
                        <span className={classes.error}>
                            {errors.city.message}
                        </span>
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
                        <span className={classes.error}>
                            {errors.street.message}
                        </span>
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
                        <span className={classes.error}>
                            {errors.houseNumber.message}
                        </span>
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
                        <span className={classes.error}>
                            {errors.houseBuilding.message}
                        </span>
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
                        <span className={classes.error}>
                            {errors.apartment.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid>
        </Form>
    );
}
