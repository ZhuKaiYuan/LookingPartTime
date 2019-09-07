// pages/mein/mein.js
var getData = require('../../data/data.js');
Page({
  /**
   * 页面的初始数据
   */
  data:{
    targetList: [],
    interval: 5000,
    duration: 1000,
    author: "啥啥啥娜娜",
    money: "100"
  },

  seeDetail: function(e) {
    console.log("跳转")
    wx.navigateTo({
      url: '../target/detail/detail',
    })
  },

  positionClick: function(e) {
    //console.log(e.target.id);
    console.log(e);
    console.log(e.currentTarget.dataset.type);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getData)
    var arr = []
    for (var i = 0; i < getData.detailList.length; i++) {
      console.log(getData.detailList[i].leassonType)
      if (getData.detailList[i].leassonType == 1) {
        arr.push({
          id: getData.detailList[i].id,
          imgUrl: getData.detailList[i].imgUrl,
          title: getData.detailList[i].title,
          leassonType: getData.detailList[i].leassonType,
        })
      }
    }
    this.setData({
      imgUrls: getData.bannerList,
      leassonList: arr.reverse()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(){
    this.setData({
      targetList: getData
    })
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