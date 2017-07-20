const db = require('../');

const Message = db.Model.extend({
  tableName: 'Message',
  subreddit: function() {
    return this.hasOne('Subreddit'); 
  },
  upvotes: function() {
    return this.hasMany('Upvote');
  },
  users: function() {
    return this.hasOne('User');
  }
});


module.exports = db.model('Message', Message);


const getMessagesBySubredditId = subid => { 
  return new Promise((resolve, reject) => {
    Message.where('subreddit_id', subid)
    .fetch()
    .then(data => {
     resolve(data);
    })
    .catch(err => {
     reject(err);
    })
  })
}

// getMessagesBySubredditId(3)
// .then((msg)=>{
//   console.log(msg)  
// })
