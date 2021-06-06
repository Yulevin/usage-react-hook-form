import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Grid, Typography, FormLabel, FormControl, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { RadioButton } from '../customComponents/RadioButton';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { CustomButton as BackButton } from '../customComponents/CustomButton';
import { useGlobalStyles } from '../../App';
import { TEducationStatusInputs } from '../../types';
import { setEducationStatusActionCreator } from '../../redux';
import { getRadioButtonContent } from '../utilities/getRadioButtonContent';

export const EducationStatus = (): JSX.Element => {
    const classes = useGlobalStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TEducationStatusInputs>({
        mode: 'onBlur',
    });

    const educationStatusId = { id: 'educationStatus' };

    const onSubmit = (inputsState: TEducationStatusInputs): void => {
        dispatch(setEducationStatusActionCreator({
            ...educationStatusId,
            ...inputsState,
        }));
        history.push('/Employment');
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
                        Education and Family Status
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} id='educationFamilyStatusContainer'>
                    <Grid item xs={12} id='educationFamilyStatusText'>
                        <Typography>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quo fugiat vero tempore dicta, maiores, quisquam nobis quod
                            adipisci officia fugit cumque delectus optio. Veritatis incidunt
                            a commodi voluptate, dolores maxime!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} id='educationStatusContent'>
                        <FormLabel component='legend' color='secondary'>
                            Education status*
                        </FormLabel>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('educationStatus', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {getRadioButtonContent('educationStatus').map(
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
                                errors.educationStatus &&
                                <Typography className={classes.error}>
                                    {errors.educationStatus.message}
                                </Typography>
                            }
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} id='FamilyStatusContent'>
                        <FormLabel component='legend' color='secondary'>
                            Family status*
                        </FormLabel>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('familyStatus', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {getRadioButtonContent('familyStatus').map(
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
                                errors.familyStatus &&
                                <Typography className={classes.error}>
                                    {errors.familyStatus.message}
                                </Typography>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} id='dependentStatus'>
                    <Input
                        {...register('dependent', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /^[0-9][0-9]?[0-9]?$/,
                                message: '⚠️ This field is no more 3 numbers'
                            }
                        })}
                        id='dependent'
                        name='dependent'
                        type='text'
                        label='Do you support dependents?*'
                    />
                    {
                        errors.dependent &&
                        <Typography className={classes.error}>
                            {errors.dependent.message}
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