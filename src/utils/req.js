import taro from "@tarojs/taro";

export const get = function (url, data = {}) {
  return new Promise((resolve)=>{
    taro.request({
      url: url,
      data: data,
      method: 'GET',
      success: function (res){
        resolve(res.data)
      }
    })
  })
}

export const post = function (url, data = {}){
  return new Promise((resolve)=> {
    taro.request({
      url: url,
      data: data,
      method:'POST',
      success: function (res){
        resolve(res.data)
      }
    })
  })
}

export const put = function (url, data = {}){
  return new Promise((resolve) => {
    taro.request({
      url:url,
      data:data,
      method:'PUT',
      success: function (res){
        resolve(res.data)
      }
    })
  })
}

export const del = function (url, data = {}){
  return new Promise((resolve) => {
   taro.request({
     url:url,
     data:data,
     method:'DELETE',
     success: function (res){
       resolve(res.data)
     }
   })
  })
}


/*
  6
  我昨天是写了new Promise
 这怎么区分get和post哇
 我昨天没加双引号
 emm
  ?没听清
  .js
  这个破后缀名怎么一会儿要一会儿不要的
*/
