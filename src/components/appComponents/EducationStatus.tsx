import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Grid, Typography, FormLabel, Box, FormControl, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { Input } from '../customComponents/Input';
import { RadioButton } from '../customComponents/RadioButton';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { useStyles } from '../../App';
import { TEducationStatusInputs } from '../../types';
import { setEducationStatusActionCreator } from '../../redux';

export const EducationStatus = (): JSX.Element => {
    const classes = useStyles();
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

    const educationStatusContent = [
        { index: 0, name: 'educationStatus', id: 'degree', value: 'Degree/MBA', label: 'Degree/MBA' },
        { index: 1, name: 'educationStatus', id: 'higher', value: 'Higher Education', label: 'Higher Education' },
        { index: 2, name: 'educationStatus', id: 'secondHigher', value: 'Second Education', label: 'Second Education' },
        { index: 3, name: 'educationStatus', id: 'incompleteHigher', value: 'Incomplete Higher', label: 'Incomplete Higher' },
        { index: 4, name: 'educationStatus', id: 'specializedSecondary', value: 'Specialized Secondary', label: 'Specialized Secondary' },
        { index: 5, name: 'educationStatus', id: 'secondary', value: 'Secondary', label: 'Secondary' },
        { index: 6, name: 'educationStatus', id: 'lowerSecondary', value: 'Lower Secondary', label: 'Lower Secondary' },
    ];

    const familyStatusContent = [
        { index: 0, name: 'familyStatus', id: 'married', value: 'Married', label: 'Married' },
        { index: 1, name: 'familyStatus', id: 'single', value: 'Single', label: 'Single' },
        { index: 2, name: 'familyStatus', id: 'divorced', value: 'Divorced', label: 'Divorced' },
        { index: 3, name: 'familyStatus', id: 'civilMarriage', value: 'Civil Marriage', label: 'Civil Marriage' },
        { index: 4, name: 'familyStatus', id: 'other', value: 'Other', label: 'Other' },
    ];

    // TODO: Complete the required patterns
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
                            Education Status*
                        </FormLabel>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('educationStatus', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {educationStatusContent.map(({ id, name, value, label, index }) => (
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
                                errors.educationStatus &&
                                <Box component='span' className={classes.error}>
                                    {errors.educationStatus.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} id='FamilyStatusContent'>
                        <FormLabel component='legend' color='secondary'>
                            Family Status*
                        </FormLabel>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('familyStatus', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {familyStatusContent.map(({ id, name, value, label, index }) => (
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
                                errors.familyStatus &&
                                <Box component='span' className={classes.error}>
                                    {errors.familyStatus.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12} id='dependentStatus'>
                    <Input
                        {...register('dependent', {
                            required: '⚠️ This field is required',
                            pattern: {
                                value: /[0-9]/,
                                message: '⚠️ This field is number only'
                            }
                        })}
                        id='dependent'
                        name='dependent'
                        type='text'
                        label='How many dependents do you support?'
                    />
                    {
                        errors.dependent &&
                        <Box component='span' className={classes.error}>
                            {errors.dependent.message}
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