import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodo, setTodoPage } from "../store/actionCreater/todo"; 
import { useTypeSelector } from "../store/reducers/combainReducer";
import "./todoList.scss"

const TodoList: React.FC= () =>{

    const state = useTypeSelector(state => state.todo)
    const dispatch = useDispatch()
    const pages = [1,2,3,4,5,6] 
    // const setPage = (page:number) => {
    //     dispatch({type: })
    // }


useEffect(()=>{
    dispatch(fetchTodo(state.page, state.limit))
}, [state.page])
    
    if (state.loading){
        return  <h1>Идёт загрузка....</h1>
    }
    if (state.error) {
        return <h1>{state.error}</h1>
    }

    return (
        <div> <p>TodoListTitle:</p>
            {state.todos.map(todo => 
                <div className = "todoTitleId" key = {todo.id}>{todo.id} - {todo.title}</div>
                )}
            <div className = "numberPage">
                {pages.map(p => 
                    <div onClick = {()=> dispatch(setTodoPage(p))}>
                        {p}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoList;