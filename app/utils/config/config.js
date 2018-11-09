/** about request config */
const baseUrl = 'http://localhost:9091';
const version = 'v1/';
const timeout = 7000;
const charset = "charset=utf-8";
const contentType = {
    json : 'application/json' + ";" + charset,
    form : 'application/x-www-form-urlencoded' + ";" + charset,
    file : 'multipart/form-data'
};

export {baseUrl,version,timeout,contentType};