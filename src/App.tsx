import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { GeneralInformation } from './components/appComponents/GeneralInformation';
import { Contacts } from './components/appComponents/Contacts';
import { RegistrationAddress } from './components/appComponents/RegistrationAddress';
import { ActualLocationAddress } from './components/appComponents/ActualLocationAddress';
import { EducationStatus } from './components/appComponents/EducationStatus';
import { Employment } from './components/appComponents/Employment';
import { MainPlaceOfWork } from './components/appComponents/MainPlaceOfWork';
import { MonthlyIncome } from './components/appComponents/MonthlyIncome';
import { CreditParameters } from './components/appComponents/CreditParameters';
import { TotalPage } from './components/appComponents/TotalPage';

enum palleteEnum {
    colorGrey = 'rgb(82, 86, 89)',
    colorWhite = 'rgb(255, 255, 255)',
    colorBackgroundHeader = 'rgb(36, 64, 94)',
    colorComment = 'rgba(255, 255, 255, 0.7)',
    colorWrapper = 'rgba(82, 86, 89, .1)',
};

export const useGlobalStyles = makeStyles(() =>
    createStyles({
        container: {
            margin: 'auto',
            width: '90%',
        },
        header: {
            backgroundColor: `${palleteEnum.colorBackgroundHeader}`,
            color: `${palleteEnum.colorWhite}`,
            borderRadius: '4px',
        },
        comment: {
            color: `${palleteEnum.colorComment}`,
        },
        error: {
            textAlign: 'center',
            color: 'maroon',
            fontWeight: 'bold',
        },
        totalContainer: {
            border: `1px solid ${palleteEnum.colorWrapper}`,
        },
    }),
);

const body = document.querySelector('body');
if (body) body.style.backgroundColor = palleteEnum.colorGrey;

export default function App() {
    return (
        <Container maxWidth='md'>
            <Paper elevation={8} style={{ margin: '50px 0px' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography
                            component='h1'
                            variant='h4'
                            style={{ margin: '50px 0 25px 0' }}
                            align='center'
                        >
                            Credit Application Form
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} component='main'>
                        <Router>
                            <Switch>
                                <Route exact path='/' component={GeneralInformation} />
                                <Route path='/Contacts' component={Contacts} />
                                <Route path='/RegistrationAddress' component={RegistrationAddress} />
                                <Route path='/ActualLocationAddress' component={ActualLocationAddress} />
                                <Route path='/EducationStatus' component={EducationStatus} />
                                <Route path='/Employment' component={Employment} />
                                <Route path='/MainPlaceOfWork' component={MainPlaceOfWork} />
                                <Route path='/MonthlyIncome' component={MonthlyIncome} />
                                <Route path='/CreditParameters' component={CreditParameters} />
                                <Route path='/TotalPage' component={TotalPage} />
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
