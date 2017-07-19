const db = require('../');

const User = db.Model.extend({
  tableName: 'Users',
  messages: function() {
    return this.hasMany('Message');
  },
  users_subreddits_prefs: function() {
    return this.hasMany('Users_Subreddits_Prefs');
  },
  subreddits: function() {
    return this.hasMany('Subreddit');
  },
  user_preferences: function() {
    return this.hasMany('User_Preferences');
  }

});

module.exports = db.model('User', User);
