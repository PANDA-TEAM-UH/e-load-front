import { API, APIIMAGES } from "../../shared/Api";
import store from "../store";

const { dispatch } = store;

const login = async (dataLogin, navigate) => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.post("users/login", dataLogin);
        dispatch({
            type: "LOGIN",
            payload: {
                user: result.data.userToLog,
                token: result.data.token
            }
        });
        localStorage.setItem("token", result.data.token);
        navigate("/");
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const createUser = async (dataRegister, navigate) => {
    try {
        dispatch({type: "LOADING"});
        const formData = new FormData();
        formData.append("username", dataRegister.username);
        formData.append("email", dataRegister.email);
        if(dataRegister.image[0]){
            formData.append("image", dataRegister.image[0]);
        }
        formData.append("password", dataRegister.password);        
        const result = await APIIMAGES.post("users", formData);
        dispatch({
            type: "CREATE_USER",
            payload: result.data
        });
        const user = {
            username: dataRegister.username,
            password: dataRegister.password
        };
        login(user, navigate);
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const getAllUsers = async () => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.get("users");
        dispatch({
            type: "GET_USERS",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const getUserById = async (userId) => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.get(`users/${userId}`);
        dispatch({
            type: "SELECT_USER",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const updateUser = async (userId, userToUpdate) => {
    try {
        dispatch({type: "LOADING"});
        const formData = new FormData();
        formData.append("email", userToUpdate.email);
        if(userToUpdate.image[0]){
            formData.append("image", userToUpdate.image[0]);
        }
        if(userToUpdate.password){
            formData.append("password", userToUpdate.password);  
        }              
        const result = await APIIMAGES.put(`users/${userId}`, formData);
        dispatch({
            type: "UPDATE_USER",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const deleteUser = async (userId) => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.delete(`users/${userId}`);
        dispatch({
            type: "DELETE_USER",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const logout = async () => {
    try {
        localStorage.removeItem("token");
        dispatch({type: "LOGOUT"});
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}

export {
    login,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    logout
}