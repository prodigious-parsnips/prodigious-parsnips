'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  //this is where we would send API interaction instructions
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });


router.route('/user')
  .get((req, res) => {
    //I give you user user id, as well as notifications and all the subreddits that a user is subscribed to
    res.status(200).send('this is user!');
  })
  .post((req, res) => {
    //this would create a new user
    console.log('this is user');
    res.status(201).send({ data: 'Posted!' });
  });


router.route('/settings')
  .get((req, res) => {
    //this would return all the settings data based on a user id
    res.status(200).send('this is settings!');
  })
  .post((req, res) => {
    //this would update a users settings information 
    console.log('this is settings');
    res.status(201).send({ data: 'Posted!' });
  });


router.route('/messages')
  .get((req, res) => {
    //this would get all the posts associated with a subreddit (Full posts, as well as comments)
    res.status(200).send('this is messages!');
  })
  .post((req, res) => {
    //this would add a new comment or new post based on either a subreddit id or a post id
    console.log('this is messages');
    res.status(201).send({ data: 'Posted!' });
  });


router.route('/notifications')
  .get((req, res) => {
    //this will load all the notifications based on a user id
    res.status(200).send('this is notifications!');
  });


router.route('/snooze')
  .post((req, res) => {
    //this will turn on or off a users snooze preference
    console.log('this is snooze');
    res.status(201).send({ data: 'Posted!' });
  });



module.exports = router;
