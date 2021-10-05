import react from "react";

interface caseState {
    case: string[];
    error: null|string;
}

export enum caseTypes {
    VISIBLE_ALL_CASE = "VISIBLE_ALL_CASE",
    UNVISIBLE_ALL_CASE = "UNVISIBLE_ALL_CASE",
    CASE_ERROR = "CASE_ERROR",
}

interface visibleCase {
    type: caseTypes.VISIBLE_ALL_CASE,
    payload: string[],
}


interface unvisibleCase {
    type: caseTypes.UNVISIBLE_ALL_CASE,
    payload: string[],
}


interface errorCase {
    type: caseTypes.CASE_ERROR,
    payload: string,
}


const initialState: caseState = {
    case: [],
    error: null,
}

export type caseAction = visibleCase | unvisibleCase | errorCase


export const caseReducer = (state = initialState, action:caseAction): caseState => {
    switch (action.type){
        case caseTypes.VISIBLE_ALL_CASE: 
            return {case: action.payload, error: null}
        case caseTypes.UNVISIBLE_ALL_CASE: 
            return {case: [], error: null}
        case caseTypes.CASE_ERROR:
            return {error: action.payload, case: []}
        default: return state
    }
}