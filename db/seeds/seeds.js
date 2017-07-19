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

let createNotifications = (knex, id) => {
  return knex('Notifications').insert({
    id,
    notification_message_id: id,
    user_id: id,
    seen: 'false'
  });
};

// let createRecord = (knex, id) => {
//   return knex('users').insert({
//     id,
//     username: faker.internet.userName(),
//     snooze: 'false'
//   })
// }


exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Users').del()
  .then(()=> {
   return knex('Subreddits').del()
  })
  // .then(()=> {
  //  return knex('Notifications').del()
  // })
  .then(() => {
    let records = [];
    for(let i = 1; i < 10; i++){
      console.log(i);
      records.push(createUsers(knex, i));
      records.push(createSubreddits(knex, i));
      // records.push(createNotifications(knex, i));
    }
    return Promise.all(records);
  }).catch((err) => {
    console.log("err:", err);
  });

};
