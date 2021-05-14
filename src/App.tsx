import React from "react";
import { useForm } from 'react-hook-form';
import { CssBaseline, Container, Paper, Typography, Grid, Box, Button, Icon } from "@material-ui/core";
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { makeStyles, withStyles, createStyles, Theme } from "@material-ui/core/styles";
import { blue } from '@material-ui/core/colors';
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
    // General Information Types
    name: string,
    prevName: string,
    citizenship: string,
    gender: string,
    bankruptcy: string,
    birthDay: number,
    placeOfBirth: string,
    passport: string,
    codeDepartment: number,
    date: number,
    issuingAuthority: string,
    
    // Contacts Types
    phone: number,
    additionalPhone: number,
    email: string,

    // Registration Address Types
    postcode: number,
    region: string,
    city: string,
    street: string,
    houseNumber: number | string,
    houseBuilding: number | string,
    apartmentNumber: number,

    // Actual Location Address Types
    actualPostcode: number,
    actualRegion: string,
    actualCity: string,
    actualStreet: string,
    actualHouseNumber: number | string,
    actualHouseBuilding: number | string,
    actualApartmentNumber: number,

    // Education Status Types
    dependent: number,
    
    // 
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

const onSubmit = (data: any) => {
    console.log(data);
};

export default function App() {
    const classes = useStyles();

    const { handleSubmit } = useForm<TInputs>();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Paper elevation={8} style={{ "margin": "50px 0px" }}>
                    <Grid container>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                        type="submit"
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
                        </form>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
