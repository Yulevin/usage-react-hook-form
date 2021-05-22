import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Grid, Typography } from '@material-ui/core';
import { Input } from '../customComponents/Input';
import { Form } from '../customComponents/Form';
import { NextButton } from '../customComponents/NextButton';
import { useStyles } from '../../App';

type TInputs = {
    income: string,
    addIncome: string,
    pension: string,
    otherIncome: string,
};

export const MonthlyIncome = () => {
    const classes = useStyles();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
    
    const onSubmit = (data: {}): void => {
        console.log('Monthly Income: ', data);
        history.push('/CreditParameters');
        return;
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Monthly Income
                </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Input
                        {...register('income', {
                            required: 'This field is required'
                        })}
                        id='income'
                        type='text'
                        label='Income at the main place of work'
                        name='income'
                    />
                    {
                        errors.income &&
                        <span className={classes.error}>
                            {errors.income.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={6}>
                    <Input 
                        {...register('addIncome')}
                        id='addIncome'
                        type='text'
                        label='Additional Income'
                        name='addIncome'
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input 
                        {...register('pension')}
                        id='pension'
                        type='text'
                        label='Pension'
                        name='pension'
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input 
                        {...register('otherIncome')}
                        id='otherIncome'
                        type='text'
                        label='Other Income'
                        name='otherIncome'
                    />
                </Grid>
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid>
        </Form>
    );
}