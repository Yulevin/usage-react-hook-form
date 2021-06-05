import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type TChildrenProps = {
    children: React.ReactNode,
    onSubmit: (event: React.BaseSyntheticEvent) => void,
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margniTop: theme.spacing(1),
    },
}));

export const Form = ({ children, ...props }: TChildrenProps) => {
    const classes = useStyles();

    return (
        <form noValidate {...props} className={classes.root}>{children}</form>
    );
}
