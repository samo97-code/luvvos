import {SHOW_LOADER, HIDE_LOADER,CHANGE_LANGUAGE} from "../types/types";

const initialState = {
    loader: false,
    lang: 'en'
}

const appReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return{
                ...state,
                lang: action.payload
            }
        case SHOW_LOADER:
            return{
                ...state,
                loader: true
            }
        case HIDE_LOADER:
            return{
                ...state,
                loader: false
            }
        default:
            return state
    }
}

export default appReducer;