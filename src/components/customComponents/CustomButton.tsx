import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

type TChildrenProps = {
    children: React.ReactNode,
    type: string | any,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const CustomButton = ({children, ...props}: TChildrenProps) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.root}
            variant='contained'
            color='primary'
            fullWidth
            {...props}
        >
            {children}
        </Button>
    );
}
