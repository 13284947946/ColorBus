//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      // 环境ID 在云开发设置那里复制一下
      env: 'cloud1-6g4mb3me43bc23c2'
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
    // 检查过期
    // console.log("检查Storage是否过期");
    this.checkStorage();
  },
  checkStorage() {
    const item = wx.getStorageSync('app_data');
    const { expires_time, userInfo} = item,
      now = new Date().getTime();
    // 一天
    if(!userInfo || now - expires_time > 86400000) {
      wx.clearStorageSync('app_data');
    } else {
      // 有storage信息 没有过期
      this.globalData.userInfo = userInfo;
    }
  },
  globalData: {
    // 用户ID
    userId: '',
    userInfo: null,
    // 授权状态
    auth: {
      'scope.userInfo': false
    },
    // 登录状态
    logged: false
  }
})
