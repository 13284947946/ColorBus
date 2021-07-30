// pages/test/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  setProfile() {
    wx.getUserProfile({
      desc: '授权用户信息，用于登录',
      success(data) {
        app.globalData.userInfo = data.userInfo;
        const item = {
          userInfo: data.userInfo,
          expires_time: (new Date()).getTime()
        };
        wx.setStorageSync('app_data', item);
        // console.log(data.userInfo);
      },
      fail() {
        // console.log(data.errMsg);
      }
    })
  },
  onLoad: function (options) {
    let that = this;
    const { userInfo } = wx.getStorageSync('app_data');
    if(!userInfo) {
      wx.showModal({
        title: '提示',
        content: '授权信息登录',
        cancelColor: 'cancelColor',
        success(res) {
          if(res.confirm) {
            // console.log("点击了确定");
            that.setProfile();
          } else {
            // console.log("点击了取消");
          }
        }
      })
    }
  },
  onGetUserProfile: function(event) {
    let that = this;
    if(app.globalData.userInfo) {
      console.log("已经有信息");
    } else {
      // 获取登录信息
      that.setProfile();
    }
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