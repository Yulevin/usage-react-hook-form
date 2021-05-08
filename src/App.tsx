import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    CssBaseline, Container, Paper, Typography, Grid, Box,
    Radio, RadioGroup, FormControlLabel, FormControl, FormLabel
} from "@material-ui/core";


const useStyles = makeStyles({
    outBorder: {
        border: "1px outset rgb(0, 0, 0)",
    },
    inBorder: {
        border: "1px inset rgb(0, 0, 0)",
    }
});

let body = document.querySelector("body");
if (body) body.style.backgroundColor = "rgb(82, 86, 89)";

export default function App() {
    const classes = useStyles();

    const [value, setValue] = React.useState("female");

    const handleChange = (event: React.BaseSyntheticEvent) => {
        setValue(event.target.value);
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <Paper elevation={1} style={{ "margin": "5px" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h5" style={{ "marginTop": "50px" }} align="center">Заявление на предоставление кредита</Typography>
                            <Grid container style={{ "margin": "auto", "width": "90%" }}>
                                <Grid item xs={12} style={{ "backgroundColor": "rgb(36, 64, 94)", "color": "rgb(255, 255, 255)" }}>
                                    <Typography variant="h6" align="center">Общая информация</Typography>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography>Фамилия Имя Отчество</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography align="center">...</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>Предыдущее ФИО</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography align="center">...</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography component="p">Пол</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                <FormControlLabel value="Female" control={<Radio />} label="Женский" />
                                                <FormControlLabel value="Male" control={<Radio />} label="Мужской" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography component="p">Гражданство</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                <FormControlLabel value="RF" control={<Radio />} label="РФ" />
                                                <FormControlLabel value="Otherwise" control={<Radio />} label="Иное" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={2}></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
}
