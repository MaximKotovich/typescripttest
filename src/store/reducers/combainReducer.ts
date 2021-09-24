import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
})

export type rootState = ReturnType<typeof rootReducer>

export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector  