const INITIAL_STATE = {
    stations: [],
    stationSelected: null,
    loading: false,
    error: null
}

export const stationsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "LOADING":
            return {...state, loading: true};
        case "CREATE_STATION":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "GET_STATIONS":
            return {
                ...state,
                stations: [...action.payload],
                loading: false,
                error: null
            };
        case "SELECT_STATION":
            return {
                ...state,
                stationSelected: {...action.payload},
                loading: false,
                error: null
            }
        case "UPDATE_STATION":
            return {
                ...state,
                loading: false,
                error: null
            }
    }
}