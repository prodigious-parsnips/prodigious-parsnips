const db = require('../');
const Users_Subreddits_Prefs = require('./users_subreddits_prefs.js');

const Admin_Preferences = db.Model.extend({
  tableName: 'Admin_Preferences',
  users: function() {
    return this.belongsToMany('User').through('Users_Subreddits_Prefs', 'admin_preference_id', 'user_id');
  }
});

module.exports = db.model('Admin_Preferences', Admin_Preferences);