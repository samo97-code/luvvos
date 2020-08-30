import {combineReducers} from "redux";
import appReducer from './appReducer'
import ServiceReducer from "./ServiceReducer";
import sliderBannerReducer from "./sliderBannerReducer";
import serviceSliderReducer from "./serviceSliderReducer";


export default combineReducers ({
    app: appReducer,
    service: ServiceReducer,
    sliderBanners: sliderBannerReducer,
    serviceSliders: serviceSliderReducer,
})