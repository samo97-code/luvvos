import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure();
const ToasterNotification = (content,type = null) => {
    if (type === 'success'){
        toast.success(content,{position:toast.POSITION.TOP_RIGHT,autoClose:4000});
    }else {
        toast.error(content,{position:toast.POSITION.TOP_RIGHT,autoClose:4000});
    }

};

export default ToasterNotification;