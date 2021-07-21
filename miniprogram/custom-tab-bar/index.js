Component({
  properties: {

  },
  data: {
    selected:0,
    tabList:[
      {
        "pagePath": "pages/index/index",
      },
      {
        "pagePath": "pages/map/index",
      },
      {
        "pagePath": "pages/talk/index",
      },
      {
        "pagePath": "pages/mine/index",
      }
    ]
  },
  methods: {
    switchTab(e){
      // console.log(this.data)
      let key = Number(e.currentTarget.dataset.index);
      let tabList = this.data.tabList;
      let selected = this.data.selected;

      if(selected !== key){
        this.setData({
          selected:key
        });
        wx.switchTab({
          url: `/${tabList[key].pagePath}`,
        })
      }
    },
    switchTalk(e) {
      let tabList = this.data.tabList;
      wx.navigateTo({
        url: `/${tabList[2].pagePath}`,
      })
    }
  }
})

