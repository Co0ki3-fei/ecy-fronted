/**
 * @param key{string}
 * @param data
 */
export const setStore = function (key, data) {
  if (typeof data === 'object'){
    window.localStorage.setItem(key, JSON.stringify(data))
  }else {
    window.localStorage.setItem(key, data)
  }
}

export const getStore = function (key) {
  let data = window.localStorage.getItem(key)
  return data
}

export const rmStore = function (key) {
  window.localStorage.removeItem(key)
}

export const clearStore = function () {
  window.localStorage.clear()
}
