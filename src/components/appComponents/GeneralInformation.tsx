import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Grid, Box, FormControl, FormLabel, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { RadioButton } from '../customComponents/RadioButton';
import { useStyles } from '../../App';
import { TGeneralInformationInputs } from '../../types'
import { setGeneralInformationActionCreator } from '../../redux';

export const GeneralInformation = (): JSX.Element => {
    const classes = useStyles();
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
    // TODO: Fix the container
    // TODO: Complete the required patterns
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        General Information
                    </Typography>
                </Grid>
                {/*General Information Content*/}
                <Grid container item xs={12} id='generalInformationContainer'>
                    <Grid item xs={12} id='generalInformationContent'>
                        <Input
                            {...register('fullName', {
                                required: '⚠️ This field is required',
                                pattern: {
                                    value: /^([а-яё\s]+|[a-z\s]+)$/iu,
                                    message: 'This input is letter only'
                                }
                            })}
                            id='fullName'
                            name='fullName'
                            type='text'
                            label='Full name*'
                        />
                        {
                            errors.fullName &&
                            <Box component='span' className={classes.error}>
                                {errors.fullName.message}
                            </Box>
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
                                    required: '⚠️ This field is required'
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
                                <Box component='span' className={classes.error}>
                                    {errors.gender.message}
                                </Box>
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
                                <Box component='span' className={classes.error}>
                                    {errors.citizenship.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component='label'>Date of Birth*</FormLabel>
                        <Input
                            {...register('birthDay', {
                                required: '⚠️ This field is required'
                            })}
                            id='birthDay'
                            name='birthDay'
                            type='text'
                            label='DD.MM.YYYY'
                        />
                        {
                            errors.birthDay &&
                            <Box component='span' className={classes.error}>
                                {errors.birthDay.message}
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('placeOfBirth')}
                            id='placeOfBirth'
                            name='placeOfBirth'
                            type='text'
                            label='Place of Birth'
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} id='generalInformationText'>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quam excepturi cumque sit, quibusdam itaque tempore,
                            corrupti quaerat possimus, in suscipit soluta quo tenetur
                            beatae commodi assumenda voluptatum perferendis dolore vitae!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl component='fieldset'>
                            <RadioGroup {...register('bankruptcy')}>
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
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                {/*Passport Content*/}
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component='label'>Passport*</FormLabel>
                        <Input
                            {...register('passport', {
                                required: '⚠️ This field is required'
                            })}
                            id='passport'
                            name='passport'
                            type='text'
                            label='SSSS NNNNNN'
                        />
                        {
                            errors.passport &&
                            <Box component='span' className={classes.error}>
                                {errors.passport.message}
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component='label'>Department Code*</FormLabel>
                        <Input
                            {...register('codeDepartment', {
                                required: '⚠️ This field is required'
                            })}
                            id='codeDepartment'
                            name='codeDepartment'
                            type='text'
                            label='NNN-NNN'
                        />
                        {
                            errors.codeDepartment &&
                            <Box component='span' className={classes.error}>
                                {errors.codeDepartment.message}
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormLabel component='label'>Date Of Issue*</FormLabel>
                        <Input
                            {...register('dateOfPassport', {
                                required: '⚠️ This field is required'
                            })}
                            id='dateOfPassport'
                            name='dateOfPassport'
                            type='text'
                            label='DD.MM.YYYY'
                        />
                        {
                            errors.dateOfPassport &&
                            <Box component='span' className={classes.error}>
                                {errors.dateOfPassport.message}
                            </Box>
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
                        label='Issuing Authority'
                    />
                    {
                        errors.issuingAuthority &&
                        <Box component='span' className={classes.error}>
                            {errors.issuingAuthority.message}
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
