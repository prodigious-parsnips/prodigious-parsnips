const db = require('../');
const User = db.Model.extend({
  tableName: 'Users',
  messages: function() {
    return this.hasMany('Message');
  },
  subreddits: function() {
    return this.belongsToMany('Subreddit').through('Users_Subreddits_Prefs', 'user_id', 'subreddit_id')
  },
  user_preferences: function() {
    return this.hasMany('User_Preferences');
  },
  notifications: function() {
    return this.hasMany("Notification", 'user_id');
  }
});



const getDataByUserId = userid => { 
  return new Promise((resolve, reject) => {
    User.where('id', userid)
    .fetch({withRelated: ['subreddits', 'notifications']})
    .then(data => {
     resolve(data);
    })
    .catch(err => {
     reject(err);
    })
  })
}

// getDataByUserId(3)
// .then(user=>{
//   console.log('this is the user ', JSON.stringify(user));
// })
// .catch(err=>{
//   console.log(err)
// })






module.exports = db.model('User', User);
