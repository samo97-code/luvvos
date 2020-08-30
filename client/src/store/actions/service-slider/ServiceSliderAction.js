import {FETCH_SERVICE_SLIDER} from '../../types/types'
import axios from "axios";
import ToasterNotification from "../../../hooks/ToasterNotification";

export const fetchServiceSlider = ()=>{
    return dispatch =>{
        axios.get('/index/service-sliders').then((response)=>{
            dispatch({
                type: FETCH_SERVICE_SLIDER,
                payload: response.data.serviceSliders
            })
        }).catch((err)=>{
            ToasterNotification(err.message)
        })
    }
}