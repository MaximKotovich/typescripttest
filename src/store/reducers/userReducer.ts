interface userState {
    users: any[];
    loading: boolean;
    error: null|string;
}



export enum userActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface fetchUsers {
    type: userActionTypes.FETCH_USERS;
}
interface fetchUsersSuccess {
    type: userActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface fetchUsersError {
    type: userActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

const initialState: userState = {
    users: [],
    loading: false,
    error: null,
}



export type UserAction = fetchUsers | fetchUsersSuccess | fetchUsersError

export const userReducer = (state = initialState, action:UserAction): userState => {
    switch (action.type){
        case userActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case userActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default: return state
    }
}