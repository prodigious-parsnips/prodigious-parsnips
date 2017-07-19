const models = require('../models');
var faker = require('faker');


let createRecordOne = (knex, id) => {
  return models.Users.forge({
    username: faker.internet.userName(),
    snooze: 'false'
  }).save();
};




exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(() => {
      let records = [];
      for(let i = 0; i < 10; i++){
        records.push(createRecordOne(knex, i));
      }
      return Promise.all(records);
    });

};
