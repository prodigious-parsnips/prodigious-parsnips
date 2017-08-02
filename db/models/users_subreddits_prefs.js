const db = require('../');

const Users_Subreddits_Prefs = db.Model.extend({
  tableName: 'Users_Subreddits_Prefs',
  
  user_preferences: function() {
    return this.belongsTo('User_Preferences');
  },
  admin_preferences: function() {
    return this.belongsTo('Admin_Preferences');
  },
  users: function() {
    return this.belongsTo('User');
  },
  subreddits: function() {
    return this.belongsTo('Subreddit');
  }
});

module.exports = db.model('Users_Subreddits_Prefs', Users_Subreddits_Prefs);
