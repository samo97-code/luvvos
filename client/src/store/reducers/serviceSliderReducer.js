import {FETCH_SERVICE_SLIDER} from '../types/types'

const initialState = {
    serviceSliders: []
}

const serviceSliderReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_SERVICE_SLIDER:
            return {
                ...state,
                serviceSliders: action.payload
            }
        default:
            return state
    }
}

export default serviceSliderReducer;