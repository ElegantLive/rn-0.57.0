import axios from 'axios';
import * as conf from '../config/config';
import { getToken } from '../storage/token';
import NavigationService from '../navigation/service';
import { Loading } from "../../component/base/Loading";
import { showMessage } from "react-native-flash-message";

const ECONNABORTED = 'ECONNABORTED'; // 请求超时错误码

axios.defaults.baseURL = conf.baseUrl + conf.version; /** 'http://localhost:9091' */
axios.defaults.headers['Content-Type'] = conf.contentType.json;
axios.defaults.timeout = conf.timeout;
axios.defaults.withCredentials = false; /** 是否允许携带cookie */
axios.defaults.loading = true; /** 自定义loading弹窗 */
axios.defaults.diydeal = false; /** 是否使用自定义的错误响应处理 */
axios.defaults.onTimeout = (request) => {
    showMessage({
        message: '请求超时',
        description:"请检查网络,并稍后重试",
        type: "danger",
        icon: "danger"
    });
}

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
axios.interceptors.request.use(async (request) => {
    if (request.loading) Loading.show();

    const token = await getToken();

    if (token) request.headers['token'] = token;

    /** 使用axios内置的转换器 */
    // if (request.method === 'post' || request.method === 'put') {
    //     request.data = handleRequestData(request.headers['Content-Type'],request.data);
    // }
    console.log(request);
    return request;
},(error) => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    const request = response.config;
    
    if (request.loading) Loading.hidden();

    console.log(response);
    return response.data;
},(error) => {
    const response = error.response;
    const request = error.config;
    console.log(response);
    console.log(request);
    if (request.loading) Loading.hidden();
    
    if (response) {
        switch (response.data.error_code) {
            // 通用错误处理开始
            case 10003:
                console.log('token没有获取到，请登录');
                NavigationService.navigate('Login');
                return false;
            // 通用错误弹窗
            default:
                if (true !== request.diydeal) showMessage({
                    message: response.data.msg,
                    type: "danger",
                    icon: "danger"
                });

                return response.data;
        }
    } else {
        // 请求超时-网络错误
        switch (error.code) {
            case ECONNABORTED:
                request.onTimeout(request);
                break;
            default:
                console.log('前端出现未知错误');
                // Promise.reject(error);
                // return error;
                break;
        }
    }
});