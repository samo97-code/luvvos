import axios from "axios";
import ToasterNotification from "../../../hooks/ToasterNotification";
import {FETCH_SLIDER_BANNER} from "../../types/types";

export const fetchSliderBanner = () => {
    return dispatch =>{
        axios.get('/index/slider-banners').then((response)=>{
            dispatch({
                type: FETCH_SLIDER_BANNER,
                payload: response.data.sliderBanners
            })
        }).catch((err)=>{
            ToasterNotification(err.message)
        })
    }
}