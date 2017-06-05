const AV = require('../utils/av-weapp-min.js');

class FML extends AV.Object {
  // allows to read local data
  get upvote() {
    return this.get('upvote');
  }
  // allows to update local data
  set upvote(value) {
    this.set('upvote', value);
  }
}

AV.Object.register(FML, 'FML');
module.exports = FML;