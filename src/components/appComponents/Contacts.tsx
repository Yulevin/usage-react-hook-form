import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { CustomButton as BackButton } from '../customComponents/CustomButton';
import { useGlobalStyles } from '../../App';
import { TContactInputs } from '../../types';
import { setContactsActionCreator } from '../../redux';

export const Contacts = (): JSX.Element => {
    const classes = useGlobalStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TContactInputs>({
        mode: 'onBlur',
    });

    const idContacts = { id: 'contacts' };

    const onSubmit = (inputsState: TContactInputs): void => {
        dispatch(setContactsActionCreator({
            ...idContacts,
            ...inputsState,
        }));
        history.push('/RegistrationAddress');
        return;
    }

    const handleBackButton = (): void => {
        history.goBack();
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
                <Grid item xs={12}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos, sit veniam, itaque cupiditate quidem nobis fugiat ipsum 
                        eius dolore quia laborum doloribus aliquam sint, quod laudantium. 
                        Laboriosam magni ipsam aut?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('phone', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                                message: '⚠️ Please enter the correct phone number format',
                            }
                        })}
                        id='phone'
                        name='phone'
                        type='text'
                        label='Mobile*'
                    />
                    {
                        errors.phone &&
                        <Typography className={classes.error}>
                            {errors.phone.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('additionalPhone')}
                        id='additionalPhone'
                        name='additionalPhone'
                        type='text'
                        label='Additional phone'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('email', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
                                message: '⚠️ Please enter the correct email format',
                            }
                        })}
                        id='email'
                        name='email'
                        type='email'
                        label='E-mail*'
                    />
                    {
                        errors.email &&
                        <Typography className={classes.error}>
                            {errors.email.message}
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
