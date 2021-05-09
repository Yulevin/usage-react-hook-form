import React from 'react';
import { 
    Typography, Grid,
    Radio, RadioGroup, FormControlLabel, FormControl, FormLabel 
} from '@material-ui/core';
import { palleteEnum } from '../App';

export default function GeneralInformation() {
    const [value, setValue] = React.useState(null);
    
    const handleChange = (event: React.BaseSyntheticEvent) => {
        setValue(event.target.value);
    };

    return (
        <Grid container item style={{ "margin": "auto", "width": "90%" }}>
            <Grid item xs={12} style={{ "backgroundColor": `${palleteEnum.colorBackgroundHeader}`, "color": `${palleteEnum.colorWhite}`, "borderRadius": "4px" }}>
                <Typography variant="h6" align="center">ОБЩАЯ ИНФОРМАЦИЯ</Typography>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={4}>
                    <Typography>Фамилия Имя Отчество</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography align="center">...</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>Предыдущее ФИО</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography align="center">...</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Пол</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="Female" control={<Radio />} label="Женский" />
                            <FormControlLabel value="Male" control={<Radio />} label="Мужской" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Гражданство</FormLabel>
                        <RadioGroup aria-label="citizenship" name="citizenship1" value={value} onChange={handleChange}>
                            <FormControlLabel value="RF" control={<Radio />} label="РФ" />
                            <FormControlLabel value="Otherwise" control={<Radio />} label="Иное" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography paragraph>Дата рождения</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography align="center">...</Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography>Место рождения</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography align="center">...</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Typography>
                        В течение последних 5 лет в
                        отношении меня
                        завершалась процедура
                        реализации имущества или
                        прекращалось
                        производство по делу о
                        банкротстве в ходе такой
                        процедуры
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="bankruptcy" name="bankruptcy1" value={value} onChange={handleChange}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Да" />
                            <FormControlLabel value="No" control={<Radio />} label="Нет" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography>Серия и номер паспорта</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography align="center">...</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography>Код подразделения</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography align="center">...</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography>Дата выдачи</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography align="center">...</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>Орган, выдавший документ</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography align="center">...</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
