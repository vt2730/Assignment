import { useFormik } from 'formik';
import * as Yup from "yup"
import { doGetApiCall, doPostApiCall } from '../../../utils/ApiConfig';
import { useNavigate ,useLocation} from "react-router"
import { useDispatch } from 'react-redux';
import { getUsers } from './userReducer';
import { useState } from 'react';

const PUBLIC_apiurl = 'http://192.168.1.6:5000/api';
export const ForLogin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [notification, setNotification] = useState({
        open: false,
        message: "",
        subText: "",
        alertType: "",
        borderClass: "",
    });
    const messageClose = () => {
        setNotification({
            open: false,
            message: "",
            subText: "",
            alertType: "",
            borderClass: "",
        });
    };
    const timer = () => setTimeout(messageClose, 3000);
    const openMessageLogin = (
        alertType,
        message,
        subText,
        borderClass
    ) => {
        if (alertType) {
            setNotification({
                open: true,
                message: message,
                subText: subText,
                alertType: alertType,
                borderClass: borderClass,
            });
            timer();
        }
    };

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
            url: `${PUBLIC_apiurl}/users/login`,
            bodyData: {
                email: values.email,
                password: values.password
            }
        }
        doPostApiCall(data)
            .then((res)=>{
                if(res?.code === "LOGIN_SUCCESSFUL"){
                    localStorage.setItem('role', res?.result?.role);
                    localStorage.setItem('userId', res?.result?._id);
                    openMessageLogin("success", "Success", res.message, "success")
                    navigate("/admin/bookdetails")
                }
                else if(res?.code === 'INCORRECT_PASSWORD'){
                    openMessageLogin("error", "Error", res.message, "error")
                }else if(res?.code === "USER_NOT_FOUND"){
                    openMessageLogin("error", "Error", res.message, "error")
                }
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    const getAllUsers = () => {
        let data = {
            url: `${PUBLIC_apiurl}/users`
        }
        doGetApiCall(data)
            .then((res) => {
                if(!res.error){
                    dispatch(getUsers(res?.result))
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return{
        LoginForm,
        getAllUsers,
        messageClose,
        notification,
    }
}