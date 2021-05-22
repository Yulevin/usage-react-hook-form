import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';

type TInputAttributes = {
    id: string,
    name: string,
    type: string,
    label?: string,
    placeholder?: string,
}

export const Input = forwardRef<HTMLInputElement, TInputAttributes>((props, ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef={ref}
            fullWidth
            {...props}
        />
    );
});
