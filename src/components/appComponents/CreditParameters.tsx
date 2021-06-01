import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Grid, Typography, Box, FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { RadioButton } from '../customComponents/RadioButton';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { useStyles } from '../../App';
import { TCreditParametersInputs } from '../../types';
import { setCreditParametersActionCreator } from '../../redux';

export const CreditParameters = (): JSX.Element => {
    const classes = useStyles();
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
                            required: 'This field is required'
                        })}
                        id='creditSum'
                        type='text'
                        name='creditSum'
                        label='Credit Sum'
                    />
                    {
                        errors.creditSum &&
                        <Box component='span' className={classes.error}>
                            {errors.creditSum.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('creditTerm', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^[0-9]+$/,
                                message: '⚠️ This field is number only',
                            },
                            max: {
                                value: 2,
                                message: '⚠️ No more than two characters',
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
                        <Box component='span' className={classes.error}>
                            {errors.creditTerm.message}
                        </Box>
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
                                    value='Disagree'label='Disagree'
                                />
                            </RadioGroup>
                            {
                                errors.insuranceСonsent &&
                                <Box component='span' className={classes.error}>
                                    {errors.insuranceСonsent.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                </Grid >
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid >
        </Form>
    );
}
