const models = require('../models');
var faker = require('faker');


let createUsers = (knex, id) => {
  return knex('Users').insert({
    id,
    username: faker.internet.userName(),
    snooze: 'false'
  });
};

let createSubreddits = (knex, id) => {
  return knex('Subreddits').insert({
    id,
    title: "Bobson Thunderblood",
    description: "does cool stuff" ,
    upvote_threshold: 5,
    location_threshold: 2
  });
};

let createMessage = (knex, id) => {
  return knex('Message').insert({
    id,
    text: "wow that is SO funny, chicken",
    title: id,
    type: 'false',
    post_id: id,
    geotag: 'x1455 y2309',
    upvotes: 33,
    subreddit_id: id,
    user_id: id
  });
};

let createUserPreferences = (knex, id) => {
  return knex('User_Preferences').insert({
    id,
    upvote_threshold: 2,
    location_threshold: 4
  });
};

let Users_Subreddits_Prefs = (knex, id) => {
  return knex('Users_Subreddits_Prefs').insert({
    id,
    user_id: id,
    user_preferrence_id: id,
    subreddit_id: id
  });
};


// let createNotifications = (knex, id) => {
//   return knex('Notifications').insert({
//     id,
//     notification_message_id: id,
//     user_id: id,
//     seen: 'false'
//   });
// };

// let createRecord = (knex, id) => {
//   return knex('users').insert({
//     id,
//     username: faker.internet.userName(),
//     snooze: 'false'
//   })
// }


exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Message').del()
  .then(()=> {
   return knex('Users_Subreddits_Prefs').del()
  })  
  .then(()=> {
   return knex('Subreddits').del()
  })
  .then(()=> {
   return knex('User_Preferences').del()
  })
  .then(()=> {
   return knex('Users').del()
  })
  .then(() => {
    let records = [];
    for(let i = 1; i < 10; i++){
      console.log(i);
      records.push(createUsers(knex, i));
      records.push(createUserPreferences(knex, i));
      records.push(createSubreddits(knex, i));
      records.push(Users_Subreddits_Prefs(knex, i));
      // records.push(createMessage(knex, i));
      // records.push(createNotifications(knex, i));
    }
    return Promise.all(records);
  }).catch((err) => {
    console.log("err:", err);
  });

};
