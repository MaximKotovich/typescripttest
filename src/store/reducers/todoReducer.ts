interface todoState {
    todos: any[];
    loading: boolean;
    error: null|string;
    page: number;
    limit: number;
}



export enum todoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface fetchTodo {
    type: todoActionTypes.FETCH_TODO;
}
interface fetchTodoSuccess {
    type: todoActionTypes.FETCH_TODO_SUCCESS;
    payload: any[];
}
interface fetchTodoError {
    type: todoActionTypes.FETCH_TODO_ERROR;
    payload: string;
}
interface setTodoPage {
    type: todoActionTypes.SET_TODO_PAGE;
    payload: number;
}

const initialState: todoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}



export type TodoAction = fetchTodo | fetchTodoSuccess | fetchTodoError | setTodoPage

export const todoReducer = (state = initialState, action: TodoAction): todoState => {
    switch (action.type){
        case todoActionTypes.FETCH_TODO:
            return {...state, loading: true}
        case todoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case todoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload}
        case todoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default: return state
    }
}