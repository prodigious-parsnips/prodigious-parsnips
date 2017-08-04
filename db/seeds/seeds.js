const models = require('../models');
var faker = require('faker');

var collectUsers = [];

let createUsers = () => {
  new models.Users({
    username: faker.internet.userName(),
    snooze: faker.random.boolean(),
  }).save();
};

let createSubreddits = (title, description, upvote_threshold, location_threshold) => {
  new models.Subreddits({
    title: title,
    description: description,
    // upvote_threshold: upvote_threshold,
    // location_threshold: location_threshold
  }).save();
};

let createMessage = (text, title, type, post_id, geotag, upvotes, subreddit_id, user_id ) => {
  new models.Messages({
    text: text,
    title: title,
    type: type,
    post_id: post_id,
    geotag: geotag,
    upvotes: upvotes,
    subreddit_id: subreddit_id,
    user_id: user_id
  }).save();

};

let createUserPreferences = (upvote_threshold, location_threshold, notification_limit) => {
  new models.User_preferences({
    upvote_threshold: upvote_threshold,
    location_threshold: Math.floor(Math.random() * 5) + 1,
    notification_limit: Math.floor(Math.random() * 10) + 1,
  }).save();

};


let createAdminPreferences = (upvote_threshold, location_threshold, notification_limit) => {
  new models.Admin_preferences({
    upvote_threshold: upvote_threshold,
    location_threshold: location_threshold,
    notification_limit: notification_limit,
  }).save();

};

let Users_Subreddits_Prefs = (user_id, user_preference_id, admin_preference_id, subreddit_id) => {
  new models.Users_subreddits_prefs({
    user_id: user_id,
    user_preference_id: user_preference_id,
    admin_preference_id: admin_preference_id,
    subreddit_id: subreddit_id
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
    return knex('User_Preferences').del();
  })
  .then(()=> {
    return knex('Subreddits').del();
  })
  .then(()=> {
    return knex('Users').del();
  })
  .then(()=> {
    return knex('Admin_Preferences').del();
  })

  .then(() => {
    let records = [];

    createUsers();
    createUsers();
    createUsers();
    createUsers();
    createUsers();
    createUsers();
    createUsers();
    createUsers();


    createSubreddits('Time Capsule', 'a place for animal lovers to go', 'https://images-na.ssl-images-amazon.com/images/I/51bMR9k82XL._SL256_.jpg', 6);
    createUserPreferences(10, 3, 2);
    createAdminPreferences(7, 11, 4);
    Users_Subreddits_Prefs(1, 1, 1, 1 );

    createSubreddits('SF Breaking News', 'a place for animal lovers to go', 'https://is1-ssl.mzstatic.com/image/thumb/Purple117/v4/11/80/2d/11802d09-54fa-30ee-b03d-1dac8c22dab1/source/256x256bb.jpg', 6);
    createUserPreferences(10, 3, 2);
    createAdminPreferences(7, 11, 4);
    Users_Subreddits_Prefs(1, 2, 2, 2 );

    createSubreddits('Stray Dog Search', 'a place for animal lovers to go', 'https://assets.change.org/photos/1/fo/gg/TkfOGgWdjXevfKo-128x128-noPad.jpg', 6);
    createUserPreferences(10, 3, 2);
    createAdminPreferences(7, 11, 4);
    Users_Subreddits_Prefs(1, 3, 3, 3 );

    createSubreddits('SFEvents', 'a place for animal lovers to go', 'https://pbs.twimg.com/profile_images/654950386122407937/oZS9fi4s.jpg', 6);
    createUserPreferences(10, 3, 2);
    createAdminPreferences(7, 11, 4);
    Users_Subreddits_Prefs(1, 4, 4, 4 );

    createSubreddits('GeoCaching', 'a place for animal lovers to go', 'https://s-media-cache-ak0.pinimg.com/736x/bc/79/bf/bc79bf77975cc7e18555a636b56a98e7--geocaching-adhesive.jpg', 6);
    createUserPreferences(10, 3, 2);
    createAdminPreferences(7, 11, 4);
    Users_Subreddits_Prefs(1, 5, 5, 5 );


    createMessage('This photo is from 1906! Right after the earthquake', 'Look at this street from 100 years ago!',  'post', null, 'https://www.lebanoninapicture.com/Prv/Images/Pages/Page_112378/tb-lanuitdesmusees-oldcity-livelovesaida-lebane-5-22-2017-2-02-19-am-t.jpg', 8, 1, 2);
    createMessage('Guys, I was walking home from work - and saw a crazy dude dancing or rapping or something...', 'Warning! Dancing man on street corner!',  'post', null, 'https://media.mutualart.com/Images/2011_10/09/23/232031878/ac26d8c8-c45e-4491-b07d-d964b0f15873_338.Jpeg', 8, 2, 2);
    createMessage('', 'Stray dog found outside a starbucks?',  'post', null, 'https://s3.amazonaws.com/media.muckrack.com/profile/images/31460/newsterrier.jpeg.256x256_q100_crop-smart.jpg', 8, 2, 2);
    createMessage('', 'Free Ice Cream at Ben and Jerry’s!',  'post', null, 'https://nwatravelguide.com/wp-content/uploads/2016/05/ice-cream-cones-in-northwest-arkansas.jpg', 8, 2, 2);
    createMessage('', 'Theres a GEO cache near you!',  'post', null, 'https://pbs.twimg.com/profile_images/718194597805969409/2zo7R9Yz_400x400.jpg', 8, 2, 2);
    createMessage('', 'Tim and Eric are coming to town this weekend :)',  'post', null, 'https://68.media.tumblr.com/avatar_b57e5da6d6ec_128.png', 8, 2, 2);
    createMessage('', 'Game of thrones experience comes to SF',  'post', null, 'https://pbs.twimg.com/profile_images/734882436153233408/TcclD_Ja_400x400.jpg', 8, 2, 2);
    createMessage('', 'This is what Golden Gate Park looked like in 1930..',  'post', null, 'https://s-media-cache-ak0.pinimg.com/236x/31/7f/6a/317f6acef2bf51a4c2ccc3dbdb29c86e--golden-gate-park-pacific-coast.jpg', 8, 2, 2);
    createMessage('', 'My indie band is playing this weekend!..',  'post', null, 'https://ichef.bbci.co.uk/images/ic/256x256/p024g3bq.jpg', 8, 2, 2);
    createMessage('', 'I lost my dog in this location... help!',  'post', null, 'https://is4-ssl.mzstatic.com/image/thumb/Purple/v4/f5/58/86/f558862f-19f6-e259-9312-fcca9970a895/source/256x256bb.jpg', 8, 2, 2);
    createMessage('', 'Do you like pina coladas?',  'post', null, 'https://s-media-cache-ak0.pinimg.com/736x/21/c1/d2/21c1d2bd0ab973cc95935117618ebae2--beer-mugs-emoji.jpg', 8, 2, 2);





    // text: text,
    // title: title,
    // type: type,
    // post_id: post_id,
    // geotag: geotag,
    // upvotes: upvotes,
    // subreddit_id: subreddit_id,
    // user_id: user_id

    

    // createSubreddits('hockey jocks', 'mustangs', 5, 6);
    // createUserPreferences(10, 3, 2);
    // createAdminPreferences(7, 11, 4);
    // //userid, userprefid, adminprefid, subredditid
    // Users_Subreddits_Prefs(2, 2, null, 1 );


    


  }).catch((err) => {
    console.log('err:', err);
  });

};
