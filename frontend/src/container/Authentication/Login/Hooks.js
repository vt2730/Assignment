import { useFormik } from 'formik';
import * as Yup from "yup"


export const ForLogin = () => {


    const LoginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Invalid email address")
            .required("Email field cannot be empty"),

            password: Yup.string()
                .required("Password field is Required")
        }),
        onSubmit: (values) => {
            console.log(values, "login values *");
            // login(values)
        },
    });
    return{
        LoginForm
    }
}