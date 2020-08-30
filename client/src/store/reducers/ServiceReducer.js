import {FETCH_SERVICE} from '../types/types'

const initialState = {
    services: []
}

const serviceReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_SERVICE:
            return {
                ...state,
                services: action.payload
            }
        default:
            return state;
    }
}

export default serviceReducer;