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




// const turnOnSnoozeByUserId = (userid) => { 
//   return new Promise((resolve, reject) => {
//     let user = new User({
//       id: userid,
//       snooze: true
//     })
//     .save()
//     .then((snooze)=>{
//       resolve(snooze);
//     })
//     .catch(err => {
//       reject(err);
//     });
//   });
// };

// const turnOffSnoozeByUserId = (userid) => { 
//   return new Promise((resolve, reject) => {
//     let user = new User({
//       id: userid,
//       snooze: false
//     })
//     .save()
//     .then((snooze)=>{
//       resolve(snooze);
//     })
//     .catch(err => {
//       reject(err);
//     });
//   });
// };

// const getPreferencesByUserId = userid => { 
//   return new Promise((resolve, reject) => {
//     User.where('id', userid)
//     .fetch({withRelated: 'user_preferences'})
//     .then(data => {
//       resolve(data);
//     })
//     .catch(err => {
//       reject(err);
//     });
//   });
// };


// const getDataByUserId = userid => { 
//   return new Promise((resolve, reject) => {
//     User.where('id', userid)
//     .fetch({withRelated: ['subreddits', 'notifications']})
//     .then(data => {
//       resolve(data);
//     })
//     .catch(err => {
//       reject(err);
//     });
//   });
// };




module.exports = db.model('User', User);
