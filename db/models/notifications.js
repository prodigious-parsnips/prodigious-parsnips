const db = require('../');

const Notification = db.Model.extend({
  tableName: 'Notifications',
  users: function() {
    return this.hasOne('User');
  },
  messages: function() {
    return this.hasOne('Message');
  }
});

module.exports = db.model('Notification', Notification);
