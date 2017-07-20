const db = require('../');

const Notification = db.Model.extend({
  tableName: 'Notifications',
  users: function() {
    return this.hasOne('User');
  },
  messages: function() {
    return this.belongsTo('Message', 'notification_message_id');
  }
});

module.exports = db.model('Notification', Notification);



const getNotificationsByUserId = userid => { 
  return new Promise((resolve, reject) => {
    Notification.where('user_id', userid)
    .fetch({withRelated: 'messages'})
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
};

// getNotificationsByUserId(3)
// .then(data=>{
// });