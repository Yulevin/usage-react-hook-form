import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Container, Paper, Typography, Grid } from "@material-ui/core";
import GeneralInformation from './components/GeneralInformation';
import Contacts from './components/Contacts';
import RegistrationAddress from './components/RegistrationAddress';
import ActualLocationAddress from "./components/ActualLocationAddress";
import EducationStatus from "./components/EducationStatus";
import Employment from "./components/Employment";
import MainPlaceOfWork from "./components/MainPlaceOfWork";

export enum palleteEnum {
    colorGrey = "rgb(82, 86, 89)",
    colorWhite = "rgb(255, 255, 255)",
    colorBackgroundHeader = "rgb(36, 64, 94)",
    colorComment = "rgba(255, 255, 255, 0.7)"
}

export const useStyles = makeStyles({
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
});

let body = document.querySelector("body");
if (body) body.style.backgroundColor = palleteEnum.colorGrey;

export default function App() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Paper elevation={8} style={{ "margin": "50px 0px" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h5" style={{ "margin": "50px 0 25px 0" }} align="center">Заявление на предоставление кредита</Typography>
                        </Grid>
                        <GeneralInformation />
                        <Contacts />
                        <RegistrationAddress />
                        <ActualLocationAddress />
                        <EducationStatus />
                        <Employment />
                        <MainPlaceOfWork />
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
