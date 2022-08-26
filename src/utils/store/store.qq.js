import taro from "@tarojs/taro";

/**
 * @param key{string}
 * @param data
 */
export const setStore = function (key, data) {
  if (typeof data === 'object'){
    taro.setStorageSync(key, JSON.stringify(data))
  }else {
    taro.setStorageSync(key, data)
  }
}

export const getStore = function (key) {
  let data = taro.getStorageSync(key)
  return data
}

export const removeStore = function (key) {
  taro.removeStorageSync(key)
}

export const clearStore = function () {
  taro.clearStorageSync()
}
