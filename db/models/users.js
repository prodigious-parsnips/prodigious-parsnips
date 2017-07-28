const db = require('../');

const User = db.Model.extend({
  tableName: 'Users',
  messages: function() {
    return this.hasMany('Message');
  },
  subreddits: function() {
    return this.belongsToMany('Subreddit').through('Users_Subreddits_Prefs', 'user_id', 'subreddit_id');
  },
  user_preferences: function() {
    return this.belongsToMany('User_Preferences').through('Users_Subreddits_Prefs', 'user_id', 'user_preferrence_id ');
  },
  notifications: function() {
    return this.hasMany('Notification', 'user_id');
  }
});

module.exports = db.model('User', User);
