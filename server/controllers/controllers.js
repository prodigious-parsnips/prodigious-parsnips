const models = require('../../db/models');

module.exports.turnOnSnoozeByUserId = (userid) => { 
  return new Promise((resolve, reject) => {
    let user = new models.Users({
      id: userid,
      snooze: true
    })
    .save()
    .then((snooze)=>{
      resolve(snooze);
    })
    .catch(err => {
      reject(err);
    });
  });
};


module.exports.turnOffSnoozeByUserId = (userid) => { 
  return new Promise((resolve, reject) => {
    let user = new models.Users({
      id: userid,
      snooze: false
    })
    .save()
    .then((snooze)=>{
      resolve(snooze);
    })
    .catch(err => {
      reject(err);
    });
  });
};


module.exports.getPreferencesByUserId = userid => { 
  return new Promise((resolve, reject) => {
    models.Users.where('id', userid)
    .fetch({withRelated: 'user_preferences'})
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
};


module.exports.getDataByUserId = userid => { 
  return new Promise((resolve, reject) => {
    models.Users.where('id', userid)
    .fetch({withRelated: ['subreddits', 'notifications']})
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports.updateUserPreferences = (adminTitle, userPreferenceId, upvoteThreshold, locationThreshold, notificationLimit) => { 
  
  if(adminTitle) {
    return new Promise((resolve, reject) => {
      let adminPreference = new models.Admin_preferences({
        id: userPreferenceId,
        upvote_threshold: upvoteThreshold,
        location_threshold: locationThreshold,
        notification_limit: notificationLimit
      })
      .save()
      .then((createdUserPref)=> {
        resolve(createdUserPref);
      })
      .catch(err => {
        reject(err);
      });
    });

  } else {
    return new Promise((resolve, reject) => {
      let userPreference = new models.User_preferences({
        id: userPreferenceId,
        upvote_threshold: upvoteThreshold,
        location_threshold: locationThreshold,
        notification_limit: notificationLimit
      })
      .save()
      .then((createdUserPref)=>{
        resolve(createdUserPref);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
};

// module.exports.updateUserPreferences(1, 30, 7, 4).then(data) => {
//   console.log("updateUserPreferences", data);
// };



module.exports.getMessagesBySubredditId = subid => { 
  return new Promise((resolve, reject) => {
    models.Messages.where('subreddit_id', subid)
    .fetchAll()
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports.getMessagesByPostId = postid => { 
  return new Promise((resolve, reject) => {
    models.Messages.where('post_id', postid)
    .fetchAll()
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
};


module.exports.createPost = (userid, title, text, geotag, subid) => { 
  return new Promise((resolve, reject) => {
    let message = new models.Messages({
      title: title,
      text: text,
      type: 'post',
      post_id: null,
      geotag: geotag,
      upvotes: 0,
      subreddit_id: subid,
      user_id: userid
    })
    .save()
    .then((createdMessage)=>{
      resolve(createdMessage);
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports.createComment = (userid, title, text, geotag, postid) => { 
  return new Promise((resolve, reject) => {
    let message = new models.Messages({
      title: '',
      text: text,
      type: 'comment',
      post_id: postid,
      geotag: geotag,
      upvotes: 0,
      subreddit_id: null,
      user_id: userid
    })
    .save()
    .then((createdMessage)=>{
      resolve(createdMessage);
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports.getNotificationsByUserId = userid => { 
  return new Promise((resolve, reject) => {
    models.Notifications.where('user_id', userid)
    .fetch({withRelated: 'messages'})
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
};


