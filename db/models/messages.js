const db = require('../');

const Message = db.Model.extend({
  tableName: 'Message',
  subreddit: function() {
    return this.hasOne('Subreddit'); 
  },
  upvotes: function() {
    return this.hasMany('Upvote');
  },
  users: function() {
    return this.hasOne('User');
  }
});


module.exports = db.model('Message', Message);
