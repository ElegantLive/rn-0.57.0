/** about request config */
const baseUrl = 'https://api.hnjubi.cn/';
const version = 'v1/';
const timeout = 5000;
const contentType = {
    json : 'application/json',
    form : 'application/x-www-form-urlencoded',
    file : 'multipart/form-data'
};

export {baseUrl,version,timeout,contentType};