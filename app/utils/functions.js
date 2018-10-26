import axios from 'axios';
import { baseUrl } from './config/config';
import { showMessage } from "react-native-flash-message";
import { Image } from 'react-native';

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

const autoSize = (array) => {
    const maxHeight = SCREEN_HEIGHT / 2;

    const maxWidth = SCREEN_WIDTH - 25;
    // 一张图片时候，直接显示最大宽度或者最大高度
    // 两张以上的时候，直接是安装200h*150

    const maxHW = { maxHeight,maxWidth };

    switch (true) {
        case array.length = 1:
            return autoImageOne(array,maxHW);
        case array.length > 1:
            return autoImageMore(array);
    }
}

const autoImageOne = (array,max) => {
    const uri = array[0];

    let returnArray = [];

    Image.getSize(uri,(w,h) => {
        const width = (w > max.width) ? max.width: w;

        const height = (h > max.height) ? max.height: h;

        returnArray.push({ source: { uri }, style: { width,height } });
    })

    return returnArray;
}

const autoImageMore = (array) => {
    let returnArray = [];

    array.map((v,k) => {
        const width = 170;

        const height = 200;

        returnArray.push({source : { uri : v } , style : { width,height } });
    })
    
    return returnArray;
}

export {
    sendCode,
    dealValidate,
    wrapText,
    autoSize,
}