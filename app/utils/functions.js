import axios from 'axios';
import { baseUrl } from './config/config';
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

/**
 * 单个图片自适应
 * @param {string} uri image source uri
 */
const autoImageOne = (uri) => {
    const maxHeight = SCREEN_HEIGHT / 2;

    const maxWidth = SCREEN_WIDTH - 25;

    const max = { width:maxWidth,height:maxHeight };

    const wh = uri.split('_')[1].split('.')[0].split('*');

    const w = Number(wh[0]);
    
    const h = Number(wh[1]);

    width = (w > max.width) ? max.width: w;

    height = (h > max.height) ? max.height: h;

    return {width,height}
}

/**
 * 自适应时间
 * @param {string} time timestamp
 */
const adjustReleaseTime = (time) => {
    let n = {}, r = {}, now = new Date();

    n.year = now.getFullYear();
    n.month = now.getMonth() + 1;
    n.date = now.getDate();
    n.hours = now.getHours();
    n.minutes = now.getMinutes();

    dateA = time.split(' ');
    dateS = dateA[0].split('-');
    dateT = dateA[1].split(':');
    r.year = Number(dateS[0]);
    r.month = Number(dateS[1]);
    r.date = Number(dateS[2]);
    r.hours = Number(dateT[0]);
    r.minutes = Number(dateT[1]);

    if (r.year < n.year) return dateA[0] + ' ' + r.hours + ":" + r.minutes;

    if (r.month === n.month && r.date === n.date) return r.hours + ":" + r.minutes;

    if (r.month === n.month && (r.date + 1) === n.date) return res = '昨天' + r.hours + ":" + r.minutes;

    if (r.month === n.month && (r.date + 2) === n.date) return '前天' + r.hours + ":" + r.minutes;

    return r.month + "-" + r.date  + " " + r.hours + ":" + r.minutes;
}

export {
    sendCode,
    dealValidate,
    wrapText,
    autoImageOne,
    adjustReleaseTime,
}