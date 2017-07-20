const models = require('../../db/models');

const turnOnSnoozeByUserId = (userid) => { 
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


const turnOffSnoozeByUserId = (userid) => { 
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


const getPreferencesByUserId = userid => { 
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


const getDataByUserId = userid => { 
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

const updateUserPreferences = (userPreferenceId, upvoteThreshold, locationThreshold) => { 
  return new Promise((resolve, reject) => {
    let userPreference = new models.User_preferences({
      id: userPreferenceId,
      upvote_threshold: upvoteThreshold,
      location_threshold: locationThreshold
    })
    .save()
    .then((createdUserPref)=>{
      resolve(createdUserPref);
    })
    .catch(err => {
      reject(err);
    });
  });
};


const getMessagesBySubredditId = subid => { 
  return new Promise((resolve, reject) => {
    models.Messages.where('subreddit_id', subid)
    .fetch()
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
};


const createPost = (userid, title, text, geotag, subid) => { 
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

const createComment = (userid, title, text, geotag, postid) => { 
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

const getNotificationsByUserId = userid => { 
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


