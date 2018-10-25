import axios from 'axios';
import {baseUrl} from './config/config';
import { showMessage } from "react-native-flash-message";

const sendCode = async (mobile) => {
    const res = await axios.get('send_code',{
        params:{mobile},
        baseURL:baseUrl
    })

    if (res.error_code === 0) showMessage({
        message:"短信验证码已发出",
        type:"success",
        icon:"success"
    })
}

const dealValidate = (result, toast = true) => {
    if (result) {
        const error = (result.length > 2) ? result[0] : result.join("\n");

        if (toast) showMessage({
            message:error,
            type:"danger",
            icon:"danger"
        })

        return result;
    }

    return true;
}

const wrapText = (text) => {
    const n = '\\n';

    return text.split(n).join(`${'\n'}`)
}

export {
    sendCode,
    dealValidate,
    wrapText
}