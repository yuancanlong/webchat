
App({
  globalData:{},/*获取手机信息 */
  onLaunch: function () {
    try {   
        var res = wx.getSystemInfoSync()
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.windowWidth = res.windowWidth;

    } catch (e) {
      // Do something when catch error
    }
  }
})