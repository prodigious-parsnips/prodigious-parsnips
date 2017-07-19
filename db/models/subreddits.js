const db = require('../');

const Subreddit = db.Model.extend({
  tableName: 'Subreddits',
  subreddit: function() {
    return this.hasMany('Message');
  },
  users_subreddits_prefs: function(){
    return this.hasMany('Users_Subreddits_Prefs');
  }
});

module.exports = db.model('Subreddit', Subreddit);
