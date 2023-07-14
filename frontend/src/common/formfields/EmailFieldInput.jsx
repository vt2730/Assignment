
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Index.module.css";

const EmailFieldInput = (props) => {

    /**
     * clickEnter for enter button
     * @param e
     */
    const clickEnter = (e) => {
        if (e.key === "Enter") {
            // Do code here
            props.clickEnter();
        }
    };

    const onChange = (event) => {
        props.onChange(event);
    };

    return (
        <div className={`textfieldinput flex flex-col ${props.extracls}`}>
            <label className=" font-medium text-[14px]">{props.label}</label>
            <TextField
                autoFocus={props.autoFocus}
                onChange={onChange}
                disabled={props.disabled}
                id={props.id}
                variant="outlined"
                label={props.inputLabel}
                defaultValue={props.defaultValue}
                className={`${styles.textfieldclass} ${props.textnewclass ? props.textnewclass : ""
                    }`}
                type={"email"}
                autoComplete="off"
                name={props.textinputname}
                multiline={props.multiline}
                rows={props.rows}
                fullWidth={props.fullwidthState}
                placeholder={props.placeholder}
                error={props.error}
                value={props.value}
                onKeyPress={clickEnter}
                required={props.required}
                helperText={props.helperText}
                data-cy={props.dataCy}
                tabIndex={props.tabIndex}
            />
        </div>
    );
};


export default EmailFieldInput;
