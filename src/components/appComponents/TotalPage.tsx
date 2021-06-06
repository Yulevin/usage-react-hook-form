import React from 'react';
import { useStore } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { useGlobalStyles } from '../../App';
import { getTotalPageInfo } from '../utilities/getTotalPageInfo';

export const TotalPage = (): JSX.Element => {
    const classes = useGlobalStyles();
    const store = useStore();

    const generalInformationFields: string[] = [...store.getState()].find(
        item => item.id === 'generalInformation'
    );
    const contactsFields: string[] = [...store.getState()].find(
        item => item.id === 'contacts'
    );
    const registrationAddressFields: string[] = [...store.getState()].find(
        item => item.id === 'registrationAddress'
    );
    const actualLocationAddressFields: string[] = [...store.getState()].find(
        item => item.id === 'actualLocationAddress'
    );
    const educationStatusFields: string[] = [...store.getState()].find(
        item => item.id === 'educationStatus'
    );
    const employmentFields: string[] = [...store.getState()].find(
        item => item.id === 'employment'
    );
    const mainPlaceOfWorkFields: string[] = [...store.getState()].find(
        item => item.id === 'mainPlaceOfWork'
    );
    const moonthlyIncomeFields: string[] = [...store.getState()].find(
        item => item.id === 'moonthlyIncome'
    );
    const creditParametersFields: string[] = [...store.getState()].find(
        item => item.id === 'creditParameters'
    );

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography component='h2' variant='h6' align='center'>
                    Is this information correct?
                </Typography>
            </Grid>

            <Grid container item spacing={1} xs={12} id='totalPageContent'>
                <Grid item xs={12} id='generalInformationTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        General Information
                    </Typography>
                </Grid>
                {getTotalPageInfo(generalInformationFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
                <Grid item xs={12} id='contactsTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Contacts
                    </Typography>
                </Grid>
                {getTotalPageInfo(contactsFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
                <Grid item xs={12} id='registrationAddressTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Registration Address
                    </Typography>
                </Grid>
                {getTotalPageInfo(registrationAddressFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
                <Grid item xs={12} id='actualLocationAddressTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Actual Location Address
                    </Typography>
                </Grid>
                {getTotalPageInfo(actualLocationAddressFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
                <Grid item xs={12} id='educationStatusTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Education and Family Status
                    </Typography>
                </Grid>
                {getTotalPageInfo(educationStatusFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
                <Grid item xs={12} id='employmentTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Employment
                    </Typography>
                </Grid>
                {getTotalPageInfo(employmentFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
                <Grid item xs={12} id='mainPlaceOfWorkTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Main Place of Work
                    </Typography>
                </Grid>
                {getTotalPageInfo(mainPlaceOfWorkFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
                <Grid item xs={12} id='moonthlyIncomeTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Moonthly Income
                    </Typography>
                </Grid>
                {getTotalPageInfo(moonthlyIncomeFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
                <Grid item xs={12} id='creditParametersTitle'>
                    <Typography variant='subtitle1' color='textSecondary'>
                        Credit Parameters
                    </Typography>
                </Grid>
                {getTotalPageInfo(creditParametersFields).map((unit, index) => (
                    unit ?
                        <Grid item xs={12} sm={6} key={index} className={classes.totalContainer}>
                            <Typography>{unit}</Typography>
                        </Grid>
                    : null
                ))}
            </Grid> 
        </Grid>
    );
}
