const expect = require('chai').expect;
const controllers = require('../controllers/controllers.js');
const dbUtils = require('../../db/lib/utils.js');
const models = require('../../db/models');
const request = require('supertest');
const express = require('express');
const app = require('../app.js');



describe('controllers tests', function () {
  // console.log('on controllers object', createComment);

  //wipes database to add entries
    beforeEach(function(done) {
      dbUtils.rollbackMigrate(done);
    });

    // Resets database back to original settings
    afterEach(function(done) {
      dbUtils.rollback(done);
    });


    it('adds a comment to the database', () => {
      controllers.createComment(10, 'test title', 'comment text', 'Xtest, Ytest', 10)
        .then(result => {
          var textFiled = result.attributes.text; 
          // console.log("text?", textFiled)
            expect(textFiled).to.equal('comment text'); 
        })
        .catch(err => {
            console.log('err in the test', err);
        });
    });

    // userid, title, text, geotag, subid
    it('adds a post to the database', () => {
      controllers.createPost(10, 'test Post title', 'post text', 'Xtest, Ytest', 10)
        .then(result => {
          var textFiled = result.attributes.text; 
          // console.log("text?", textFiled)
            expect(textFiled).to.equal('post text'); 
        })
        .catch(err => {
            console.log('err in the test', err);
        });
    });

    // userPreferenceId, upvoteThreshold, locationThreshold
    it('adds a new user preference to the database', () => {
      controllers.updateUserPreferences(12, 6, 3)
        .then(result => {
          // console.log("result??", result);
          var textFiled = result.attributes.upvote_threshold;
          // console.log("text?", textFiled)
            expect(textFiled).to.equal(6); 
        })
        .catch(err => {
            console.log('err in the test', err);
        });
    }); 

    it('turns on snooze by user_id', () => {
      controllers.turnOnSnoozeByUserId(10)
        .then(result => {
          // console.log("result??", result);
          var textFiled = result.attributes.snooze;
          // console.log("text?", textFiled)
            expect(textFiled).to.equal(true); 
        })
        .catch(err => {
            console.log('err in the test', err);
        });
    }); 

    it('turns off snooze by user_id', () => {
      controllers.turnOffSnoozeByUserId(10)
        .then(result => {
          // console.log("result??", result);
          var textFiled = result.attributes.snooze;
          // console.log("text?", textFiled)
            expect(textFiled).to.equal(false); 
        })
        .catch(err => {
            console.log('err in the test', err);
        });
    }); 

    it('gets preferences by user_id', () => {
      controllers.getPreferencesByUserId(10)
        .then(result => {
          // console.log("result??", result);
          var textFiled = result.attributes.snooze;
          // console.log("text?", textFiled)
            expect(textFiled).to.equal('false'); 
        })
        .catch(err => {
            console.log('err in the test', err);
        });
    });     
       
    it('gets messages by subreddit_id', () => {
      controllers.getMessagesBySubredditId(10)
        .then(result => {
          // console.log("result??", result);
          var userId = result.attributes.user_id;
          var text = result.attributes.text;
          // console.log("text?", textFiled)
            expect(userId).to.equal(10);
            expect(text).to.equal('wow that is SO funny, chicken'); 
        })
        .catch(err => {
            console.log('err in the test', err);
        });
    });     

 });

       // expect('hey').to.equal('hey');


