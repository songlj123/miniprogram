// pages/songlist/songlist.js
const request = require('../../utils/request.js')
const moment = require("moment")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songlistdata:[],
    time:"00:00:00"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.getSonglist()
        this.backgroundAudio = wx.getBackgroundAudioManager();
        this.backgroundAudio.onPlay((data,err)=>{
          var duration = this.backgroundAudio.duration
          //console.log(data)
          //console.log(err)
          //console.log(this.backgroundAudio.currentTime)
          //console.log(this.backgroundAudio.duration)
        })
          this.backgroundAudio.onTimeUpdate(()=>{
            //console.log(this.backgroundAudio.duration)
            //console.log(err)
            //console.log(this.backgroundAudio.currentTime)
            let cur = moment(this.backgroundAudio.currentTime*1000).format("HH:mm:ss")
            let duration =  moment(this.backgroundAudio.duration*1000).format("HH:mm:ss")
            this.setData({
             time: moment(this.backgroundAudio.currentTime*1000).format("HH:mm:ss")
            //time:"22:22:22"
            })
            wx.setNavigationBarTitle({
              title: `current:${this.data.time}`,
            })
          })
          this.backgroundAudio.onEnded(()=>{
            //console.log(1)
            wx.setNavigationBarTitle({
              title:'songlist',
            })
          })
          this.backgroundAudio.onPause(()=>{
            //console.log(2)
            wx.setNavigationBarTitle({
              title:'songlist',
            })
          })
          this.backgroundAudio.onStop(()=>{
            //console.log(3)
            wx.setNavigationBarTitle({
              title:'songlist',
            })
          })
        
        
  },
  async getSonglist(){
      //let songlistdata = await request.req("http://localhost:3000/recommend/resource")
      //?uid=32953014&type=1
      let songlistdata = await request.req("/user/record","get",{uid:73754818,type:0})
      //console.log(songlistdata)
      this.setData({songlistdata:songlistdata.data.allData})
      //console.log(songlistdata)
  },
  async handleSongPlay(e){
    this.backgroundAudio.stop()
    let songlistdata = await request.req("/song/url","get",{id:e.target.id})
    //console.log(songlistdata)  
    if(!songlistdata.data.data[0].url){
      wx.showToast({
        title: '该歌曲无版权',
      })
      return
    }
    this.backgroundAudio.src=songlistdata.data.data[0].url
    this.backgroundAudio.title="mysong"
    /*wx.showLoading({
      title: '播放中'+this.data.time,
    })*/
    //let songlistdata2 = await request.req("http://localhost:3000/check/music","get",{id:e.target.id})     
    //console.log(songlistdata2)     
      //let songlistdata2 = await request.req("http://localhost:3000/song/url","get",{id:e.target.id})
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
      this.backgroundAudio.stop()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.backgroundAudio.stop()
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