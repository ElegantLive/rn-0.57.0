import axios from 'axios';
import * as conf from '../config/config';
import { getToken } from './token';
import NavigationService from '../navigation/service';
import { RRCLoading,RRCAlert } from 'react-native-overlayer';

axios.defaults.baseURL = conf.baseUrl + conf.version; /** 'http://localhost:9091' */
axios.defaults.headers['Content-Type'] = conf.contentType.json;
axios.defaults.timeout = conf.timeout;
axios.defaults.withCredentials = false; /** 是否允许携带cookie */
axios.defaults.loading = true; /** 自定义loading弹窗 */
axios.defaults.diydeal = false; /** 是否使用自定义的错误响应处理 */

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
    if (request.loading) RRCLoading.show();

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
    const request = response.config;
    
    if (request.loading) RRCLoading.hide();

    console.log(response);
    return response.data;
},(error) => {
    const response = error.response;
    const request = response.config;
    if (request.loading) RRCLoading.hide();
    
    console.log(response);
    
    if (response) {
        switch (response.data.error_code) {
            // 通用错误处理开始
            case 10003:
                console.log('token没有获取到，请登录');
                NavigationService.navigate('Login');
                return false;
            // 通用错误弹窗
            default:
                if (request.diydeal) return response.data;

                RRCAlert.alert('wrong',response.data.msg);
                return false;
        }
    }

    Promise.reject(error);
    return error;
});