import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Index.module.css";

const DatePickerMain = () => {
    return (
        <div className={`${styles.datepickerMain}  ${props.mainCls}`}>
            <label className={`font-normal text-[14px] mb-1.5 ${props.lableCls}`}>{props.label}</label>
            <DatePicker
                id={props.id}
                showIcon={props.showIcon}
                disabled={props.disabled}
                name={props.name}
                selected={props.value}
                // value={props.value}
                onChange={props.onChange}
                dateFormat={props.format}
                placeholderText={props.placeholderText}
                className={`${props.datePickerCls}`}
            />
        </div>
    );
}

export default DatePickerMain