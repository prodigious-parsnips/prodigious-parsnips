const db = require('../');

const User_Preferences = db.Model.extend({
  tableName: 'User_Preferences',
  users_subreddits_prefs: function() {
    return this.hasOne('Users_Subreddits_Prefs');
  }
});

module.exports = db.model('User_Preferences', User_Preferences);
