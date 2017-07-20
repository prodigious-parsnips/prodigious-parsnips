const db = require('../');
const Users_Subreddits_Prefs = require('./users_subreddits_prefs.js')

const User_Preferences = db.Model.extend({
  tableName: 'User_Preferences',
  users: function() {
    return this.belongsToMany('User').through('Users_Subreddits_Prefs', 'user_preference_id', 'user_id');
  }
});

module.exports = db.model('User_Preferences', User_Preferences);



const updateUserPreferences = (userPreferenceId, upvoteThreshold, locationThreshold) => { 
  return new Promise((resolve, reject) => {
    let userPreference = new User_Preferences({
      id: userPreferenceId,
      upvote_threshold: upvoteThreshold,
      location_threshold: locationThreshold
    })
    .save()
    .then((createdUserPref)=>{
      resolve(createdUserPref)
    })
    .catch(err => {
     reject(err);
    })
  })
}

updateUserPreferences(5,  1, 9);