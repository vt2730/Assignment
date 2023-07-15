import { useFormik } from 'formik';
import * as Yup from "yup"
import { doPostApiCall } from '../../../utils/ApiConfig';
import { useNavigate ,useLocation} from "react-router"

const PUBLIC_apiurl = 'http://192.168.1.6:5000/api';
export const ForLogin = () => {

    const navigate = useNavigate();

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
                    navigate("/admin/bookdetails")
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