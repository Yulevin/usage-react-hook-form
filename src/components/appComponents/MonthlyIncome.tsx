import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { CustomButton as BackButton } from '../customComponents/CustomButton';
import { useGlobalStyles } from '../../App';
import { TMonthlyIncomeInputs } from '../../types';
import { setMonthlyIncomeActionCreator } from '../../redux';

export const MonthlyIncome = (): JSX.Element => {
    const classes = useGlobalStyles();
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

    const handleBackButton = (): void => {
        history.goBack();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Monthly Income
                </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Voluptas nesciunt accusantium perferendis rem illum inventore
                        voluptatibus ex asperiores facilis consequatur velit, eligendi,
                        saepe quam ipsam adipisci dolorem impedit tempore iure!
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Input
                        {...register('income', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^\d+([kw])?\+?$/,
                                message: '⚠️ Please enter the number',
                            }
                        })}
                        id='income'
                        type='text'
                        name='income'
                        label='Income at the main place of work*'
                    />
                    {
                        errors.income &&
                        <Typography className={classes.error}>
                            {errors.income.message}
                        </Typography>
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