const db = require('../');

const Upvote = db.Model.extend({
  tableName: 'Upvotes',
  message: function() {
    return this.hasOne('Message');
  }

});

module.exports = db.model('Upvote', Upvote);
