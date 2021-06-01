import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Box, Typography, FormLabel, FormControl, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { RadioButton } from '../customComponents/RadioButton';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { useStyles } from '../../App';
import { TMainPlaceOfWorkInputs } from '../../types';
import { setMainPlaceOfWorkActionCreator } from '../../redux';

export const MainPlaceOfWork = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TMainPlaceOfWorkInputs>({
        mode: 'onBlur',
    });

    const mainPlaceOfWorkId = { id: 'mainPlaceOfWork' };

    const onSubmit = (inputsState: TMainPlaceOfWorkInputs): void => {
        dispatch(setMainPlaceOfWorkActionCreator({
            ...mainPlaceOfWorkId,
            ...inputsState,
        }));
        history.push('/MonthlyIncome');
        return;
    }

    const typeOwnershipContent = [
        { index: '0', name: 'typeOwnership', id: 'privateEnterprise', value: 'Private Enterprise', label: 'Private Enterprise' },
        { index: '1', name: 'typeOwnership', id: 'state', value: 'State', label: 'State' },
        { index: '2', name: 'typeOwnership', id: 'individual', value: 'Individual', label: 'Individual' },
    ];

    const typeOfActivitiesContent = [
        { index: 0, name: 'typeActivities', id: 'production', value: 'Production', label: 'Production' },
        { index: 1, name: 'typeActivities', id: 'trade', value: 'Trade', label: 'Trade' },
        { index: 2, name: 'typeActivities', id: 'services', value: 'Services', label: 'Services' },
        { index: 3, name: 'typeActivities', id: 'it', value: 'IT', label: 'IT' },
        { index: 4, name: 'typeActivities', id: 'culture', value: 'Culture', label: 'Culture' },
        { index: 5, name: 'typeActivities', id: 'militaryForces', value: 'Military Forces', label: 'Military Forces' },
        { index: 6, name: 'typeActivities', id: 'transport', value: 'Transport', label: 'Transport' },
        { index: 7, name: 'typeActivities', id: 'building', value: 'Building', label: 'Building' },
        { index: 8, name: 'typeActivities', id: 'agriculture', value: 'Agriculture', label: 'Agriculture' },
        { index: 9, name: 'typeActivities', id: 'education', value: 'Education', label: 'Education' },
        { index: 10, name: 'typeActivities', id: 'medecine', value: 'Medecine', label: 'Medecine' },
        { index: 11, name: 'typeActivities', id: 'science', value: 'Science', label: 'Science' },
        { index: 12, name: 'typeActivities', id: 'lawEnforcement', value: 'Law Enforcement', label: 'Law Enforcement' },
        { index: 13, name: 'typeActivities', id: 'privateSecurity', value: 'Private Security', label: 'Private Security' },
        { index: 14, name: 'typeActivities', id: 'jurisprudence', value: 'Jurisprudence', label: 'Jurisprudence' },
        { index: 15, name: 'typeActivities', id: 'finance', value: 'Finance', label: 'Finance' },
        { index: 16, name: 'typeActivities', id: 'other', value: 'Other', label: 'Other' },
    ];

    const typePositionHeldContent = [
        { index: 0, name: 'typePositionHeld', id: 'organizationLeadership', value: 'Organization Leadership', label: 'Organization Leadership' },
        { index: 1, name: 'typePositionHeld', id: 'departmentManagement', value: 'Department Management', label: 'Department Management' },
        { index: 2, name: 'typePositionHeld', id: 'selfEmployed', value: 'Self Employed', label: 'Self Employed' },
        { index: 3, name: 'typePositionHeld', id: 'specialist', value: 'Specialist', label: 'Specialist' },
    ];

    const workExperiencePositionHeldContent = [
        { index: 0, name: 'workExperiencePositionHeld', id: 'lessThanFourMonth', value: 'Less than 4 months', label: 'Less than 4 months' },
        { index: 1, name: 'workExperiencePositionHeld', id: 'fromFourToSixMonth', value: 'From 4 to 6 months', label: 'From 4 to 6 months' },
        { index: 2, name: 'workExperiencePositionHeld', id: 'fromSixToOneYear', value: 'From 6 months to one year', label: 'From 6 months to 1 year' },
        { index: 3, name: 'workExperiencePositionHeld', id: 'fromOneToThreeYears', value: 'From 1 to 3 years', label: 'From 1 to 3 years' },
        { index: 4, name: 'workExperiencePositionHeld', id: 'fromThreeToTenYears', value: 'From 3 to 10 years', label: 'From 3 to 10 years' },
        { index: 5, name: 'workExperiencePositionHeld', id: 'overTenYears', value: 'Over 10 years', label: 'Over 10 years' },
    ];

    // TODO: Complete the required patterns
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Main Place of Work
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} id='mainPlaceOfWorkContent'>
                    <Grid item xs={12}>
                        <Input
                            {...register('organizationName', {
                                required: 'This field is required'
                            })}
                            id='organizationName'
                            type='text'
                            name='organizationName'
                            label='Name of Organization*'
                        />
                        {
                            errors.organizationName &&
                            <Box component='span' className={classes.error}>
                                {errors.organizationName.message}
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            {...register('taxNumber', {
                                required: 'This field is required',
                            })}
                            id='taxNumber'
                            type='text'
                            name='taxNumber'
                            label='Tax Number*'
                        />
                        {
                            errors.taxNumber &&
                            <Box component='span' className={classes.error}>
                                {errors.taxNumber.message}
                            </Box>
                        }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            {...register('webSite')}
                            id='webSite'
                            name='webSite'
                            type='text'
                            label='Web Site'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('workPhone', {
                                required: 'This field is required'
                            })}
                            id='workPhone'
                            name='workPhone'
                            type='text'
                            label='Work Phone*'
                        />
                        {
                            errors.workPhone &&
                            <span className={classes.error}>
                                {errors.workPhone.message}
                            </span>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('workAddress', {
                                required: 'This field is required'
                            })}
                            id='workAdress'
                            name='workAddress'
                            type='text'
                            label='Work Address*'
                        />
                        {
                            errors.workAddress &&
                            <span className={classes.error}>
                                {errors.workAddress.message}
                            </span>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('chief')}
                            id='chief'
                            name='chief'
                            type='text'
                            label='Name of the Chief Executive'
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} id='typeOwnershipContainer'>
                    <Grid item xs={12} id='typeOwnershipTitle'>
                        <FormLabel component='label'>Type of Ownership*</FormLabel>
                    </Grid>
                    <Grid item xs={12} id='typeOwnershipContent'>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('typeOwnership', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {typeOwnershipContent.map(({ id, name, value, label, index }) => (
                                    <RadioButton
                                        key={index}
                                        id={id}
                                        name={name}
                                        value={value}
                                        label={label}
                                    />
                                ))}
                            </RadioGroup>
                            {
                                errors.typeOwnership &&
                                <Box component='span' className={classes.error}>
                                    {errors.typeOwnership.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12} id='typeOfActivitiesContainer'>
                    <Grid item xs={12} id='typeOfActivitiesTitle'>
                        <FormLabel component='label'>Type of Activities*</FormLabel>
                    </Grid>
                    <Grid container item xs={12} id='typeOfActivitiesContent'>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('typeActivities', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {typeOfActivitiesContent.map(({ id, name, value, label, index }) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <RadioButton
                                            id={id}
                                            name={name}
                                            value={value}
                                            label={label}
                                        />
                                    </Grid>
                                ))}
                            </RadioGroup>
                            {
                                errors.typeActivities &&
                                <Box component='span' className={classes.error}>
                                    {errors.typeActivities.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12} id='typePositionHeldContainer'>
                    <Grid item xs={12} id='typePositionHeldTitle'>
                        <FormLabel component='label'>
                            Type of Position Held*
                        </FormLabel>
                    </Grid>
                    <Grid item xs={12} id='typePositionHeldContent'>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('typePositionHeld', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {typePositionHeldContent.map(({ id, name, value, label, index }) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <RadioButton
                                            id={id}
                                            name={name}
                                            value={value}
                                            label={label}
                                        />
                                    </Grid>
                                ))}
                            </RadioGroup>
                            {
                                errors.typePositionHeld &&
                                <Box component='span' className={classes.error}>
                                    {errors.typePositionHeld.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container item xs={12} id='workExperiencePositionHeldContainer'>
                    <Grid item xs={12} id='workExperiencePositionHeldTitle'>
                        <FormLabel component='label'>
                            Work Experience in the Position Held*
                        </FormLabel>
                    </Grid>
                    <Grid item xs={12} id='workExperiencePositionHeldContent'>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('workExperiencePositionHeld', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {workExperiencePositionHeldContent.map(({ id, name, value, label, index }) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <RadioButton
                                            id={id}
                                            name={name}
                                            value={value}
                                            label={label}
                                        />
                                    </Grid>
                                ))}
                            </RadioGroup>
                            {
                                errors.workExperiencePositionHeld &&
                                <Box component='span' className={classes.error}>
                                    {errors.workExperiencePositionHeld.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid>
        </Form>
    );
}
