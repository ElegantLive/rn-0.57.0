import axios from 'axios';
import * as conf from '../config/config';
import { getToken } from './token';

axios.defaults.baseURL = conf.baseUrl + conf.version; /** 'http://localhost:9091' */
axios.defaults.headers['Content-Type'] = conf.contentType.json;
axios.defaults.timeout = conf.timeout;
axios.defaults.withCredentials = false; /** 是否允许携带cookie */

const handleRequestData = (type,data) => {
    switch(type) {
        case conf.contentType.json:
            return JSON.stringify(data);
        case conf.contentType.form:
            return encodeQuery(data);
        case conf.contentType.file:
            return data;
        default:
            return false;
    }
}

const encodeQuery = (params) => {
    return Object.keys(params).map(key => `${key}=${params[key]}`).join("&");
}

/** see https://github.com/axios/axios/issues/754 */
axios.interceptors.request.use((request) => {
    return getToken()
    .then((token) => {
        if (token){
            request.headers['token'] = token;
            if (request.method === 'post' || request.method === 'put') {
                request.data = handleRequestData(request.headers['Content-Type'],request.data);
            }

            return request;
        }
    });
},(error) => {
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use((response) => {
    // console.log(response);
    return response;
},(error) => {
    console.log(error);
    if (error.response) {
        console.log(error.response);
        switch (error.response.data.error_code) {
            case 10003:
                console.log('token没有获取到，请登录');
            default: 
                return Promise.reject(error);
        }
    }
    return error;
});