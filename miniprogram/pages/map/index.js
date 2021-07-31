// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: "",
    latitude: "",
    markers: null,
    key: "WFRBZ-4MWLJ-HPDFD-FMXOV-UA575-UKFAD"
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function(res){
        that.setData({
         latitude: res.latitude,
         longitude: res.longitude,
         markers:[{
           id: 1,
           latitude: res.latitude,
           longitude: res.longitude
         }]
        })
      }
    })
  },
  tabBar(){
    if(typeof this.getTabBar === 'function' && this.getTabBar()){
      this.getTabBar().setData({
        selected:1
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