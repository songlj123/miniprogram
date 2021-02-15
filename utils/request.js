//const host = "http://localhost:3000"
const host = "http://songljqyc.cn.utools.club"
function req(url,method='get',data={}){
  return new Promise((resolve,reject)=>{
      wx.request({
        url:host+url,
        header:{
          cookie:"MUSIC_U=3cc460d813e97c851c39410be9c4f48b7863f6447f0309ad4e98ce52e946e36f0332919e9c74070b356723190e41c143e381395bf06ec255; Max-Age=1296000; Expires=Tue 9 Feb 2021 08:25:52 GMT; Path=/;"
        },
        method,
        data,
        success:(data)=>resolve(data),
        fail:(err)=>reject(err)
      })
  })
}
module.exports= {req}