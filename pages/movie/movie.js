// pages/movie/movie.js
var AppInstance =getApp();
Page({
   
  /**
   * 页面的初始数据
   */
  data: {
    name:"yuchengren",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  console.log("movie is begin");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   console.log(AppInstance.globalData);
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

  },
  onTabItemTap:function(){
    wx.showToast({
      title: 'good',
    })
  }
})