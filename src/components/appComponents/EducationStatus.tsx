import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form } from '../customComponents/Form';
import { Grid, Typography, FormLabel } from '@material-ui/core';
import { BlueCheckBox } from '../customComponents/BlueCheckBox';
import { Input } from '../customComponents/Input';
import { useStyles } from '../../App';
import { NextButton } from '../customComponents/NextButton';

type TInputs = {
    dependent: string,
};

export const EducationStatus = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();

    const [checkBoxState, setCheckBoxState] = useState({
        degree: false,
        higher: false,
        secondHigher: false,
        incompleteHigher: false,
        specializedSecondary: false,
        secondary: false,
        lowerSecondary: false,
        married: false,
        single: false,
        divorced: false,
        civilMarriage: false,
        other: false,
    });

    const checkBoxHandleChange = (event: React.BaseSyntheticEvent): void => {
        setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
        return;
    }

    const onSubmit = (data: {}): void => {
        console.log('Education and Family Status: ', data, {...checkBoxState});
        history.push('/Employment');
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
                <Grid item xs={12}>
                    <FormLabel component='label'>Education Status</FormLabel>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='degree'
                            label='Degree/MBA'
                            checked={checkBoxState.degree}
                            onChange={checkBoxHandleChange}
                            name='degree'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='higher'
                            label='Higher Education'
                            checked={checkBoxState.higher}
                            onChange={checkBoxHandleChange}
                            name='higher'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='secondHigher'
                            label='Second Higher'
                            checked={checkBoxState.secondHigher}
                            onChange={checkBoxHandleChange}
                            name='secondHigher'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='incompleteHigher'
                            label='Incomplete Higher'
                            checked={checkBoxState.incompleteHigher}
                            onChange={checkBoxHandleChange}
                            name='incompleteHigher'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='specializedSecondary'
                            label='Specialized Secondary'
                            checked={checkBoxState.specializedSecondary}
                            onChange={checkBoxHandleChange}
                            name='specializedSecondary'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='secondary'
                            label='Secondary'
                            checked={checkBoxState.secondary}
                            onChange={checkBoxHandleChange}
                            name='secondary'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='lowerSecondary'
                            label='Lower Secondary'
                            checked={checkBoxState.lowerSecondary}
                            onChange={checkBoxHandleChange}
                            name='lowerSecondary'
                            color='primary'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component='label'>Family Status</FormLabel>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='married'
                            label='Married'
                            checked={checkBoxState.married}
                            onChange={checkBoxHandleChange}
                            name='married'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='single'
                            label='Single'
                            checked={checkBoxState.single}
                            onChange={checkBoxHandleChange}
                            name='single'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='divorced'
                            label='Divorced'
                            checked={checkBoxState.divorced}
                            onChange={checkBoxHandleChange}
                            name='divorced'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='civilMarriage'
                            label='Civil Marriage'
                            checked={checkBoxState.civilMarriage}
                            onChange={checkBoxHandleChange}
                            name='civilMarriage'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='other'
                            label='Other'
                            checked={checkBoxState.other}
                            onChange={checkBoxHandleChange}
                            name='other'
                            color='primary'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('dependent', {
                            required: 'This field is required',
                            pattern: {
                                value: /[0-9]/,
                                message: 'This field is number only'
                            }
                        })}
                        id='dependent'
                        type='text'
                        name='dependent'
                        label='How many dependents do you support?'
                    />
                    {
                        errors.dependent &&
                        <span className={classes.error}>
                            {errors.dependent.message}
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