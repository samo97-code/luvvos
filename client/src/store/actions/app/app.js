import {HIDE_LOADER, SHOW_LOADER, CHANGE_LANGUAGE} from "../../types/types";

export const setLanguage = (lang) =>{
    return{
        type: CHANGE_LANGUAGE,
        payload: lang
    }
}

export const showLoader = ()=>{
    return{
        type: SHOW_LOADER
    }
}

export const hideLoader = ()=>{
    return{
        type: HIDE_LOADER
    }
}