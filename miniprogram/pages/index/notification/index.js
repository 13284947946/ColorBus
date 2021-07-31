// pages/index/notification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hadRed:false,
    hadDeleted:false,
    isActive:false,
    select_all:false,
    hadchecked:'',
    items: [
      { id: '1' ,checked: false},
      { id: '2', checked: false},
      { id: '3', checked: false},
      { id: '4', checked: false},
      { id: '5', checked: false}
    ]
  },
  select:function(e){
    var newid = e.currentTarget.dataset.id - 1;
    var newitems = "items[" + newid + "].checked";
    this.setData({ [newitems]: !this.data.items[newid].checked});

    var all = true;
    for(var i in this.data.items){
      if (this.data.items[i].checked)
      {
        continue;
      }
      else
      {
        all=false;
        break;
      }
    }
    //console.log(all);
    this.setData({ select_all: all});
  },
  deleteitem: function () {
    console.log("绑了数据再写");
    
  },

  red:function(e){
    console.log("绑了数据再写");
    if(false)//判断是否有未读消息
    {
      return;
    }
    this.setData({hadRed:true});
  },

  deleted: function (e) { 
    if (this.data.hadDeleted==false)
    {
      this.setData({ hadDeleted: true });
    }
    else
    {
      this.setData({ hadDeleted: false });
    }
    
    
  },

  select_all: function () {
    this.setData({
      select_all: true
      , hadchecked: !this.data.select_all
    })

    for(var i in this.data.items)
    {
      var newitems = "items[" + i + "].checked";
      this.setData({
        [newitems]:true
      })
    }
  },
  // 取消全选
  select_none: function () {
    this.setData({
      select_all: false
      , hadchecked: !this.data.select_all
    })
    for (var i in this.data.items) {
      var newitems = "items[" + i + "].checked";
      this.setData({
        [newitems]: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (true)//判断是否有未读消息
    {
      return;
    }
    this.setData({ hadRed: true });
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