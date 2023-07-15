
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {/* SelectChangeEvent */ } from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import PropTypes from 'prop-types'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function DropDown(props) {
    
    const onChange = (e) => {
        props.onChange(e);
    };
    return (
        <>
            <div className={`textfieldinput flex flex-col textFieldCss ${props.extracls && props.extracls
                }`}>
                <label className={`text-[14px] text-left ${props.olabelcls && props.olabelcls}`}>
                    {props.olabel}
                </label>
                <FormControl sx={{ minWidth: 140 }}
                    className={`${props.DropDownCls}`}
                >
                    <Select
                        // multiple
                        displayEmpty
                        value={props.value}
                        name={props.dropDownName}
                        id={props.id}
                        disabled={props.disabled}
                        className={`h-[2.7rem] inputCss ${props.textnewclass}`}
                        onChange={(e) => onChange(e)}
                        input={<OutlinedInput />}
                        tabIndex={props.tabIndex}
                        error={props.error}
                        defaultValue={props.defaultValue}
                    >
                        <MenuItem disabled value="">
                            <p className='!text-[#00000066] !font-serif !text-base'>{props.placeholder}</p>
                        </MenuItem>
                        {props?.selectOption && props?.selectOption?.length > 0 &&
                            props?.selectOption?.map((item, idx) => (
                                <MenuItem
                                    key={idx}
                                    value={item.value}
                                // style={getStyles(item, personName, theme)}
                                >
                                    {item.name}
                                </MenuItem>
                            ))}
                    </Select>
                    <FormHelperText className='!text-red-500'>
                        {props.helperText}
                    </FormHelperText>
                </FormControl>
            </div>
        </>
    );
}
