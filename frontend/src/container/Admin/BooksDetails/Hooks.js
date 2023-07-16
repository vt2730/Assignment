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
                    availability: values?.status === 'available' ? true : false
                }
            }
            console.log(data,"post values *");
            doPostApiCall(data)
                .then((res)=>{
                    if(!res.error){
                        setFormOpen(false)
                        getAllBooks()
                        // dispatch(getBooks(res?.result))
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
                        getAllBooks();
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
        handleDelte
    }
}