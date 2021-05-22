import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Grid, Typography } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { BlueCheckBox } from '../customComponents/BlueCheckBox';
import { NextButton } from '../customComponents/NextButton';
import { useStyles } from '../../App';

type TInputs = {
    creditSum: string,
    creditTerm: string,
};

export const CreditParameters = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();

    const [checkBoxState, setCheckBoxState] = useState({
        agree: false,
        disagree: false,
    });

    const handleChange = (event: React.BaseSyntheticEvent): void => {
        setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
        return;
    }

    const onSubmit = (data: {}): void => {
        console.log('Credit Parameters: ', data, { ...checkBoxState });
        history.push('/TotalPage');
        return;
    }

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
                        <span className={classes.error}>
                            {errors.creditSum.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('creditTerm', {
                            required: 'This field is required',
                            pattern: {
                                value: /[0-9]/,
                                message: 'This input is number only',
                            }
                        })}
                        id='creditTerm'
                        type='text'
                        name='creditTerm'
                        label='Credit Term'
                        placeholder='in month'
                    />
                    {
                        errors.creditTerm &&
                        <span className={classes.error}>
                            {errors.creditTerm.message}
                        </span>
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
                        <BlueCheckBox
                            id='agree'
                            label='Agree'
                            checked={checkBoxState.agree}
                            onChange={handleChange}
                            name='agree'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <BlueCheckBox
                            id='disagree'
                            label='Disagree'
                            checked={checkBoxState.disagree}
                            onChange={handleChange}
                            name='disagree'
                            color='primary'
                        />
                    </Grid>
                </Grid >
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid >
        </Form>
    );
}
