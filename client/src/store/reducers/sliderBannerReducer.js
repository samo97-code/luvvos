import {FETCH_SLIDER_BANNER} from "../types/types";

const initialState = {
    sliderBanners: []
}

const sliderBannerReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_SLIDER_BANNER:
            return {
                ...state,
                sliderBanners: action.payload
            }
        default:
            return state;
    }
}

export default sliderBannerReducer;