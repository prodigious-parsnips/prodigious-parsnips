const db = require('../');

const Users_Subreddits_Prefs = db.Model.extend({
  tableName: 'Users_Subreddits_Prefs',
  user_preferences: function() {
    return this.hasMany('User_Preferences');
  },
  users: function(){
    return this.hasOne('User');
  }
});

module.exports = db.model('Users_Subreddits_Prefs', Users_Subreddits_Prefs);
