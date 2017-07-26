const models = require('../models');
var faker = require('faker');


let createUsers = (id) => {
  new models.Users({
    username: faker.internet.userName(),
    snooze: faker.random.boolean()
  }).save();
};

let createSubreddits = (id) => {
  new models.Subreddits({
    title: faker.random.words(),
    description: faker.company.catchPhrase(),
    upvote_threshold: Math.floor(Math.random() * 10) + 1,
    location_threshold: Math.floor(Math.random() * 10) + 1
  }).save();
};

let createMessage = (id) => {
  new models.Messages({
    text: faker.random.words(),
    title: faker.random.words(),
    type: faker.random.boolean(),
    post_id: null,
    geotag: 'x1455 y2309',
    upvotes: Math.floor(Math.random() * 100) + 1,
    subreddit_id: Math.floor(Math.random() * 10) + 1,
    user_id: Math.floor(Math.random() * 10) + 1
  }).save();

};

let createUserPreferences = (id) => {
  new models.User_preferences({
    upvote_threshold: Math.floor(Math.random() * 10) + 1,
    location_threshold: Math.floor(Math.random() * 10) + 1
  }).save();

};

let Users_Subreddits_Prefs = (id) => {

  new models.Users_subreddits_prefs({
    user_id: Math.floor(Math.random() * 10) + 1,
    user_preferrence_id: Math.floor(Math.random() * 10) + 1,
    subreddit_id: Math.floor(Math.random() * 10) + 1
  }).save();

};


let createNotifications = (knex, id) => {

  new models.Notifications({
    notification_message_id: Math.floor(Math.random() * 10) + 1,
    user_id: Math.floor(Math.random() * 10) + 1,
    seen: faker.random.boolean()
  }).save();
};


exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Notifications').del()
  .then(()=>{
    return knex('Message').del();
  })
  .then(()=> {
    return knex('Users_Subreddits_Prefs').del();
  })  
  .then(()=> {
    return knex('Subreddits').del();
  })
  .then(()=> {
    return knex('User_Preferences').del();
  })
  .then(()=> {
    return knex('Users').del();
  })
  .then(() => {
    let records = [];
    for (let i = 1; i < 11; i++) {
      createUsers();
    }
    for (let i = 1; i < 11; i++) {
      createUserPreferences();
    }
    for (let i = 1; i < 11; i++) {
      createSubreddits(i);
    }
    for (let i = 1; i < 11; i++) {
      Users_Subreddits_Prefs(i);
    }
    for (let i = 1; i < 11; i++) {
      createMessage(i);
    }
    for (let i = 10; i < 20; i++) {
      createNotifications(i);
    }
    return Promise.all(records);
  }).catch((err) => {
    console.log('err:', err);
  });

};
