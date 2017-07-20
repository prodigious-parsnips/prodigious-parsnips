const db = require('../');
// console.log("model is :", models.users.forge());


const User = db.Model.extend({
  tableName: 'Users',
  messages: function() {
    return this.hasMany('Message');
  },
  users_subreddits_prefs: function() {
    return this.hasMany('Users_Subreddits_Prefs', 'user_id');
    //NOTE TO ROB -- The second argument in the function invocation above, 
    //is how you specify the name of the foreign key. (other wise it will
    //default to something dumb like uppercase 'User_id')
  },
  subreddits: function() {
    return this.hasMany('Subreddit');
  },
  user_preferences: function() {
    return this.hasMany('User_Preferences');
  },
  notifications: function() {
    return this.belongsToMany("Notification", 'Message');
  }
});

//NOTE - to make join tables work with bookshelf, it appears that 
//we have to use something called 'WITH PIVOT' (google!)
//OR MAYBE belongs to many with 'THROUGH' ...




// const getDataByUserId = userid => { 
//   return new Promise((resolve, reject) => {
//     User.where('id', userid)
//     .fetch({withRelated: ['users_subreddits_prefs']})
//     .then(data => {
//      resolve(data);
//     })
//     .catch(err => {
//      reject(err);
//     })
//   })
// }

const getDataByUserId = userid => { 
  return new Promise((resolve, reject) => {
    User.where('id', userid)
    .fetch({withRelated: ['notifications']})
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
getDataByUserId(3)
.then(notifications=>{
  console.log('this is the notifications ', JSON.stringify(notifications));
})
.catch(err=>{
  console.log(err)
})





module.exports = db.model('User', User);
