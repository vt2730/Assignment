
import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import Icon from "@mui/material/Icon";
import styles from "./Index.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordFieldInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const clickEnter = (e) => {
        if (e.key === "Enter") {
            // Do code here
            console.log("Enter pressed")
            e.preventDefault();
            props.clickEnter();
        }
    };

    return (
        <div className={` flex flex-col textFieldCss relative ${props.extracls}`}>
            <label className={`input-label ${props.labelcls}`}>{props.label}</label>
            <TextField
                autoFocus={props.autoFocus}
                onChange={props.onChange}
                disabled={props.disabled}
                id={props.id}
                name={props.passwordinputText}
                variant="outlined"
                label={props.inputLabel}
                defaultValue={props.defaultValue}
                className={`${styles.textfieldclass} ${props.textnewclass ? props.textnewclass : ""
                    }`}
                type={"password"}
                placeholder={props.placeholder}
                autoComplete="off"
                multiline={props.multiline}
                rows={props.rows}
                required={props.required}
                fullWidth={props.fullwidthState}
                error={props.error}
                value={props.value}
                inputProps={props.inputProps}
                onKeyPress={(e) => clickEnter(e)}
                helperText={props.helperText}
                data-cy={props.dataCy}
                tabIndex={props.tabIndex}
                InputProps={{
                    className: "pr-2",
                    type: showPassword ? "text" : "password",
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                            >
                                <Icon color="action" tabIndex={-1}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </Icon>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <p className="text-red-dark text-sm absolute top-18">
                {props.errText}
            </p>
        </div>
    );
};

export default PasswordFieldInput;
