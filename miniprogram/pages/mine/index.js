// pages/auth/index.js
const util = require('../../utils/utils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isLogin: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onClickLogin: util.throttle(function(event) {
    let that = this;
    if(!this.data.isLogin) {
      wx.getSetting({
        success(res) {
          if(res.authSetting['scope.userInfo']) {
            wx.getUserProfile({
              desc: 'desc',
              success(data) {
                console.log(data.userInfo);
                that.setData({
                  userInfo: data.userInfo,
                  isLogin: true
                })
              },
              fail() {
                wx.showToast({
                  title: '取消授权',
                  icon: 'none',
                  duration: 1500
                })
              }
            })
          }
        }
      });
    }
  }),
  onLoad: function() {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.tabBar();
  },
  tabBar(){
    if(typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData({
        selected:3
      })
    }
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