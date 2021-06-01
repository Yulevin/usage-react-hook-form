import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Box, Typography, FormLabel, FormControl, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { RadioButton } from '../customComponents/RadioButton';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { useStyles } from '../../App';
import { setEmploymentActionCreator } from '../../redux';
import { TEmploymentInputs } from '../../types';

export const Employment = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm<TEmploymentInputs>({
        mode: 'onBlur',
    });

    const employmentId = { id: 'employment' };

    const onSubmit = (inputsState: TEmploymentInputs): void => {
        dispatch(setEmploymentActionCreator({
            ...employmentId,
            ...inputsState,
        }));
        history.push('/MainPlaceOfWork');
        return;
    }

    const totalWorkExperienceContent = [
        { index: 0, name: 'totalWorkExperience', id: 'lessThanSixMonth', value: 'Less than 6 months', label: 'Less than 6 months' },
        { index: 1, name: 'totalWorkExperience', id: 'fromSixMonthToOneYear', value: 'Less than 6 months', label: 'From 6 months to 1 year' },
        { index: 2, name: 'totalWorkExperience', id: 'fromOneToThreeYears', value: 'From 1 to 3 years', label: 'From 1 to 3 years' },
        { index: 3, name: 'totalWorkExperience', id: 'fromThreeToTenYears', value: 'From 3 to 10 years', label: 'From 3 to 10 years' },
        { index: 4, name: 'totalWorkExperience', id: 'overTenYears', value: 'Over 10 years', label: 'Over 10 years' },
    ];

    // TODO: add text instead lorem
    // TODO: grid layout
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Employment
                    </Typography>
                </Grid>
                <Grid item xs={12} id='totalWorkText'>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Tempora magni voluptatem saepe voluptates earum. Doloribus
                        possimus eos voluptatibus, assumenda id sint error dolor
                        cupiditate explicabo nihil dicta, soluta optio nostrum.
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} id='totalWorkContainer'>
                    <Grid item xs={12} id='totalWorkExperienceTitle'>
                        <FormLabel component='label' color='secondary'>
                            Total work experience*
                        </FormLabel>
                    </Grid>
                    <Grid item xs={12} id='totalWorkExperienceContent'>
                        <FormControl component='fieldset'>
                            <RadioGroup row
                                {...register('totalWorkExperience', {
                                    required: '⚠️ This field is required'
                                })}
                            >
                                {totalWorkExperienceContent.map(({ id, name, value, label, index }) => (
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
                                errors.totalWorkExperience &&
                                <Box component='span' className={classes.error}>
                                    {errors.totalWorkExperience.message}
                                </Box>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid>
        </Form >
    );
}
