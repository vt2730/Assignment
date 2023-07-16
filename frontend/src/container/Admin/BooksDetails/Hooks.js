import { useState } from "react"
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from "./bookReducer";
import { doDeleteApiCall, doGetApiCall, doPostApiCall } from "../../../utils/ApiConfig";
import getLocalStorageData from "../../../utils/getLocalStorageData"

const PUBLIC_apiurl = 'http://192.168.1.6:5000/api';
export const ForBookDetails = () => {
    const role = getLocalStorageData('role')

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

    const dispatch = useDispatch();
    const [formOpen, setFormOpen] = useState(false);

    const handleOpenForm = () => {
        setFormOpen(true);
    }

    const handleDelte = (book) => {
        deleteBooks(book?._id)
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
            createBook(values);
        },
    });
    
    const createBook = (values) => {
        if(role === 'admin'){
            let data = {
                url : `${PUBLIC_apiurl}/books`,
                bodyData: {
                    name: values?.name,
                    author: values?.author,
                    availability: values?.status === 'available' ? true : false,
                    role: role
                }
            }
            console.log(data,"post values *");
            doPostApiCall(data)
                .then((res)=>{
                    if(!res.error){
                        setFormOpen(false)
                        openMessageLogin("success", "Success", res.message, "success")
                        getAllBooks()
                        // dispatch(getBooks(res?.result))
                    }else if(res?.code === "UNAUTHORIZED"){
                        openMessageLogin("error", "Error", res.message, "error")
                    }else if(res?.code === "BOOK_CREATE_FAILED"){
                        openMessageLogin("error", "Error", res.message, "error")
                    }
                })
                .catch((err)=>{
                    console.error(err)
                })
        }else{

        }
    }

    const getAllBooks = () => {
        let data = {
            url : `${PUBLIC_apiurl}/books`,
        }
        doGetApiCall(data)
            .then((res) => {
                if(!res.error){
                dispatch(getBooks(res?.result))
                }
            })
            .catch((error)=>{
                console.error(error)
            })
    }

    const deleteBooks = (bookId) => {
        if(role === 'admin'){
            let data = {
                url: `${PUBLIC_apiurl}/books/${bookId}`,
            }
            doDeleteApiCall(data)
                .then((res)=>{
                    if(!res.error) {
                        openMessageLogin("success", "Success", res.message, "success")
                        getAllBooks();
                    }else {
                        openMessageLogin("error", "Error", res.message, "error")
                    }
                })
                .catch((err)=>{
                    console.error(err)
                })
        }else {

        }
    }
    return {
        handleOpenForm,
        formOpen,
        BookFormFormik,
        getAllBooks,
        handleDelte,
        messageClose,
        notification,
    }
}