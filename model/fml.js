const AV = require('../utils/av-weapp-min.js');

class FML extends AV.Object {
  // It allows to read local data
  get upvote() {
    return this.get('upvote');
  }
  // It allows to update local data
  set upvote(value) {
    this.set('upvote', value);
  }
}

// Export object 
AV.Object.register(FML, 'FML');
module.exports = FML;