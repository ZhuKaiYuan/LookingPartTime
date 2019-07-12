// pages/mein/mein.js
var getData = require('../../data/target.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "董星照",
    imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562838562898&di=2d59f596f4231d16918edd0457356bf5&imgtype=0&src=http%3A%2F%2Fwww.cnlogo8.com%2Fimg%2F201606%2Fcnlogo8klrthdykwxq.png",
    position:"董事长",
    title: "首次董事会会议",
    content: "地点:郑东新区CBD-5层-568 时间2019-07-08 14:00"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(getData)
    var arr = []
    for (var i = 0; i < getData.detailList.length; i++) {
      console.log(getData.detailList[i].name),
      arr.push({
        name: getData.detailList[i].name,
        imgUrl: getData.detailList[i].imgUrl,
        position: getData.detailList[i].position,
        title: getData.detailList[i].title,
        content: getData.detailList[i].content,
      })
    }
    console.log(arr)
    this.setData({
      targetList: arr
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