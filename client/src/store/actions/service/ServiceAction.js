import axios from "axios";
import ToasterNotification from "../../../hooks/ToasterNotification";
import {FETCH_SERVICE} from '../../types/types'


export const fetchService = () =>{
    return dispatch =>{
        axios.get('/index/services').then((response)=>{
            dispatch({
                type: FETCH_SERVICE,
                payload: response.data.services
            })
        }).catch((err)=>{
            ToasterNotification(err.message)
        })
    }
};

