const db = require('../');

const User_Preferences = db.Model.extend({
  tableName: 'User_Preferences',
  users: function() {
    return this.belongsToMany('User').through('Users_Subreddits_Prefs', 'user_id', 'subreddit_id');
  }
});

module.exports = db.model('User_Preferences', User_Preferences);
