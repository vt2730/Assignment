import { useFormik } from 'formik';
import * as Yup from "yup"
import { doPostApiCall } from '../../../utils/ApiConfig';

export const ForSignUp = () => {

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(2, 'Minimum 2 characters required')
                .max(30, 'Should not exceed 30 characters!')
                .required('User name field is required')
                .matches(
                    /\w/,
                    "Please enter valid detail"
                ),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email field cannot be empty"),
            password: Yup.string()
                .min(8, "Must be 8 or more than 8 characters")
                .required("Password field is Required")
                .matches(
                    /\w/,
                    "Please enter valid password"
                ),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password must match')
                .required("Password field is required")
                .matches(
                    /\w/,
                    "Please enter valid password"
                ),
        }),
        onSubmit: (values) => {
            console.log(values,"signup *")
            signup(values);
        },
    });

    const signup = (values) => {
        let data = {
            url: ``,
            bodyData: {
                name: values.name,
                email: values.email,
                password: values.password
            }
        }
        doPostApiCall(data)
            .then((res)=>{
                if(!res.error){

                }
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    return{
        signupForm 
    }
}