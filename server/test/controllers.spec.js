const expect = require('chai').expect;
const createComment = require('../controllers/controllers.js');
const dbUtils = require('../../db/lib/utils.js');
const models = require('../../db/models');
const request = require('supertest');
const express = require('express');
const app = require('../app.js');



describe('controllers tests', function () {
  // console.log('on controllers object', createComment);

  //wipes database to add entries
    beforeEach(function (done) {
      dbUtils.rollbackMigrate(done);
    });

    // Resets database back to original settings
    afterEach(function (done) {
      dbUtils.rollback(done);
    });

    it('adds a comment to the database', function(){
      createComment(10, 'test title', 'test text', 'Xtest, Ytest', 10)
        .then(result => {
          var textFiled = result.attributes.text 
            console.log("result??", result.attributes.text)
            textFiled.should.equal('test text');
            done();
        })
        .catch(err => {
            console.log('err in the test', err);
        })
    })

    


 });

       // expect('hey').to.equal('hey');


