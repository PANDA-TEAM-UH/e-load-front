import { API } from "../../shared/Api";
import store from "../store";

const { dispatch } = store;

const createSpot = async (dataSpot, station) => {
    try {
        dispatch({type: "LOADING"});
        const formData = new FormData();
        formData.append("power", dataSpot.power);
        formData.append("type", dataSpot.type);
        formData.append("rate", dataSpot.rate);
        formData.append("state", dataSpot.state);
        formData.append("station", station);
        const result = await API.post("spots", formData);
        dispatch({
            type: "CREATE_SPOT",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const getAllSpots = async () => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.get("spots");
        dispatch({
            type: "GET_SPOTS",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const getSpotsByStation = async (stationId) => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.get(`spots/station/${stationId}`);
        dispatch({
            type: "STATION_SPOTS",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const updateSpot = async (spotId, spotToUpdate) => {
    try {
        dispatch({type: "LOADING"});
        const formData = new FormData();
        formData.append("power", spotToUpdate.power);
        formData.append("type", spotToUpdate.type);
        formData.append("rate", spotToUpdate.rate);
        formData.append("state", spotToUpdate.state);
        const result = await API.put(`spots/${spotId}`, formData);
        dispatch({
            type: "UPDATE_SPOT",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const deleteSpot = async (spotId) => {
    try {
        dispatch({type: "LOADING"});
        const result = await API.delete(`spots/${spotId}`);
        dispatch({
            type: "DELETE_SPOT",
            payload: result.data
        });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error.response.data });
    }
}
const deleteAllSpotsFromStation = async (stationId) => {
    getSpotsByStation(stationId);
    //comprobar el initial_state spotsByStation para poder borrarlos
}

export {
    createSpot,
    getAllSpots,
    getSpotsByStation,
    updateSpot,
    deleteSpot,
    deleteAllSpotsFromStation
}