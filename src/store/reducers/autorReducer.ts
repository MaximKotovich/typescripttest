

interface autorState {
    autor: string[];
    isLogined: boolean;
    error: null|string;
}



export enum autorActionTypes {
    // FETCH_AUTOR = "FETCH_AUTOR",
    FETCH_AUTOR_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_AUTOR_ERROR = "FETCH_AUTOR_ERROR",
}

// interface fetchAutor {
//     type: autorActionTypes.FETCH_AUTOR;
// }
interface fetchAutorSuccess {
    type: autorActionTypes.FETCH_AUTOR_SUCCESS;
    payload: string[];
}
interface fetchAutorError {
    type: autorActionTypes.FETCH_AUTOR_ERROR;
    payload: string;
}

const initialState: autorState = {
    autor: [],
    isLogined: false,
    error: null,
}



export type autorAction = fetchAutorSuccess | fetchAutorError

export const autorReducer = (state = initialState, action:autorAction): autorState => {
    switch (action.type){
        // case autorActionTypes.FETCH_AUTOR:
        //     return {isLogined: false, error: null, autor: []}
        case autorActionTypes.FETCH_AUTOR_SUCCESS:
            return {isLogined: true, error: null, autor: action.payload}
        case autorActionTypes.FETCH_AUTOR_ERROR:
            return {isLogined: false, error: action.payload, autor: []}
        default: return state
    }
}