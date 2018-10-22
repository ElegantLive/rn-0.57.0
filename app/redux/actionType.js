export const forbidRefreshLoadType = {
    NONE:'NONE', // 已经加载所有数据
    EMPTY:"EMPTY", // 数据为空
    LOADING:'LOADING',// 正在加载
}

export const refreshLoadType = {
    ...forbidRefreshLoadType,
    FAILURE:'FAILURE',// 加载失败
    NORMAL:'NORMAL', // 正常
}