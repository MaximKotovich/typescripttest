import { caseReducer } from './caseReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {autorReducer} from "./autorReducer"
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    autor: autorReducer,
    case: caseReducer,
})

export type rootState = ReturnType<typeof rootReducer>
export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector  