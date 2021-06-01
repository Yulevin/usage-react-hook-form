import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../../App';
import { TRootState } from '../../types';

export const TotalPage = (): JSX.Element => {
    const classes = useStyles();
    const store = useSelector((state: TRootState): TRootState => state);

    const generalInformationFields = { ...store.generalInformation };
    const contactFields = { ...store.contacts };
    const registrationAddressFields = { ...store.registrationAddress };
    const actualLocationFields = { ...store.actualLocationAddress };
    const educationStatusFields = { ...store.educationStatus };
    // const employmentFields = { ...store.employment };
    // const mainPlaceOfWorkFields = { ...store.mainPlaceOfWork };
    // const moonthlyIncomeFields = { ...store.moonthlyIncome };
    // const creditParameterFields = { ...store.creditParameters };

    // General Information
    generalInformationFields.fullName = 'Levin Yuri Aleksandrovich';
    generalInformationFields.gender = 'Male';
    generalInformationFields.citizenship = 'Russia';
    generalInformationFields.birthDay = '20.11.86';
    generalInformationFields.placeOfBirth = 'Russia, Krasnoyarskiy Kray, Norilsk, Baumanskaya 29A-53';
    generalInformationFields.bankruptcy = 'Yes';
    generalInformationFields.passport = '2222 233456';
    generalInformationFields.codeDepartment = '230-345';
    generalInformationFields.dateOfPassport = '14.05.2007';
    generalInformationFields.issuingAuthority = '14.05.2007';
    // Contacts
    contactFields.phone = '+79112992707';
    contactFields.additionalPhone = '+79000000000';
    contactFields.email = 'yulevinpost@gmail.com';
    //Registration Address
    registrationAddressFields.region = 'Krasnoyarskiy Kray';
    registrationAddressFields.city = 'Norilsk';
    registrationAddressFields.street = 'Baumanskaya 29A-53';
    registrationAddressFields.houseNumber = '29A';
    registrationAddressFields.houseBuilding = 'A';
    registrationAddressFields.apartment = '53';
    // Actual Location Address
    actualLocationFields.actualPostcode = '234 567';
    actualLocationFields.actualRegion = 'Krasnoyarskiy Kray';
    actualLocationFields.actualCity = 'Norilsk';
    actualLocationFields.actualStreet = 'Baumanskaya 29A-53';
    actualLocationFields.actualHouseNumber = '29';
    actualLocationFields.actualHouseBuilding = 'A';
    actualLocationFields.actualApartmentNumber = '53';
    // actualLocationFields.lessThanSixMonth = true;
    // Education and Family Status
    // educationStatusFields.degree = true;
    educationStatusFields.dependent = '2';

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography component='h2' variant='h6' align='center'>
                    Is this information correct?
                </Typography>
            </Grid>
            {   // General Information
                generalInformationFields.fullName ?
                    <Grid item xs={12}>
                        <Typography>
                            Full name: {generalInformationFields.fullName}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.fullname')
            }
            {
                generalInformationFields.prevName ?
                    <Grid item xs={12}>
                        <Typography>
                            Previous name: {generalInformationFields.prevName}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.prevName')
            }
            {
                generalInformationFields.gender ?
                    <Grid item xs={12}>
                        <Typography>
                            Gender: {generalInformationFields.gender}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.gender')
            }
            {
                generalInformationFields.citizenship ?
                    <Grid item xs={12}>
                        <Typography>
                            Citizenship: {generalInformationFields.citizenship}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.citizenship')

            }
            {
                generalInformationFields.birthDay ?
                    <Grid item xs={12}>
                        <Typography>
                            Date of birth: {generalInformationFields.birthDay}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.birthDay')

            }
            {
                generalInformationFields.placeOfBirth ?
                    <Grid item xs={12}>
                        <Typography>
                            Place of birth: {generalInformationFields.placeOfBirth}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.placeOfBirth')

            }
            {
                generalInformationFields.bankruptcy ?
                    <Grid item xs={12}>
                        <Typography>
                            There was a bankruptcy case: {generalInformationFields.bankruptcy}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.bankruptcy')
                
            }
            {
                generalInformationFields.passport ?
                    <Grid item xs={12}>
                        <Typography>
                            Passport number: {generalInformationFields.passport}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.passport')
            }
            {
                generalInformationFields.codeDepartment ?
                    <Grid item xs={12}>
                        <Typography>
                            Department code: {generalInformationFields.codeDepartment}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.passport')

            }
            {
                generalInformationFields.dateOfPassport ?
                    <Grid item xs={12}>
                        <Typography>
                            Date of issue: {generalInformationFields.dateOfPassport}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.dateOfPassport')
            }
            {
                generalInformationFields.issuingAuthority ?
                    <Grid item xs={12}>
                        <Typography>
                            Issuing authority: {generalInformationFields.issuingAuthority}
                        </Typography>
                    </Grid>
                : console.log('Without generalInformationFields.issuingAuthority')
            }
            {   // Contacts
                contactFields.phone ?
                    <Grid item xs={12}>
                        <Typography>
                            Mobile: {contactFields.phone}
                        </Typography>
                    </Grid>
                : console.log('Without contactFields.phone')
            }
            {
                contactFields.additionalPhone ?
                    <Grid item xs={12}>
                        <Typography>
                            Additional phone: {contactFields.additionalPhone}
                        </Typography>
                    </Grid>
                : console.log('Without contactFields.additionalPhone')
            }
            {
                contactFields.email ?
                    <Grid item xs={12}>
                        <Typography>
                            E-Mail: {contactFields.email}
                        </Typography>
                    </Grid>
                : console.log('Without contactFields.email')
            }
            {   // Registration Address
                registrationAddressFields.postCode ?
                    <Grid item xs={12}>
                        <Typography>
                            Post code: {registrationAddressFields.postCode}
                        </Typography>
                    </Grid>
                : console.log('Without registrationAddressFields.postCode')
            }
            {
                registrationAddressFields.region ?
                    <Grid item xs={12}>
                        <Typography>
                            Region: {registrationAddressFields.region}
                        </Typography>
                    </Grid>
                : console.log('Without registrationAddressFields.region')
            }
            {
                registrationAddressFields.city ?
                    <Grid item xs={12}>
                        <Typography>
                            City: {registrationAddressFields.city}
                        </Typography>
                    </Grid>
                : console.log('Without registrationAddressFields.city')
            }
            {
                registrationAddressFields.street ?
                    <Grid item xs={12}>
                        <Typography>
                            Street: {registrationAddressFields.street}
                        </Typography>
                    </Grid>
                : console.log('Without registrationAddressFields.street')
            }
            {
                registrationAddressFields.houseNumber ?
                    <Grid item xs={12}>
                        <Typography>
                            House number: {registrationAddressFields.houseNumber}
                        </Typography>
                    </Grid>
                : console.log('Without registrationAddressFields.houseNumber')
            }
            {
                registrationAddressFields.houseBuilding ?
                    <Grid item xs={12}>
                        <Typography>
                            House building: {registrationAddressFields.houseBuilding}
                        </Typography>
                    </Grid>
                : console.log('Without registrationAddressFields.houseBuilding')
            }
            {
                registrationAddressFields.apartment ?
                    <Grid item xs={12}>
                        <Typography>
                            Apartment: {registrationAddressFields.apartment}
                        </Typography>
                    </Grid>
                : console.log('Without registrationAddressFields.apartment')
            }
            {   // Actual Location Address
                actualLocationFields.actualPostcode ?
                    <Grid item xs={12}>
                        <Typography>
                            Actual location postcode: {actualLocationFields.actualPostcode}
                        </Typography>
                    </Grid>
                : console.log('Without actualLocationFields.actualPostcode')
            }
            {
                actualLocationFields.actualRegion ?
                    <Grid item xs={12}>
                        <Typography>
                            Actual location region: {actualLocationFields.actualRegion}
                        </Typography>
                    </Grid>
                : console.log('Without actualLocationFields.actualRegion')
            }
            {
                actualLocationFields.actualCity ?
                    <Grid item xs={12}>
                        <Typography>
                            Actual location city: {actualLocationFields.actualCity}
                        </Typography>
                    </Grid>
                : console.log('Without actualLocationFields.actualCity')
            }
            {
                actualLocationFields.actualStreet ?
                    <Grid item xs={12}>
                        <Typography>
                            Actual location street: {actualLocationFields.actualStreet}
                        </Typography>
                    </Grid>
                : console.log('Without actualLocationFields.actualStreet')
            }
            {
                actualLocationFields.actualHouseNumber ?
                    <Grid item xs={12}>
                        <Typography>
                            Actual location house number: {actualLocationFields.actualHouseNumber}
                        </Typography>
                    </Grid>
                : console.log('Without actualLocationFields.actualHouseNumber')
            }
            {
                actualLocationFields.actualHouseBuilding ?
                    <Grid item xs={12}>
                        <Typography>
                            Actual location house building: {actualLocationFields.actualHouseBuilding}
                        </Typography>
                    </Grid>
                : console.log('Without actualLocationFields.actualHouseBuilding')
            }
            {
                actualLocationFields.actualApartmentNumber ?
                    <Grid item xs={12}>
                        <Typography>
                            Actual location apartment number: {actualLocationFields.actualApartmentNumber}
                        </Typography>
                    </Grid>
                : console.log('Without actualHouseBuilding.actualApartmentNumber')
            }
            {/* {
                <GetActualLocationLivingTimeRegion /> ?
                    <Grid container item xs={12}>
                        <Grid item xs={6}>
                            <Typography component='span'>
                                Actual location living time region: 
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <GetActualLocationLivingTimeRegion />
                        </Grid>
                    </Grid>
                : console.log('Without component: <GetActualLocationLivingTimeRegion />')
            } */}
            {/* {
                <GetEducationStatus /> ?
                    <Grid container item xs={12}>
                        <Grid item xs={6}>
                            <Typography component='span'>
                                Education status:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <GetEducationStatus />
                        </Grid>
                    </Grid>
                : console.log('Without component: <GetEducationStatus />')
                
            } */}
            {   // Education and Family Status
                educationStatusFields.dependent ?
                    <Grid item xs={12}>
                        <Typography>
                            You support dependents: {educationStatusFields.dependent}
                        </Typography>
                    </Grid>
                : console.log('Without educationStatusFields.dependent')
            }
        </Grid>
    );
}
