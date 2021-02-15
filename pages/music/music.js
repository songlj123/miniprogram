// pages/music/music.js
const request = require('../../utils/request.js')

Page({
  handledigitaltap:(e)=>{
    
    wx.navigateTo({
      url: "/pages/mvlist/mvlist",
    })
  },
   handleimgtap: async (e)=>{
    //?phone=13xxx
    let data = await request.req("/login","get",{email:"songlj1233815141@163.com",password:"song2221,.[]"})
     // console.log(data)
      wx.navigateTo({
        url: "/pages/songlist/songlist",
      })
     // let data1 = await request.req("http://localhost:3000/recommend/resource")
     // console.log(data1)
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      let data = await request.req("/playlist/catlist")
      //console.log(data)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})