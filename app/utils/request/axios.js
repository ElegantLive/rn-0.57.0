import axios from 'axios';
import * as conf from '../config/config';
import { getToken } from './token';
import NavigationService from '../navigation/service';

axios.defaults.baseURL = conf.baseUrl + conf.version; /** 'http://localhost:9091' */
axios.defaults.headers['Content-Type'] = conf.contentType.json;
axios.defaults.timeout = conf.timeout;
axios.defaults.withCredentials = false; /** 是否允许携带cookie */

/** 发现axios有内置的转换器，就不用自己定义的了 */
// const handleRequestData = (type,data) => {
//     switch(type) {
//         case conf.contentType.json:
//             return JSON.stringify(data);
//         case conf.contentType.form:
//             return encodeQuery(data);
//         case conf.contentType.file:
//             return data;
//         default:
//             return false;
//     }
// }

/** 同上 */
// const encodeQuery = (params) => {
//     return Object.keys(params).map(key => `${key}=${params[key]}`).join("&");
// }

/** see https://github.com/axios/axios/issues/754 */
axios.interceptors.request.use((request) => {
    return getToken()
    .then((token) => {
        if (token) request.headers['token'] = token;

        /** 使用axios内置的转换器 */
        // if (request.method === 'post' || request.method === 'put') {
        //     request.data = handleRequestData(request.headers['Content-Type'],request.data);
        // }
        
        console.log(request);
        return request;
    });
},(error) => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.log(response);
    return response.data;
},(error) => {
    console.log(error);
    if (error.response) {
        console.log(error.response);
        switch (error.response.data.error_code) {
            // 通用错误处理开始
            case 10000:
                console.log('入参错误');
                return false;
            case 10001:
                console.log('权限错误');
                return false;
            case 10002:
                console.log('请求资源未找到');
                return false;
            case 10003:
                console.log('token没有获取到，请登录');
                NavigationService.navigate('Login');
                return false;
            // 通用错误弹窗
            default:
                Promise.reject(error);
                throw error;
        }
    }
    return error;
});