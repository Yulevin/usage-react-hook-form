import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Typography, FormLabel, FormControl, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { RadioButton } from '../customComponents/RadioButton';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { CustomButton as BackButton } from '../customComponents/CustomButton';
import { useGlobalStyles } from '../../App';
import { TMainPlaceOfWorkInputs } from '../../types';
import { setMainPlaceOfWorkActionCreator } from '../../redux';
import { getRadioButtonContent } from '../utilities/getRadioButtonContent';

export const MainPlaceOfWork = (): JSX.Element => {
    const classes = useGlobalStyles();
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

    const handleBackButton = () => {
        history.goBack();
    }

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
                                required: '⚠️ This field is required'
                            })}
                            id='organizationName'
                            type='text'
                            name='organizationName'
                            label='Name of Organization*'
                        />
                        {
                            errors.organizationName &&
                            <Typography className={classes.error}>
                                {errors.organizationName.message}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            {...register('taxNumber', {
                                required: '⚠️ This field is required',
                            })}
                            id='taxNumber'
                            type='text'
                            name='taxNumber'
                            label='Tax Number*'
                        />
                        {
                            errors.taxNumber &&
                            <Typography className={classes.error}>
                                {errors.taxNumber.message}
                            </Typography>
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
                                required: '⚠️ This field is required'
                            })}
                            id='workPhone'
                            name='workPhone'
                            type='text'
                            label='Work Phone*'
                        />
                        {
                            errors.workPhone &&
                            <Typography className={classes.error}>
                                {errors.workPhone.message}
                            </Typography>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('workAddress', {
                                required: '⚠️ This field is required'
                            })}
                            id='workAdress'
                            name='workAddress'
                            type='text'
                            label='Work Address*'
                        />
                        {
                            errors.workAddress &&
                            <Typography className={classes.error}>
                                {errors.workAddress.message}
                            </Typography>
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
                                {getRadioButtonContent('typeOwnership').map(
                                    content => (
                                        content ?
                                            <RadioButton
                                                key={content.index}
                                                id={content.id}
                                                name={content.name}
                                                value={content.value}
                                                label={content.label}
                                            />
                                        : null
                                    )
                                )}
                            </RadioGroup>
                            {
                                errors.typeOwnership &&
                                <Typography className={classes.error}>
                                    {errors.typeOwnership.message}
                                </Typography>
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
                                {getRadioButtonContent('typeActivities').map(
                                    content => (
                                        content ?
                                            <Grid item xs={12} sm={4} key={content.index}>
                                                <RadioButton
                                                    id={content.id}
                                                    name={content.name}
                                                    value={content.value}
                                                    label={content.label}
                                                />
                                            </Grid>
                                        : null
                                    )
                                )}
                            </RadioGroup>
                            {
                                errors.typeActivities &&
                                <Typography className={classes.error}>
                                    {errors.typeActivities.message}
                                </Typography>
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
                                {getRadioButtonContent('typePositionHeld').map(
                                    content => (
                                        content ?
                                            <Grid item xs={12} sm={6} key={content.index}>
                                                <RadioButton
                                                    id={content.id}
                                                    name={content.name}
                                                    value={content.value}
                                                    label={content.label}
                                                />
                                            </Grid>
                                        : null
                                    )
                                )}
                            </RadioGroup>
                            {
                                errors.typePositionHeld &&
                                <Typography className={classes.error}>
                                    {errors.typePositionHeld.message}
                                </Typography>
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
                                {getRadioButtonContent('workExperiencePositionHeld').map(
                                    content => (
                                        content ?
                                            <Grid item xs={12} sm={6} key={content.index}>
                                                <RadioButton
                                                    id={content.id}
                                                    name={content.name}
                                                    value={content.value}
                                                    label={content.label}
                                                />
                                            </Grid>
                                        : null
                                    )
                                )}
                            </RadioGroup>
                            {
                                errors.workExperiencePositionHeld &&
                                <Typography className={classes.error}>
                                    {errors.workExperiencePositionHeld.message}
                                </Typography>
                            }
                        </FormControl>
                    </Grid>
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
