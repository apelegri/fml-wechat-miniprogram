//app.js
const AV = require('./utils/av-weapp-min.js');
AV.init({
  appId: 'hrajfoAICHW4XeYV4sERu6iv-gzGzoHsz',
  appKey: 'xAqG3XqAcdRNpLrGf5uFnbaU',
});

App({
  onLaunch: function () {
    console.log("test1");
  },
  getUserInfo:function(cb){
    console.log("test2");
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          console.log("success");
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            },
            fail: function(e){
              console.log(e)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})