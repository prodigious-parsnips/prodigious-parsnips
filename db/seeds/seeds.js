const models = require('../models');
var faker = require('faker');


let createUsers = (knex, id) => {
  return knex('Users').insert({
    id,
    username: faker.internet.userName(),
    snooze: 'false'
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
    .then(() => {
      let records = [];
      for(let i = 1; i < 10; i++){
        records.push(createUsers(knex, i));
      }
      return Promise.all(records);
    }).catch((err) => {
      console.log("err:", err);
    });

};
