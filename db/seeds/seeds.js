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
  return knex('Message').insert({
    id,
    text: 'wow that is SO funny, chicken',
    title: id,
    type: 'false',
    post_id: id,
    geotag: 'x1455 y2309',
    upvotes: 33,
    subreddit_id: id,
    user_id: id
  });
};

let createUserPreferences = (id) => {
  new models.User_preferences({
    upvote_threshold: Math.floor(Math.random() * 10) + 1,
    location_threshold: Math.floor(Math.random() * 10) + 1
  }).save();

  // return knex('User_Preferences').insert({
  //   upvote_threshold: Math.floor(Math.random() * 10) + 1,
  //   location_threshold: Math.floor(Math.random() * 10) + 1
  // });
};

let Users_Subreddits_Prefs = (id) => {

  new models.Users_subreddits_prefs({
    user_id: id,
    user_preferrence_id: id,
    subreddit_id: id
  }).save();

  // return knex('Users_Subreddits_Prefs').insert({
  //   id,
  //   user_id: id,
  //   user_preferrence_id: id,
  //   subreddit_id: id
  // });
};


let createNotifications = (knex, id) => {
  return knex('Notifications').insert({
    id,
    notification_message_id: id,
    user_id: id,
    seen: 'false'
  });
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
    for (let i = 0; i < 11; i++) {
      createUsers();
    }
    for (let i = 0; i < 11; i++) {
      createUserPreferences();
    }
    for (let i = 0; i < 11; i++) {
      createSubreddits();
    }
    for (let i = 0; i < 11; i++) {
      Users_Subreddits_Prefs(i);
    }
    // for (let i = 10; i < 20; i++) {
    //   records.push(createMessage(knex, i));
    // }
    // for (let i = 10; i < 20; i++) {
    //   records.push(createNotifications(knex, i));
    // }
    return Promise.all(records);
  }).catch((err) => {
    console.log('err:', err);
  });

};
