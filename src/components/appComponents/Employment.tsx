import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Typography, FormLabel, FormControl, RadioGroup } from '@material-ui/core';
import { Form } from '../customComponents/Form';
import { RadioButton } from '../customComponents/RadioButton';
import { CustomButton as NextButton } from '../customComponents/CustomButton';
import { CustomButton as BackButton } from '../customComponents/CustomButton';
import { useGlobalStyles } from '../../App';
import { setEmploymentActionCreator } from '../../redux';
import { TEmploymentInputs } from '../../types';
import { getRadioButtonContent } from '../utilities/getRadioButtonContent';

export const Employment = (): JSX.Element => {
    const classes = useGlobalStyles();
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

    const handleBackButton = (): void => {
        history.goBack();
    }

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
                                {getRadioButtonContent('totalWorkExperience').map(
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
                                errors.totalWorkExperience &&
                                <Typography className={classes.error}>
                                    {errors.totalWorkExperience.message}
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
        </Form >
    );
}
