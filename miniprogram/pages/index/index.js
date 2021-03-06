const app = getApp();
Page({
  data: {
    swiperList: [
      {
        url: 'https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/ColorBus/swipers/swpider-1.jpg?sign=1bf41b566dc6a6d262a8be121c66a1b0&t=1623221468',
        type: 'image'
      },
      {
        url: 'https://636c-cloud1-6g4mb3me43bc23c2-1304961616.tcb.qcloud.la/ColorBus/swipers/swiper-2.jpg?sign=348083ea29f152f6c40db4d7306413d7&t=1623221494',
        type: 'image'
      }
    ],
    DotStyle: false,
    area: ['南校', '北校'],
    TabCur: 0,
    iconList: [{
      icon: 'notice',
      color: 'pink',
      badge: 22,
      name: '通知',
      url: 'notification/index'
    }, {
      icon: 'edit',
      color: 'mauve',
      badge: 0,
      name: '反馈',
      url: 'help/index'
    }, {
      icon: 'info',
      color: 'black',
      badge: 0,
      name: '设置',
      url: 'setttings/index'
    }],
    gridCol:3,
    gridBorder: true
  },
  setProfile: function() {
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
  onLoad: function (options) {
    let that = this;
    const { userInfo } = app.globalData;
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
    } else {
      // 已经有信息
      that.checkRegister(userInfo);
    }
  },
  onShow: function() {
    this.tabBar();
  },
  tabBar(){
    if(typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData({
        selected:0
      })
    }
  },
  tabSelect(e) {
    // console.log(e.target.dataset.id);
    this.setData({
      TabCur: e.target.dataset.id
    })
  },
  clickGrid(e) {
    let num = Number(e.currentTarget.dataset.index);
    let tabList = this.data.iconList;
    wx.navigateTo({
      url: `${tabList[num].url}`
    })
  },
  selectBusItem(e) {
    let num = Number(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: 'bus/index?busNumber=' + ++num,
    })
  },
});