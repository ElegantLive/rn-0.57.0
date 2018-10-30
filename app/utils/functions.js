import { showMessage } from "react-native-flash-message";

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

const autoImageForFullScreen = (source) => {
    const { width, height } = getWHfromSourceUri(source);

    const imageScale = width / height;

    const screenScale = SCREEN_WIDTH / SCREEN_HEIGHT;

    // 比例相同
    if (screenScale === imageScale) return (width > SCREEN_WIDTH) ? { width:SCREEN_WIDTH,height:SCREEN_HEIGHT}: {width,height};

    // 宽度++
    if (imageScale > screenScale) return (width > SCREEN_WIDTH) ? {width:SCREEN_WIDTH,height:(SCREEN_WIDTH / imageScale)}: {width,height};

    // 高度++
    if (imageScale < screenScale) return (height > SCREEN_HEIGHT) ? {height:SCREEN_HEIGHT,width:(SCREEN_HEIGHT * imageScale)}: {height,width};
}

/**
 * 单个图片自适应
 * @param {string} uri image source uri
 */
const autoImageOne = (uri) => {
    const maxHeight = SCREEN_HEIGHT / 2;

    const maxWidth = SCREEN_WIDTH - 25;

    const max = { width:maxWidth,height:maxHeight };

    const wh = getWHfromSourceUri(uri);

    width = (wh.width > max.width) ? max.width: w;

    height = (wh.height > max.height) ? max.height: h;

    return { width,height };
}

/**
 * 从source获取宽高
 * @param {object} param0 包含uri的source对象
 */
const getWHfromSourceUri = ({ uri }) => {
    const wh = uri.split('_')[1].split('.')[0].split('*');

    const width = Number(wh[0]);
    
    const height = Number(wh[1]);

    return { width,height };
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
    dealValidate,
    wrapText,
    autoImageOne,
    adjustReleaseTime,
    getWHfromSourceUri,
    autoImageForFullScreen,
}