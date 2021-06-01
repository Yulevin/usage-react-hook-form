import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Grid, Typography, Box } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { useStyles } from '../../App';
import { TContactInputs } from '../../types';
import { setContactsActionCreator } from '../../redux';

export const Contacts = (): JSX.Element => {
    const classes = useStyles();
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
    // TODO: Complete the required patterns
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
                            required: 'This field is required',
                        })}
                        id='phone'
                        name='phone'
                        type='text'
                        label='Mobile*'
                    />
                    {
                        errors.phone &&
                        <Box component='span' className={classes.error}>
                            {errors.phone.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('additionalPhone', {
                            required: 'This field is required'
                        })}
                        id='additionalPhone'
                        name='additionalPhone'
                        type='text'
                        label='Additional Phone*'
                    />
                    {
                        errors.additionalPhone &&
                        <Box component='span' className={classes.error}>
                            {errors.additionalPhone.message}
                        </Box>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('email', {
                            required: 'This field is required'
                        })}
                        id='email'
                        name='email'
                        type='email'
                        label='E-mail*'
                    />
                    {
                        errors.email &&
                        <Box component='span' className={classes.error}>
                            {errors.email.message}
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
