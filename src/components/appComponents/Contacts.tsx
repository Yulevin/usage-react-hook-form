import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { Grid, Typography } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { NextButton } from '../customComponents/NextButton';
import { useStyles } from '../../App';

type TInputs = {
    phone: string,
    additionalPhone: string,
    email: string,
};

export const Contacts = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();

    const onSubmit = (data: {}): void => {
        console.log(data);
        history.push('/RegistrationAddress');
        return;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Contacts
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('phone', {
                            required: 'This field is required'
                        })}
                        id='phone'
                        type='text'
                        label='Mobile*'
                    />
                    {
                        errors.phone && 
                        <span className={classes.error}>
                            {errors.phone.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('additionalPhone', {
                            required: 'This field is required'
                        })}
                        id='additionalPhone'
                        type='text'
                        label='Additional Phone*'
                    />
                    {
                        errors.additionalPhone && 
                        <span className={classes.error}>
                            {errors.additionalPhone.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('email', {
                            required: 'This field is required'
                        })}
                        id='email'
                        type='email'
                        label='E-mail*'
                    />
                    {
                        errors.email && 
                        <span className={classes.error}>
                            {errors.email.message}
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
