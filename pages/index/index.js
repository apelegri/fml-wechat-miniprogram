//index.js
const AV = require('../../utils/av-weapp-min.js');
const FML = require('../../model/fml.js');

Page({
  data: {
    stories: {}
  },
  onLoad: function (option) {
    console.log(option)
    // Display toast if form success
    if (option.FML == 1) {
      console.log('cest pasé ')
      wx.showToast({
        title: 'Thanks for sharing!',
        icon: 'success',
        duration: 3000
      });
    }
    console.log('on ready')
    new AV.Query('FML')
      .descending('createdAt')
      .find()
      .then(stories => this.setData({ stories }))
      .catch(console.error); 
  },
 increment: function (e) {
   // Get the object ID of the FML clicked by user
   console.log(e.target.id); 

   // Increment in the DB
   var fml = new AV.Query('FML')
     .get(e.target.id)
     .then(function (results) {
       results.increment('upvote',1).save();
     })
     .catch(console.error);

   // Find the object ID in local data storage
   var select = this.data.stories.findIndex(FML => FML.id === e.target.id)
  
  // Increment in the local data storage
  this.data.stories[select].upvote = this.data.stories[select].upvote + 1

  // Update local data
  this.setData({
    stories: this.data.stories
  })
 }
})