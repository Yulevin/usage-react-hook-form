import React from 'react';
import { useForm } from "react-hook-form";
import { Typography, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Input } from '@material-ui/core';
import { onSubmit, TInputs, useStyles } from '../App';

export default function GeneralInformation() {
    const classes = useStyles();
    
    const [value, setValue] = React.useState(null);
    const { register, handleSubmit } = useForm<TInputs>();

    const handleChange = (event: React.BaseSyntheticEvent) => {
        setValue(event.target.value);
    };

    return (
        <Grid container item className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">ОБЩАЯ ИНФОРМАЦИЯ</Typography>
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={4}>
                    <Typography>Фамилия Имя Отчество</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("name")} fullWidth={true} />
                    </form>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>Предыдущее ФИО</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("prevName")} fullWidth={true} placeholder="Оставить пустым если не меняли" />
                    </form>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" color="secondary">Пол</FormLabel>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("birthDay")} fullWidth={true} />
                    </form>                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography>Место рождения</Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("placeOfBirth")} fullWidth={true} />
                    </form>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("passport")} fullWidth={true} />
                    </form>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography>Код подразделения</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input {...register("codeDepartment")} fullWidth={true} />
                        </form>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography>Дата выдачи</Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("date")} fullWidth={true} />
                    </form>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography>Орган, выдавший документ</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("issuingAuthority")} fullWidth={true} />
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}
