import {
    Toast
} from "native-base";
// import validate from 'validate.js';

/**
 * 处理校验数据
 * @param {验证结果} result object
 * @param {是否提示} toast bool
 */
const getResponce = (result, toast = true) => {
    if (result) {
        let errorArr = [];

        for (let i in result) {
            errorArr.push(result[i].join("\n"));
        }

        const error = (errorArr.length > 2) ? '请完善信息' : errorArr.join("\n");

        if (toast) Toast.show({
            text: error,
            type: "danger",
        });

        return errorArr;
    }

    return true;
}

/**
 * 验证所有数据
 * @param {验证的数据key} key 
 * @param {验证的数据盒子} data 
 * @param {验证器盒子} constraints 
 */
// const check = (data,constraints) => {
//     return validate(data,constraints);
// }

/**
 * 验证单个数据
 * @param {验证的数据key} key 
 * @param {验证的数据盒子} data 
 * @param {验证器盒子} constraints 
 */
// const checkItem = (key,data,constraints) => {
//     const dataItem = {
//         [key]:data[key]
//     }

//     const constraintsitem = {
//         [key]:constraints[key]
//     }

//     return validate(dataItem,constraintsitem);
// }

export {
    getResponce,
    // check,
    // checkItem
}