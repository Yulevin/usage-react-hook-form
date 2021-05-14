import React from 'react';
import { useForm } from "react-hook-form";
import { Typography, Grid, Radio, RadioGroup, FormControl, FormControlLabel, Input, FormLabel } from '@material-ui/core';
import { TInputs, useStyles } from '../App';

export default function GeneralInformation() {
    const classes = useStyles();

    const { register } = useForm<TInputs>();

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">ОБЩАЯ ИНФОРМАЦИЯ</Typography>
            </Grid>
            <Grid container item spacing={1} xs={12}>
                <Grid item xs={12}>
                    <FormLabel component='label'>Фамилия Имя Отчество</FormLabel>
                    <Input {...register("name")} fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormLabel component='label'>Предыдущее ФИО</FormLabel>
                    <Input {...register("prevName")} fullWidth={true} placeholder="оставить пустым если не меняли" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" color="secondary">Пол</FormLabel>
                        <RadioGroup aria-label="gender" {...register("gender")}>
                            <FormControlLabel value="Female" control={<Radio />} label="Женский" />
                            <FormControlLabel value="Male" control={<Radio />} label="Мужской" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Гражданство</FormLabel>
                        <RadioGroup aria-label="citizenship" {...register("citizenship")} >
                            <FormControlLabel value="RF" control={<Radio />} label="РФ" />
                            <FormControlLabel value="Otherwise" control={<Radio />} label="Иное" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='label'>Дата рождения</FormLabel>
                    <Input {...register("birthDay")} fullWidth={true} placeholder={"дд.мм.гггг"} />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component='label'>Место рождения</FormLabel>
                    <Input {...register("placeOfBirth")} fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Typography paragraph>
                        В течение последних 5 лет в отношении меня
                        завершалась процедура реализации имущества или
                        прекращалось производство по делу о банкротстве
                        в ходе такой процедуры
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="bankruptcy" {...register("bankruptcy")}>
                            <FormControlLabel value="Yes" control={<Radio />} label="Да" />
                            <FormControlLabel value="No" control={<Radio />} label="Нет" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='label'>Серия и номер паспорта</FormLabel>
                    <Input {...register("passport")} fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <FormLabel component='label'>Код подразделения</FormLabel>
                    <Input {...register("codeDepartment")} fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormLabel component='label'>Дата выдачи</FormLabel>
                    <Input {...register("date")} fullWidth={true} />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component='label'>Орган, выдавший документ</FormLabel>
                    <Input {...register("issuingAuthority")} fullWidth={true} />
                </Grid>
            </Grid>
        </Grid>
    );
}
