// pages/new/new.js
const AV = require('../../utils/av-weapp-min.js');
const FML = require('../../model/fml.js');

var app = getApp()
Page({
  data: {
    loading: false,
    userInfo: {}
  },
  // Retrieve user info
  onLoad: function () {
    console.log('FML page loaded')
    var that = this
    app.getUserInfo(function (userInfo) {
      console.log('aaa')
      that.setData({
        userInfo: userInfo,
      })
  
    })
  },
  // New FML Submission
  bindFmlSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    })
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    })
    var nickName = e.detail.value.nickName
    var quote = e.detail.value.quote
    console.log(e)

    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);

    setTimeout(function () {
      new FML({
        name: nickName,
        quote: quote,
        upvote: 0
      }).setACL(acl).save().catch(console.error);
      wx.reLaunch({
        url: '/pages/index/index?FML=1'
      });
    }, 2000);
    console.log(Form)
  }

})



