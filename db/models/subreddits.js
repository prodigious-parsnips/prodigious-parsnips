const db = require('../');

const Subreddit = db.Model.extend({
  tableName: 'Subreddits',
  users: function() {
    return this.belongsToMany('User').through('Users_Subreddits_Prefs', 'subreddit_it', 'user_id');
  },
  users_subreddits_prefs: function() {
    return this.hasMany('Users_Subreddits_Prefs');
  }

});

module.exports = db.model('Subreddit', Subreddit);
