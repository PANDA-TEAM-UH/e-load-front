import { API } from "../../shared/Api";
import store from "../store";

const { dispatch } = store;

const createPayment = async (dataPayment) => {
    try {
        dispatch({type: "LOADING"});
        const formData = new FormData();
        formData.append("cardHolderName", dataPayment.cardHolderName);
        formData.append("number", dataPayment.number);
        formData.append("valMonth", dataPayment.valMonth);
        formData.append("valYear",  dataPayment.valYear);
        const result = await API.post("payments", formData);
        dispatch({
            type: "CREATE_PAYMENT",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const getAllPayments = async () => {
    
    try {
        dispatch({type: "LOADING"});
        const result = await API.get("payments");
        dispatch({
            type: "GET_PAYMENTS",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}


const deletePayment = async (paymentId) => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.delete(`payments/${paymentId}`);
        dispatch({
            type: "DELETE_PAYMENT",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}

export {
    createPayment,
    getAllPayments,
    deletePayment
    
}