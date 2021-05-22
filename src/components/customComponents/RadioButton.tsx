import React, { forwardRef } from 'react';
import { Radio, FormControlLabel } from '@material-ui/core';

type FormControlLabelProps = {
    id: string,
    name?: string,
    label: string,
    value: string,
};

export const RadioButton = forwardRef((props: FormControlLabelProps, ref) => {
    return (
        <FormControlLabel
            inputRef={ref}
            control={<Radio />}
            {...props}
        />
    );
});
