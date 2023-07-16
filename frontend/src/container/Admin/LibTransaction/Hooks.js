import { useDispatch } from "react-redux";
import { doGetApiCall } from "../../../utils/ApiConfig";
import {getTransaction} from "./transactionResucer"

const PUBLIC_apiurl = 'http://192.168.1.6:5000/api';
export const ForLibTransaction = () => {

    const dispatch = useDispatch();

    const getAllTransaction = () => {
        let data = {
            url: `${PUBLIC_apiurl}/transactions`
        }
        doGetApiCall(data)
            .then((res) => {
                if(!res.error) {
                    dispatch(getTransaction(res?.result))
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return {
        getAllTransaction
    }
}