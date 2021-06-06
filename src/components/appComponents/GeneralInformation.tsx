import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Grid, FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { RadioButton } from '../customComponents/RadioButton';
import { useGlobalStyles } from '../../App';
import { TGeneralInformationInputs } from '../../types'
import { setGeneralInformationActionCreator } from '../../redux';

export const GeneralInformation = (): JSX.Element => {
    const classes = useGlobalStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TGeneralInformationInputs>({
        mode: 'onBlur',
    });

    const generalInformationId = { id: 'generalInformation' };

    const onSubmit = (inputsState: TGeneralInformationInputs): void => {
        dispatch(setGeneralInformationActionCreator({
            ...generalInformationId,
            ...inputsState,
        }));
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
                <Grid container item xs={12} id='generalInformationContainer'>
                    <Grid item xs={12} id='generalInformationContent'>
                        <Input
                            {...register('fullName', {
                                required: '⚠️ This field is required',
                                pattern: {
                                    value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                                    message: '⚠️ This field is letters only'
                                }
                            })}
                            id='fullName'
                            name='fullName'
                            type='text'
                            label='Full name*'
                        />
                        {
                            errors.fullName &&
                            <Typography className={classes.error}>
                                {errors.fullName.message}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('prevName')}
                            id='prevName'
                            name='prevName'
                            type='text'
                            label='Previous full name'
                            placeholder="leave the field blank if you don't"
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormLabel component='legend' color='secondary'>
                            Gender*
                        </FormLabel>
                        <FormControl component='fieldset'>
                            <RadioGroup
                                {...register('gender', {
                                    required: '⚠️ This field is required',
                                })}
                            >
                                <RadioButton
                                    id='Female'
                                    name='gender'
                                    value='Female'
                                    label='Female'
                                />
                                <RadioButton
                                    id='Male'
                                    name='gender'
                                    value='Male'
                                    label='Male'
                                />
                            </RadioGroup>
                            {
                                errors.gender &&
                                <Typography className={classes.error}>
                                    {errors.gender.message}
                                </Typography>
                            }
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend'>Citizenship*</FormLabel>
                            <RadioGroup
                                {...register('citizenship', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                <RadioButton
                                    id='Russia'
                                    name='citizenship'
                                    value='Russia'
                                    label='Russia'
                                />
                                <RadioButton
                                    id='Other'
                                    name='citizenship'
                                    value='Other'
                                    label='Other'
                                />
                            </RadioGroup>
                            {
                                errors.citizenship &&
                                <Typography className={classes.error}>
                                    {errors.citizenship.message}
                                </Typography>
                            }
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component='label'>Date of birth*</FormLabel>
                        <Input
                            {...register('birthDay', {
                                required: '⚠️ This field is required',
                                pattern: {
                                    value: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
                                    message: '⚠️ Please enter the correct date format',
                                }
                            })}
                            id='birthDay'
                            name='birthDay'
                            type='text'
                            label='DD/MM/YYYY'
                        />
                        {
                            errors.birthDay &&
                            <Typography className={classes.error}>
                                {errors.birthDay.message}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('placeOfBirth')}
                            id='placeOfBirth'
                            name='placeOfBirth'
                            type='text'
                            label='Place of birth'
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quam excepturi cumque sit, quibusdam itaque tempore,
                            corrupti quaerat possimus, in suscipit soluta quo tenetur
                            beatae commodi assumenda voluptatum perferendis dolore vitae!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl component='fieldset'>
                            <FormLabel component='legend'>Bankruptcy*</FormLabel>
                            <RadioGroup 
                                {...register('bankruptcy', {
                                    required: '⚠️ This field is required',
                                })}
                            >
                                <RadioButton
                                    id='Yes'
                                    name='bankruptcy'
                                    value='Yes'
                                    label='Yes'
                                />
                                <RadioButton
                                    id='No'
                                    name='bankruptcy'
                                    value='No'
                                    label='No'
                                />
                                {
                                    errors.bankruptcy &&
                                    <Typography className={classes.error}>
                                        {errors.bankruptcy.message}
                                    </Typography>
                                }
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component='label'>Passport*</FormLabel>
                        <Input
                            {...register('passport', {
                                required: '⚠️ This field is required',
                                pattern: {
                                    value: /^([0-9][0-9][0-9][0-9])[/]([0-9][0-9][0-9][0-9][0-9][0-9])$/,
                                    message: '⚠️ Please enter the correct passport format',
                                }
                            })}
                            id='passport'
                            name='passport'
                            type='text'
                            label='SSSS/NNNNNN'
                        />
                        {
                            errors.passport &&
                            <Typography className={classes.error}>
                                {errors.passport.message}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component='label'>Department code*</FormLabel>
                        <Input
                            {...register('codeDepartment', {
                                required: '⚠️ This field is required',
                                pattern: {
                                    value: /^([0-9][0-9][0-9])[/]([0-9][0-9][0-9])$/,
                                    message: '⚠️ Please enter the correct code format'
                                }
                            })}
                            id='codeDepartment'
                            name='codeDepartment'
                            type='text'
                            label='NNN/NNN'
                        />
                        {
                            errors.codeDepartment &&
                            <Typography className={classes.error}>
                                {errors.codeDepartment.message}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component='label'>Date of issue*</FormLabel>
                        <Input
                            {...register('dateOfPassport', {
                                required: '⚠️ This field is required',
                                pattern: {
                                    value: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
                                    message: '⚠️ Please enter the correct date format'
                                }
                            })}
                            id='dateOfPassport'
                            name='dateOfPassport'
                            type='text'
                            label='DD/MM/YYYY'
                        />
                        {
                            errors.dateOfPassport &&
                            <Typography className={classes.error}>
                                {errors.dateOfPassport.message}
                            </Typography>
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('issuingAuthority', {
                            required: '⚠️ This field is required'
                        })}
                        id='issuingAuthority'
                        name='issuingAuthority'
                        type='text'
                        label='Issuing authority*'
                    />
                    {
                        errors.issuingAuthority &&
                        <Typography className={classes.error}>
                            {errors.issuingAuthority.message}
                        </Typography>
                    }
                </Grid>
                <Grid item xs={12}>
                    <NextButton type='submit'>Next</NextButton>
                </Grid>
            </Grid>
        </Form>
    );
}
