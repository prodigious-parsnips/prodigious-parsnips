'use strict';
const express = require('express');
const router = express.Router();
let controllers = require('../controllers').Controllers;



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
    controllers.getDataByUserId(req.query.id)
    .then((data)=>{
      res.status(200)
      .send(data);
    });
  })
  .post((req, res) => {
    //this would create a new user
    console.log('this is user');
    res.status(201)
    .send({ data: 'Posted!' });
  });


router.route('/settings')
  .get((req, res) => {
    controllers.getPreferencesByUserId(req.query.id)
    .then((data)=>{
      res.status(200)
      .send(data);
    })
    .catch((err)=>{
      console.log(err);
    });
  })
  .post((req, res) => {
    controllers.updateUserPreferences(req.body.userPrefId, req.body.upvoteThreshold, req.body.locationThreshold)
    .then((data)=>{
      res.status(200)
      .send(data);
    })
    .catch((err)=>{
      console.log(err);
    });
  });


router.route('/messages')
  .get((req, res) => {
    controllers.getMessagesBySubredditId(req.query.subredditId)
    .then((data)=>{
      res.status(200)
      .send(data);
    })
    .catch((err)=>{
      console.log(err);
    });
  })
  .post((req, res) => {
    console.log(req.body);
    if (req.body.subId) {
      controllers.createPost(req.body.userId, req.body.title, req.body.text, req.body.geotag, req.body.subId)
      .then((data)=>{
        res.status(201)
        .send(data);
      });
    } else {
      controllers.createComment(req.body.userId, req.body.title, req.body.text, req.body.geotag, req.body.postId)
      .then((data)=>{
        res.status(201)
        .send(data);
      });
    }
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
