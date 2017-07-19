const knex = require('knex')(require('../knexfile'));
const db = require('bookshelf')(knex);
const models = require('./models');

db.plugin('registry');
//bookshelf modelbase ???

module.exports = db;

// diagram api ...models.forge().fetch... --->?
//  db.getAllUserData = () => {
//     console.log('models', models);
//   return models.Users.fetch({
//     columns: ['username', 'snooze']
//   }).query({
//       where: {
//         username: 'Jasen28'
//     }
//   }).then((person)=> {
//     console.log("person", person);
//   })
// }

// db.getAllUserData();

// /user

// GET
// gives the user_id
// all notifications
// all subreddits,
// for that user

// POST
// will give username and password - store the user

// /settings

// GET
// user_id, return user settings for all subreddits
// POST
// -user_id, subreddit_id, and settings changes - update user preferences for that subreddit

// /messages


// GET
// -subreddit_id, return all posts and comments associated with subreddit

// POST
// -give me a user_id and either a subreddit_id or a post_id depending on if it’s a comment or Post

// /notifications

// GET
// -user_id, return all notifications for that user_id

// /snooze
// post
// user_id, toggle the snooze preference

