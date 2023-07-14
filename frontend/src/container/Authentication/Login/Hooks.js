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
            login(values)
        },
    });

    const login = (values) => {
        let data = {
            url: ``,
            bodyData: {
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
        LoginForm
    }
}