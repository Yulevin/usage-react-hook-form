import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Grid, Typography, FormLabel } from '@material-ui/core';
import { Input } from '../customComponents/Input';
import { Form } from '../customComponents/Form';
import { BlueCheckBox } from '../customComponents/BlueCheckBox';
import { useStyles } from '../../App';
import { NextButton } from '../customComponents/NextButton';

type TInputs = {
    organizationName: string,
    taxNumber: string,
    webSite: string,
    workPhone: string,
    workAdress: string,
    chief: string,
};

export const MainPlaceOfWork = () => {
    const classes = useStyles();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
    const [checkBoxState, setCheckBoxState] = useState({
        privateEnterprise: false,
        state: false,
        individual: false,
        production: false,
        trade: false,
        services: false,
        IT: false,
        culture: false,
        militaryForces: false,
        transport: false,
        building: false,
        agriculture: false,
        education: false,
        medecine: false,
        science: false,
        lawEnforcement: false,
        privateSecurity: false,
        jurisprudence: false,
        finance: false,
        other: false,
        organizationLeadership: false,
        departmentManagement: false,
        selfEmployed: false,
        specialist: false,
        lessThanFourMonth: false,
        fromFourToSixMonth: false,
        fromSixToOneYear: false,
        fromOneToThreeYear: false,
        fromThreeToTenYear: false,
        overTenYears: false,
    });

    const handleChange = (event: React.BaseSyntheticEvent) => {
        setCheckBoxState({ ...checkBoxState, [event.target.name]: event.target.checked });
        return;
    };

    const onSubmit = (data: {}) => {
        console.log('Main Place of Work: ', data, { ...checkBoxState });
        history.push('/MonthlyIncome');
        return;
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item spacing={1} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Typography component='h2' variant='h6' align='center'>
                        Main Place of Work
                    </Typography>
                </Grid>
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
                        <span className={classes.error}>
                            {errors.organizationName.message}
                        </span>
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
                        <span className={classes.error}>
                            {errors.taxNumber.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        {...register('webSite')}
                        id='webSite'
                        type='text'
                        name='webSite'
                        label='Web Site'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('workPhone', {
                            required: 'This field is required'
                        })}
                        id='workPhone'
                        type='text'
                        name='workPhone'
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
                        {...register('workAdress', {
                            required: 'This field is required'
                        })}
                        id='workAdress'
                        type='text'
                        name='workAdress'
                        label='Work Address*'
                    />
                    {
                        errors.workAdress &&
                        <span className={classes.error}>
                            {errors.workAdress.message}
                        </span>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Input
                        {...register('chief')}
                        id='chief'
                        type='text'
                        name='chief'
                        label='Name of the Chief Executive'
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component='label'>Type of Ownership</FormLabel>
                </Grid>
                <Grid container spacing={1} item xs={12}>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='privateEnterprise'
                            label='Private Enterprise'
                            checked={checkBoxState.privateEnterprise}
                            onChange={handleChange}
                            name='privateEnterprise'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='state'
                            label='State'
                            checked={checkBoxState.state}
                            onChange={handleChange}
                            name='state'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='individual'
                            label='Individual'
                            checked={checkBoxState.individual}
                            onChange={handleChange}
                            name='individual'
                            color='primary'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component='label'>Type of Activities</FormLabel>
                </Grid>
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='production'
                            label='Production'
                            checked={checkBoxState.production}
                            onChange={handleChange}
                            name='production'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='trade'
                            label='Trade'
                            checked={checkBoxState.trade}
                            onChange={handleChange}
                            name='trade'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='services'
                            label='Services'
                            checked={checkBoxState.services}
                            onChange={handleChange}
                            name='services'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='it'
                            label='IT'
                            checked={checkBoxState.IT}
                            onChange={handleChange}
                            name='IT'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id=''
                            label='Culture'
                            checked={checkBoxState.culture}
                            onChange={handleChange}
                            name='culture'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='militaryForces'
                            label='Military Forces'
                            checked={checkBoxState.militaryForces}
                            onChange={handleChange}
                            name='militaryForces'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='transport'
                            label='Transport'
                            checked={checkBoxState.transport}
                            onChange={handleChange}
                            name='transport'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='building'
                            label='Building'
                            checked={checkBoxState.building}
                            onChange={handleChange}
                            name='building'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='agriculture'
                            label='Agriculture'
                            checked={checkBoxState.agriculture}
                            onChange={handleChange}
                            name='agriculture'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='education'
                            label='Education'
                            checked={checkBoxState.education}
                            onChange={handleChange}
                            name='education'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='medecine'
                            label='Medecine'
                            checked={checkBoxState.medecine}
                            onChange={handleChange}
                            name='medecine'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='science'
                            label='Science'
                            checked={checkBoxState.science}
                            onChange={handleChange}
                            name='science'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='lawEnforcement'
                            label='Law Enforcement'
                            checked={checkBoxState.lawEnforcement}
                            onChange={handleChange}
                            name='law'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='privateSecurity'
                            label='Private Security'
                            checked={checkBoxState.privateSecurity}
                            onChange={handleChange}
                            name='privateSecurity'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='jurisprudence'
                            label='Jurisprudence'
                            checked={checkBoxState.jurisprudence}
                            onChange={handleChange}
                            name='jurisprudence'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='finance'
                            label='Finance'
                            checked={checkBoxState.finance}
                            onChange={handleChange}
                            name='finance'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='other'
                            label='Other'
                            checked={checkBoxState.other}
                            onChange={handleChange}
                            name='other'
                            color='primary'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Type of position held</FormLabel>
                </Grid>
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12} sm={6}>
                        <BlueCheckBox
                            id='organizationLeadership'
                            label='Organization Leadership'
                            checked={checkBoxState.organizationLeadership}
                            onChange={handleChange}
                            name='organizationLeadership'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <BlueCheckBox
                            id='departmentManagement'
                            label='Department Management'
                            checked={checkBoxState.departmentManagement}
                            onChange={handleChange}
                            name='departmentManagement'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <BlueCheckBox
                            id='selfEmployed'
                            label='Self Employed'
                            checked={checkBoxState.selfEmployed}
                            onChange={handleChange}
                            name='selfEmployed'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <BlueCheckBox
                            id='specialist'
                            label='Specialist'
                            checked={checkBoxState.specialist}
                            onChange={handleChange}
                            name='specialist'
                            color='primary'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Work experience in the position held</FormLabel>
                </Grid>
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='lessThanFourMonth'
                            label='Less Than Four Month'
                            checked={checkBoxState.lessThanFourMonth}
                            onChange={handleChange}
                            name='lessThanFourMonth'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromFourToSixMonth'
                            label='From Four to Six Month'
                            checked={checkBoxState.fromFourToSixMonth}
                            onChange={handleChange}
                            name='fromFourToSixMonth'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromSixToOneYear'
                            label='From Six to One Year'
                            checked={checkBoxState.fromSixToOneYear}
                            onChange={handleChange}
                            name='fromSixToOneYear'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromOneToThreeYear'
                            label='From One to Three Year'
                            checked={checkBoxState.fromOneToThreeYear}
                            onChange={handleChange}
                            name='fromOneToThreeYear'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id='fromThreeToTenYear'
                            label='From Three to Ten Year'
                            checked={checkBoxState.fromThreeToTenYear}
                            onChange={handleChange}
                            name='fromThreeToTenYear'
                            color='primary'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <BlueCheckBox
                            id=''
                            label='Over Ten Years'
                            checked={checkBoxState.overTenYears}
                            onChange={handleChange}
                            name='overTenYears'
                            color='primary'
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <NextButton>Next</NextButton>
                </Grid>
            </Grid>
        </Form>
    );
}
