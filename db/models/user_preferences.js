const db = require('../');
const Users_Subreddits_Prefs = require('./users_subreddits_prefs.js');

const User_Preferences = db.Model.extend({
  tableName: 'User_Preferences',
  users: function() {
    return this.belongsToMany('User').through('Users_Subreddits_Prefs', 'user_preference_id', 'user_id');
  }
});

module.exports = db.model('User_Preferences', User_Preferences);

