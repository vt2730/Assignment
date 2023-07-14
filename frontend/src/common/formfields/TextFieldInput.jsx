
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import styles from "./Index.module.css";
import { ErrorOutlined } from "@mui/icons-material";

function TextFieldInput(props) {
    /**
     * clickEnter for enter button
     * @param e
    */

    let elemRefs = [];
    const clickEnter = (e) => {
        if (e.key === "Enter") {
            // Do code here
            e.preventDefault();
            props.clickEnter();
        }
    };

    const onChange = (event) => {
        if (props.onChange) {
            let value = event.target.value;
            let newValue = value.replace(/^\s+/g, "");
            event.target.value = newValue;
            // event.target.selectionStart = start;
            props.onChange(event);
        }
    }
    const autoTab = (e) => {
        const TAB_KEY = 9;
        let tabindex = e.target.getAttribute("tabIndex") || 0;
        tabindex = Number(tabindex);
        let elem = null;
        if (e.keyCode !== TAB_KEY) {
            elem = tabindex < elemRefs.length - 1 && elemRefs[tabindex + 1];
        }
        if (elem) {
            elem.current.focus();
        }
    };
    return (
        <div className={`relative flex flex-col ${props.extracls} textFieldCss `}>
            <label className={`text-[14px] flex flex-col ${props.lableCls}`}>
                {props.label}
            </label>
            <TextField
                autoFocus={props.autoFocus}
                onChange={(e) => onChange(e)}
                disabled={props.disabled}
                id={props.id}
                variant={props.variant ? props.variant : "outlined"}
                label={props.inputLabel}
                defaultValue={props.defaultValue}
                className={` ${styles.textfieldclass}  ${props.textnewclass ? props.textnewclass : ""
                    } `}
                type={props.type}
                autoComplete={props.autoComplete || "off"}
                name={props.textinputname}
                multiline={props.multiline}
                rows={props.rows}
                fullWidth={props.fullwidthState}
                placeholder={props.placeholder}
                error={props.error}
                value={props.value}
                inputProps={props.inputProps}
                helperText={props.helperText}
                onKeyPress={(e) => clickEnter(e)}
                required={props.required}
                data-cy={props.dataCy}
                onKeyUp={(e) => {
                    autoTab(e)
                    // props.keyDownHandler ? props.keyDownHandler(e) : () => { }
                }}
                // onKeyDown={(e: any) => {
                //     props.keyDownHandler ? props.keyDownHandler(e) : () => { }
                // }}
                InputProps={{
                    endAdornment: props.email ? (
                        <InputAdornment position="end">
                            <ErrorOutlined className="erroricon" />
                        </InputAdornment>
                    ) : props.endAdornment,
                    startAdornment: props.startAdorment === "dollar" ? (
                        <InputAdornment position="start">
                            $
                        </InputAdornment>
                    ) : (props.startAdorment === "url" &&
                        <InputAdornment position="start">
                            <p className="text-inv-blue">{window.location.origin}/</p>
                        </InputAdornment>
                    ),
                }}
            />
            <p className="text-red-500">
                {props.errText}
            </p>
        </div>
    );
}

export default TextFieldInput;