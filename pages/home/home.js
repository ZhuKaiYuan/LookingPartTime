// pages/home/home.js
var getData = require('../../data/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorActiveColor: "#F4EB0D",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    author:"啥啥啥娜娜",
    money: "100"
  },
  seeDetail: function (e) {
    console.log("跳转")
    wx.navigateTo({
      url: '../target/detail/detail',
    })
  },
  methods:{
    changeMenu: function (e) {
      this.setData({
        actIndex: e.currentTarget.id
      })
      if (this.data.actIndex == 'first') {
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
          leassonList: arr.reverse()
        })
      } else if (this.data.actIndex == 'second') {
        var arr = []
        for (var i = 0; i < getData.detailList.length; i++) {
          console.log(getData.detailList[i].leassonType)
          if (getData.detailList[i].leassonType == 2) {
            arr.push({
              id: getData.detailList[i].id,
              imgUrl: getData.detailList[i].imgUrl,
              title: getData.detailList[i].title,
              leassonType: getData.detailList[i].leassonType,
            })
          }
        }
        this.setData({
          leassonList: arr.reverse()
        })
      } else if (this.data.actIndex == 'third') {
        var arr = []
        for (var i = 0; i < getData.detailList.length; i++) {
          console.log(getData.detailList[i].leassonType)
          if (getData.detailList[i].leassonType == 3) {
            arr.push({
              id: getData.detailList[i].id,
              imgUrl: getData.detailList[i].imgUrl,
              title: getData.detailList[i].title,
              leassonType: getData.detailList[i].leassonType,
            })
          }
        }
        this.setData({
          leassonList: arr.reverse()
        })
      }
    },
  },
  onLoad: function () {
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