import React from 'react';
import { FormControlLabel, Grid, Typography } from '@material-ui/core';
import { useStyles, BlueCheckbox } from '../App';

export default function MainPlaceOfWork() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        privateEnterprise: false,
        state: false,
        individual: false,
        production: false,
        trade: false,
        services: false,
        IT: false,
        culture: false,
        militaryForces: false,
        transport: false,
        building: false,
        agriculture: false,
        education: false,
        medecine: false,
        science: false,
        law: false,
        privateSecurity: false,
        jurisprudence: false,
        finance: false,
        other: false,
        organizationLeadership: false,
        departmentManagement: false,
        selfEmployed: false,
        specialist: false,
        lessThanFourMonth: false,
        fromFourToSixMonth: false,
        fromSixToOneYear: false,
        fromOneToThreeYear: false,
        fromThreeToTenYear: false,
        overTenYears: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Grid container item spacing={1} className={classes.container}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h6" align="center">
                    ОСНОВНОЕ МЕСТО РАБОТЫ
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>Наименование организации-работодателя</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>ИНН организации</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Веб-сайт</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>Рабочий телефон</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>Адрес места работы</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography>ФИО руководителя</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Typography align="center">...</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Форма собственности</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.privateEnterprise}
                                onChange={handleChange}
                                name="privateEnterprise"
                                color="primary"
                            />
                        }
                        label="Частное предприятие"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.state}
                                onChange={handleChange}
                                name="state"
                                color="primary"
                            />
                        }
                        label="Государственное"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.individual}
                                onChange={handleChange}
                                name="individual"
                                color="primary"
                            />
                        }
                        label="Индивидуальное"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Род деятельности</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.production}
                                onChange={handleChange}
                                name="production"
                                color="primary"
                            />
                        }
                        label="Производство"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.trade}
                                onChange={handleChange}
                                name="trade"
                                color="primary"
                            />
                        }
                        label="Торговля"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.services}
                                onChange={handleChange}
                                name="services"
                                color="primary"
                            />
                        }
                        label="Услуги"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.IT}
                                onChange={handleChange}
                                name="IT"
                                color="primary"
                            />
                        }
                        label="Информационные технологии"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.culture}
                                onChange={handleChange}
                                name="culture"
                                color="primary"
                            />
                        }
                        label="Культура"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.militaryForces}
                                onChange={handleChange}
                                name="militaryForces"
                                color="primary"
                            />
                        }
                        label="Вооруженные силы"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.transport}
                                onChange={handleChange}
                                name="transport"
                                color="primary"
                            />
                        }
                        label="Транспорт"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.building}
                                onChange={handleChange}
                                name="building"
                                color="primary"
                            />
                        }
                        label="Строительство"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.agriculture}
                                onChange={handleChange}
                                name="agriculture"
                                color="primary"
                            />
                        }
                        label="Сельское хозяйство"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.education}
                                onChange={handleChange}
                                name="education"
                                color="primary"
                            />
                        }
                        label="Образование"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.medecine}
                                onChange={handleChange}
                                name="medecine"
                                color="primary"
                            />
                        }
                        label="Медицина"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.science}
                                onChange={handleChange}
                                name="science"
                                color="primary"
                            />
                        }
                        label="Наука"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.law}
                                onChange={handleChange}
                                name="law"
                                color="primary"
                            />
                        }
                        label="Правоохранительные органы"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.privateSecurity}
                                onChange={handleChange}
                                name="privateSecurity"
                                color="primary"
                            />
                        }
                        label="Частное охранное предприятие"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.jurisprudence}
                                onChange={handleChange}
                                name="jurisprudence"
                                color="primary"
                            />
                        }
                        label="Юриспруденция"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.finance}
                                onChange={handleChange}
                                name="finance"
                                color="primary"
                            />
                        }
                        label="Финансы"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.other}
                                onChange={handleChange}
                                name="other"
                                color="primary"
                            />
                        }
                        label="Другое"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Тип занимаемой должности</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.organizationLeadership}
                                onChange={handleChange}
                                name="organizationLeadership"
                                color="primary"
                            />
                        }
                        label="Руководство организации"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.departmentManagement}
                                onChange={handleChange}
                                name="departmentManagement"
                                color="primary"
                            />
                        }
                        label="Руководство подразделения"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.selfEmployed}
                                onChange={handleChange}
                                name="selfEmployed"
                                color="primary"
                            />
                        }
                        label="Частный предприниматель"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.specialist}
                                onChange={handleChange}
                                name="specialist"
                                color="primary"
                            />
                        }
                        label="Специалист"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Typography>Стаж работы на данном месте</Typography>
            </Grid>
            <Grid container item xs={12} sm={9}>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.lessThanFourMonth}
                                onChange={handleChange}
                                name="lessThanFourMonth"
                                color="primary"
                            />
                        }
                        label="менее 4 месяцев"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.fromFourToSixMonth}
                                onChange={handleChange}
                                name="fromFourToSixMonth"
                                color="primary"
                            />
                        }
                        label="от 4 до 6 месяцев"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.fromSixToOneYear}
                                onChange={handleChange}
                                name="fromSixToOneYear"
                                color="primary"
                            />
                        }
                        label="от 6 месяцев до 1 года"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.fromOneToThreeYear}
                                onChange={handleChange}
                                name="fromOneToThreeYear"
                                color="primary"
                            />
                        }
                        label="от 1 до 3 лет"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.fromThreeToTenYear}
                                onChange={handleChange}
                                name="fromThreeToTenYear"
                                color="primary"
                            />
                        }
                        label="от 3 до 10 лет"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <BlueCheckbox
                                checked={state.overTenYears}
                                onChange={handleChange}
                                name="overTenYears"
                                color="primary"
                            />
                        }
                        label="свыше 10 лет"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
