import { TodoAction, todoActionTypes } from './../reducers/todoReducer';
import axios from "axios";
import { Dispatch } from "redux"
 
 
 
 export const fetchTodo = (page = 1, limit = 10) => {
     return async (dispatch: Dispatch<TodoAction>) => {
         try {
            dispatch({type: todoActionTypes.FETCH_TODO});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: todoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
         } catch (e){            
            dispatch({type: todoActionTypes.FETCH_TODO_ERROR, payload: "Произошла ошибка"})
         }
     }
 }

 export const setTodoPage = (page:number) : TodoAction =>{
    return {type: todoActionTypes.SET_TODO_PAGE, payload: page}
 }