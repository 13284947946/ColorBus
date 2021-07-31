// pages/auth/index.js
<<<<<<< HEAD
const util = require('../../utils/utils.js');
const app = getApp();
=======
>>>>>>> master_qf
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    userInfo: null,
=======

>>>>>>> master_qf
  },

  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  checkRegister: function(userInfo) {
    wx.cloud.callFunction({
      name: 'get_setUserInfo',
      data: {
        getSelf: true
      }
    }).then((res) => {
      // console.log(res.result);
      if(!res.result?.data) {
        wx.cloud.callFunction({
          name: 'get_setUserInfo',
          data: {
            setSelf: true,
            userData: userInfo
          }
        })
      } else {
        // console.log("已经注册")
      }
    })
  },
  setProfile: function() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.getUserProfile({
        desc: '授权用户信息，用于登录',
        success(data) {
          app.globalData.userInfo = data.userInfo;
          const item = {
            userInfo: data.userInfo,
            expires_time: (new Date()).getTime()
          };
          wx.setStorageSync('app_data', item);
          // 云端是否注册
          that.onClickLogin(data.userInfo);
          resolve();
        },
        fail() {
          console.log(data.errMsg);
          reject();
        }
      })
    });
  },
  onClickLogin: util.throttle(function(event) {
    let that = this;
    const { userInfo } = app.globalData;
    if(!userInfo) {
      // 获取登录信息
      that.setProfile(userInfo).then(() => {
        // console.log(app.globalData.userInfo)
        that.setData({
          userInfo: app.globalData.userInfo
        })
      })
    }
  }),
  onLoad: function() {
    let that = this;
    const { userInfo } = app.globalData;
    // console.log(111111, userInfo);
    if(userInfo) {
      // 已经有信息
      that.setData({
        userInfo
      })
    }
=======
  onLoad: function() {
    
>>>>>>> master_qf
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
<<<<<<< HEAD
    
=======

>>>>>>> master_qf
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