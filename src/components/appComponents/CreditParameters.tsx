import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Grid, Typography, FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { RadioButton } from '../customComponents/RadioButton';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { CustomButton as BackButton } from '../customComponents/CustomButton';
import { useGlobalStyles } from '../../App';
import { TCreditParametersInputs } from '../../types';
import { setCreditParametersActionCreator } from '../../redux';

export const CreditParameters = (): JSX.Element => {
    const classes = useGlobalStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TCreditParametersInputs>({
        mode: 'onBlur',
    });

    const creditParametersId = { id: 'creditParameters' };

    const onSubmit = (inputsState: TCreditParametersInputs): void => {
        dispatch(setCreditParametersActionCreator({
            ...creditParametersId,
            ...inputsState,
        }));
        history.push('/TotalPage');
        return;
    }

    const handleBackButton = () => {
        history.goBack();
    }

    // TODO: Complete the required patterns
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Parameters of the Requested Loan
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('creditSum', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^[1-9][0-9]?[0-9]?[0-9]?[0-9]?[0-9]?$/,
                                message: '⚠️ Please enter a number only'
                            },
                            maxLength: {
                                value: 6,
                                message: '⚠️ Please enter no more 6 symbols'
                            }
                        })}
                        id='creditSum'
                        type='text'
                        name='creditSum'
                        label='Credit Sum'
                    />
                    {
                        errors.creditSum &&
                        <Typography className={classes.error}>
                            {errors.creditSum.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('creditTerm', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^[1-9][0-9]?$/,
                                message: '⚠️ This field is number only',
                            },
                            maxLength: {
                                value: 2,
                                message: '⚠️ No more than two symbols',
                            }
                        })}
                        id='creditTerm'
                        type='text'
                        name='creditTerm'
                        label='Credit Term'
                        placeholder='in months'
                    />
                    {
                        errors.creditTerm &&
                        <Typography className={classes.error}>
                            {errors.creditTerm.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Typography paragraph>
                        By signing this Application, the Client confirms his consent
                        voluntarily conclude an agreement with an insurance company
                        that meets the requirements of the Bank personal insurance
                        valid at the time of the conclusion of the Credit Agreement.
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} sm={3}>
                    <Grid item xs={12} sm={12}>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend' color='secondary'>
                                Insurance Сonsent*
                            </FormLabel>
                            <RadioGroup
                                {...register('insuranceСonsent', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                <RadioButton 
                                    id='degree'
                                    name='insuranceСonsent'
                                    value='Agree'
                                    label='Agree'
                                />
                                <RadioButton 
                                    id='secondary'
                                    name='insuranceСonsent'
                                    value='Disagree'
                                    label='Disagree'
                                />
                            </RadioGroup>
                            {
                                errors.insuranceСonsent &&
                                <Typography className={classes.error}>
                                    {errors.insuranceСonsent.message}
                                </Typography>
                            }
                        </FormControl>
                    </Grid>
                </Grid >
                <Grid item xs={6}>
                    <BackButton type='button' onClick={handleBackButton}>Back</BackButton>
                </Grid>
                <Grid item xs={6}>
                    <NextButton type='submit'>Next</NextButton>
                </Grid>
            </Grid >
        </Form>
    );
}
