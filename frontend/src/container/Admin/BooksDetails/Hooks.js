import { useEffect, useState } from "react"
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from "./bookReducer";
import { doDeleteApiCall, doGetApiCall, doPostApiCall } from "../../../utils/ApiConfig";
import getLocalStorageData from "../../../utils/getLocalStorageData"

const PUBLIC_apiurl = 'http://192.168.1.6:5000/api';
export const ForBookDetails = () => {
    const role = getLocalStorageData('role')
    const [openBorrowModal, setOpenBorrowModal] = useState(false);
    const [selectedBook,setSelectedBook] = useState(null)
    const [dateFilter, setDateFilter] = useState(null);

    const handleOpenModal = (bookItem) => {
        setOpenBorrowModal(true);
        setSelectedBook(bookItem)
    }

    const handleCloseModal = () => {
        setOpenBorrowModal(false);
        borrowFormik?.resetForm()
        setDateFilter(null)
    }

    const handleDateFilter = (date) => {
        setDateFilter(date);
    }

    // useEffect(()=>{
    //     console.log(selectedBook,"selectedBook *")
    // },[selectedBook])

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

    const handleFormClose = () => {
        setFormOpen(false);
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
            .required("Name field cannot be empty"),
            author: Yup.string()
                .required("Author field is Required"),
            status: Yup.string()
            .required("Availability field is Required"),
        }),
        onSubmit: (values) => {
            console.log(values, "login values *");
            createBook(values);
        },
    });

    const borrowFormik = useFormik({
        initialValues: {
            user: "",
        },
        validationSchema: Yup.object().shape({
            user: Yup.string()
            .required("Email field cannot be empty"),
        }),
        onSubmit: (values) => {
            let obj={
                ...values,
                dateFilter
            }
            BorrowBook(obj);
        },
    })
    
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

    const BorrowBook = (values) => {
        
        let data = {
            url: `${PUBLIC_apiurl}/transactions`,
            bodyData: {
                userId: values?.user,
                bookId: selectedBook?._id,
                dueDate: values?.dateFilter
            }
        }
        doPostApiCall(data)
            .then((res) => {
                if(!res.error){
                    setOpenBorrowModal(false);
                    openMessageLogin("success", "Success", res.message, "success")
                }else if(res?.code === "TRANSACTION_CREATE_FAILED"){
                    openMessageLogin("error", "Error", res.message, "error")
                }else {
                    openMessageLogin("error", "Error", res.message, "error")
                }
            })
            .catch((err) => {
                console.error(err)
            });
    }
    return {
        handleOpenForm,
        formOpen,
        BookFormFormik,
        getAllBooks,
        handleDelte,
        messageClose,
        notification,
        handleFormClose,
        openBorrowModal,
        handleOpenModal,
        handleCloseModal,
        selectedBook,
        borrowFormik,
        handleDateFilter,
        dateFilter
    }
}