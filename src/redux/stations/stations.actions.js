import { API, APIIMAGES } from "../../shared/Api";
import store from "../store";

const { dispatch } = store;

const createStation = async (dataStation) => {
    try {
        dispatch({type: "LOADING"});
        const formData = new FormData();
        formData.append("coordinates", dataStation.coordinates);
        formData.append("address", dataStation.address);
        if(dataStation.image[0]){
            formData.append("image", dataStation.image[0]);
        }
        formData.append("schedule", dataStation.schedule);
        const result = await APIIMAGES.post("stations", formData);
        dispatch({
            type: "CREATE_STATION",
            payload: result.data
        });
    } catch (error) {
        const errorMessage = error.response.data.msg;
        dispatch({ type: "ERROR", payload: errorMessage });
    }
}
const getAllStations = async () => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.get("stations");
        dispatch({
            type: "GET_STATIONS",
            payload: result.data
        });
    } catch (error) {
        const errorMessage = error.response.data.msg;
        dispatch({ type: "ERROR", payload: errorMessage });
    }
}
const getAllStationsAdmin = async () => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.get("stations/stations-admin/");
        dispatch({
            type: "GET_STATIONS",
            payload: result.data
        });
    } catch (error) {
        const errorMessage = error.response.data.msg;
        dispatch({ type: "ERROR", payload: errorMessage });
    }
}
const getStationById = async (stationId) => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.get(`stations/${stationId}`);
        dispatch({
            type: "SELECT_STATION",
            payload: result.data
        });
    } catch (error) {
        const errorMessage = error.response.data.msg;
        dispatch({ type: "ERROR", payload: errorMessage });
    }
}
const updateStation = async (stationId, stationToUpdate) => {
    try {
        dispatch({type: "LOADING"});
        const formData = new FormData();
        formData.append("coordinates", stationToUpdate.coordinates);
        formData.append("address", stationToUpdate.address);
        if(stationToUpdate.image[0]){
            formData.append("image", stationToUpdate.image[0]);
        }
        formData.append("schedule", stationToUpdate.schedule);
        const result = await APIIMAGES.put(`stations/${stationId}`, formData);
        dispatch({
            type: "UPDATE_STATION",
            payload: result.data
        });
    } catch (error) {
        const errorMessage = error.response.data.msg;
        dispatch({ type: "ERROR", payload: errorMessage });
    }
}
const deleteStation = async (stationId) => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.delete(`stations/${stationId}`);
        dispatch({
            type: "DELETE_STATION",
            payload: result.data
        });
    } catch (error) {
        const errorMessage = error.response.data.msg;
        dispatch({ type: "ERROR", payload: errorMessage });
    }
}

export {
    createStation,
    getAllStations,
    getAllStationsAdmin,
    getStationById,
    updateStation,
    deleteStation
}