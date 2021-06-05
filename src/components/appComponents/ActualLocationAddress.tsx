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
import { TActualLocationAddressInputs } from '../../types';
import { setActualLocationAddressActionCreator } from '../../redux';
import { getRadioButtonContent } from '../utilities/getRadioButtonContent';

export const ActualLocationAddress = (): JSX.Element => {
    const classes = useGlobalStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm<TActualLocationAddressInputs>({
        mode: 'onBlur',
    });

    const actualLocationId = { id: 'actualLocationAddress' };

    const onSubmit = (inputsState: TActualLocationAddressInputs): void => {
        dispatch(setActualLocationAddressActionCreator({
            ...actualLocationId,
            ...inputsState,
        }));
        history.push('/EducationStatus');
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
                        Actual Location Address
                    </Typography>
                    <Typography
                        component='h3'
                        variant='subtitle1'
                        align='center'
                        className={classes.comment}
                    >
                        to fill, if you live in a different address
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} id='actualLocationContent'>
                    <Grid item xs={12} sm={6}>
                        <Input
                            {...register('actualPostcode')}
                            id='actualPostcode'
                            type='text'
                            name='actualPostcode'
                            label='Actual Postcode'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            {...register('actualRegion')}
                            id='actualRegion'
                            type='text'
                            name='actualRegion'
                            label='Actual Region'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('actualCity')}
                            id='actualCity'
                            type='text'
                            name='actualCity'
                            label='Actual City'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            {...register('actualStreet')}
                            id='actualStreet'
                            type='text'
                            name='actualStreet'
                            label='Actual Street'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Input
                            {...register('actualHouseNumber')}
                            id='actualHouseNumber'
                            type='text'
                            name='actualHouseNumber'
                            label='Actual House Number'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Input
                            {...register('actualHouseBuilding')}
                            id='actualHouseBuilding'
                            type='text'
                            name='actualHouseBuilding'
                            label='Actual House Building'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Input
                            {...register('actualApartmentNumber')}
                            id='actualApartmentNumber'
                            type='text'
                            name='actualApartmentNumber'
                            label='Actual Apartment Number'
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} id='livingTimeRegionContainer'>
                    <Grid item xs={12} id='livingTimeRegionTitle'>
                        <FormLabel component='legend' color='secondary'>
                            Living Time in the Region
                        </FormLabel>
                    </Grid>
                    <Grid item xs={12} id='livingTimeRegionContent'>
                        <FormControl component='fieldset'>
                            <RadioGroup row {...register('livingTimeRegion')}>
                                {getRadioButtonContent('livingTimeRegion').map(
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
