import React from 'react';
import { useHistory } from 'react-router';
import { Typography, Grid, FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { NextButton } from '../customComponents/NextButton';
import { RadioButton } from '../customComponents/RadioButton';
import { useStyles } from '../../App';

type TInputs = {
    fullName: string,
    prevName: string,
    citizenship: string,
    gender: string,
    bankruptcy: string,
    birthDay: string,
    placeOfBirth: string,
    passport: string,
    codeDepartment: string,
    dateOfPassport: string,
    issuingAuthority: string,
};

export const GeneralInformation = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>({
        mode: 'onBlur',
    });

    const onSubmit = (data: {}) => {
        console.log('General Information: ', data);
        history.push('/Contacts');
        return;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        General Information
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('fullName', {
                            required: 'This field is required',
                            pattern: {
                                value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                                message: 'This input is letter only'
                            }
                        })}
                        id='fullName'
                        type='text'
                        label='Full name*'
                    />
                    {
                        errors.fullName &&
                        <span className={classes.error}>
                            {errors.fullName.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('prevName')}
                        id='prevName'
                        type='text'
                        label='Previous full name'
                        placeholder="leave the field blank if you don't"
                    />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' color='secondary'>Gender*</FormLabel>
                        <RadioGroup
                            {...register('gender', {
                                required: 'This field is required'
                            })}
                        >
                            <RadioButton id='Female' value='Female' label='Female' />
                            <RadioButton id='Male' value='Male' label='Male' />
                            {
                                errors.gender &&
                                <span className={classes.error}>
                                    {errors.gender.message}
                                </span>
                            }
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <FormControl component='fieldset'>
                        <FormLabel component='legend'>Citizenship*</FormLabel>
                        <RadioGroup
                            {...register('citizenship', {
                                required: 'This field is required'
                            })}
                        >
                            <RadioButton id='Russia' value='Russia' label='Russia' />
                            <RadioButton id='Other' value='Other' label='Other' />
                            {
                                errors.citizenship &&
                                <span className={classes.error}>
                                    {errors.citizenship.message}
                                </span>
                            }
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='label'>Date of Birth*</FormLabel>
                    <Input
                        {...register('birthDay', {
                            required: 'This field is required'
                        })}
                        id='birthDay'
                        type='text'
                        label='DD.MM.YYYY'
                    />
                    {
                        errors.birthDay &&
                        <span className={classes.error}>
                            {errors.birthDay.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('placeOfBirth')}
                        id='placeOfBirth'
                        type='text'
                        label='Place of Birth'
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography paragraph>
                        Over the past 5 years, the procedure for the sale of
                        property has been completed in relation to me,
                        or the bankruptcy proceedings have been
                        terminated in the course of such a procedure?
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl component='fieldset'>
                        <RadioGroup {...register('bankruptcy')}>
                            <RadioButton id='Yes' value='Yes' label='Yes' />
                            <RadioButton id='No' value='No' label='No' />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='label'>Series And Number Of Passport*</FormLabel>
                    <Input
                        {...register('passport', {
                            required: 'This field is required'
                        })}
                        id='passport'
                        type='text'
                        label='SSSS NNNNNN'
                    />
                    {
                        errors.passport &&
                        <span className={classes.error}>
                            {errors.passport.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='label'>Department Code*</FormLabel>
                    <Input
                        {...register('codeDepartment', {
                            required: 'This field is required'
                        })}
                        id='codeDepartment'
                        type='text'
                        label='NNN-NNN'
                    />
                    {
                        errors.codeDepartment &&
                        <span className={classes.error}>
                            {errors.codeDepartment.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='label'>Date Of Issue*</FormLabel>
                    <Input
                        {...register('dateOfPassport', {
                            required: 'This field is required'
                        })}
                        id='dateOfPassport'
                        type='text'
                        label='DD.MM.YYYY'
                    />
                    {
                        errors.dateOfPassport &&
                        <span className={classes.error}>
                            {errors.dateOfPassport.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('issuingAuthority', {
                            required: 'This field is required'
                        })}
                        id='issuingAuthority'
                        type='text'
                        label='Issuing Authority'
                    />
                    {
                        errors.issuingAuthority &&
                        <span className={classes.error}>
                            {errors.issuingAuthority.message}
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
