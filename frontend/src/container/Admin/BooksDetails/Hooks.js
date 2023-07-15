import { useState } from "react"
import { useFormik } from 'formik';
import * as Yup from "yup"

export const ForBookDetails = () => {
    const [formOpen, setFormOpen] = useState(false);

    const handleOpenForm = () => {
        setFormOpen(true);
    }

    const BookFormFormik = useFormik({
        initialValues: {
            name: "",
            author: "",
            status: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
            .required("Email field cannot be empty"),
            author: Yup.string()
                .required("Password field is Required"),
            status: Yup.string()
            .required("Password field is Required"),
        }),
        onSubmit: (values) => {
            console.log(values, "login values *");
        },
    });
    return {
        handleOpenForm,
        formOpen,
        BookFormFormik
    }
}