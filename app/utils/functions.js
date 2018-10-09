import axios from 'axios';
import {baseUrl} from './config/config';
import {Toast} from '../component/base/toast';

const sendCode = async (mobile) => {
    console.log(mobile);

    const res = await axios.get('send_code',{
        params:{mobile},
        baseURL:baseUrl
    })

    if (res.error_code === 0) Toast.showSuccess('验证码已发送');
}

export {
    sendCode
}