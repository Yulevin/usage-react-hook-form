import React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../../App';

export const TotalPage = () => {
    const classes = useStyles();

    return (
        <Grid item xs={1} className={classes.container}>
                <h1>Finally</h1>
        </Grid>
    );
}