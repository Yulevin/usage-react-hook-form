import React from "react";
import { SubmitHandler } from 'react-hook-form';
import { CssBaseline, Container, Paper, Typography, Grid, Box } from "@material-ui/core";
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { makeStyles, withStyles, createStyles, Theme } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import GeneralInformation from './components/GeneralInformation';
import Contacts from './components/Contacts';
import RegistrationAddress from './components/RegistrationAddress';
import ActualLocationAddress from "./components/ActualLocationAddress";
import EducationStatus from "./components/EducationStatus";
import Employment from "./components/Employment";
import MainPlaceOfWork from "./components/MainPlaceOfWork";
import MonthlyIncome from "./components/MonthlyIncome";
import CreditParameters from "./components/CreditParameters";

export enum palleteEnum {
    colorGrey = "rgb(82, 86, 89)",
    colorWhite = "rgb(255, 255, 255)",
    colorBackgroundHeader = "rgb(36, 64, 94)",
    colorComment = "rgba(255, 255, 255, 0.7)",
};

export type TInputs = {
    name: string,
    prevName: string,
    birthDay: number,
    placeOfBirth: string,
    passport: number | string,
    codeDepartment: number,
    date: number,
    issuingAuthority: string,
};

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: "20px 0 20px 0",
            width: "100%",
        },
        container: {
            margin: "auto",
            width: "90%",
        },
        header: {
            backgroundColor: `${palleteEnum.colorBackgroundHeader}`,
            color: `${palleteEnum.colorWhite}`,
            borderRadius: "4px",
        },
        comment: {
            color: `${palleteEnum.colorComment}`,
        },
    }),
);

export const BlueCheckbox = withStyles({
    root: {
        color: blue[900],
        '&$checked': {
            color: blue[900],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

let body = document.querySelector("body");
if (body) body.style.backgroundColor = palleteEnum.colorGrey;

export const onSubmit: SubmitHandler<TInputs> = data => {
    alert(JSON.stringify(data));
};

export default function App() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Paper elevation={8} style={{ "margin": "50px 0px" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4" 
                                style={{ "margin": "50px 0 25px 0" }} 
                                align="center"
                            >
                                Заявление на предоставление кредита
                            </Typography>
                        </Grid>
                        <GeneralInformation />
                        <Contacts />
                        <RegistrationAddress />
                        <ActualLocationAddress />
                        <EducationStatus />
                        <Employment />
                        <MainPlaceOfWork />
                        <MonthlyIncome />
                        <CreditParameters />
                        <Grid item xs={12} sm={12}>
                            <Box className={classes.container}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                    size="large"
                                >
                                    ОТПРАВИТЬ
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
