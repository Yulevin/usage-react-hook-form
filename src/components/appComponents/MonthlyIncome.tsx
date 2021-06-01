import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Typography, Box } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { useStyles } from '../../App';
import { TMonthlyIncomeInputs } from '../../types';
import { setMonthlyIncomeActionCreator } from '../../redux';

export const MonthlyIncome = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TMonthlyIncomeInputs>();

    const moonthlyIncomeId = { id: 'moonthlyIncome' };

    const onSubmit = (inputsState: TMonthlyIncomeInputs): void => {
        dispatch(setMonthlyIncomeActionCreator({
            ...moonthlyIncomeId,
            ...inputsState,
        }));
        history.push('/CreditParameters');
        return;
    }

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
                        <Box component='span' className={classes.error}>
                            {errors.income.message}
                        </Box>
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