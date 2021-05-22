import React, {forwardRef} from 'react';
import { FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { blue } from '@material-ui/core/colors';

type FormControlLabelProps = {
    id: string,
    name?: string,
    label: string,
    value?: string,
    checked: boolean,
    color?: string,
    onChange: (event: React.ChangeEvent<CheckboxProps>) => void,
};

const CustomCheckBox = withStyles({
    root: {
        color: blue[900],
        '&$checked': {
            color: blue[900],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color='default' {...props} />);

export const BlueCheckBox = forwardRef((props: FormControlLabelProps, ref) => {
    return (
        <>
            <FormControlLabel
                inputRef={ref}
                control={<CustomCheckBox />}
                {...props}
            />
        </>
    );
});
