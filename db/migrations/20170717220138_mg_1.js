

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('Users', function(table) {
      table.increments('id').unsigned().primary();
      table.string('username').notNullable();
      table.string('snooze').nullable();
    }),

    knex.schema.createTableIfNotExists('Subreddits', function(table) {
      table.increments('id').unsigned().primary();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.integer('upvote_threshold').notNullable();
      table.integer('location_threshold').notNullable();
    }),
    knex.schema.createTableIfNotExists('Message', function(table) {
      table.increments('id').unsigned().primary();
      table.string('text', 255).notNullable();
      table.string('title', 50).notNullable();
      table.string('type').notNullable();
      table.integer('post_id').notNullable();
      table.string('geotag').notNullable();
      table.integer('upvotes').nullable();
      table.integer('subreddit_id').references('Subreddits.id');
      table.integer('user_id').references('Users.id');
    }),

    knex.schema.createTableIfNotExists('Upvotes', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('message_id').references('Message.id');
      table.integer('user_id').references('Users.id');
    }),

    knex.schema.createTableIfNotExists('Users_Subreddits_Prefs', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').references('Users.id');
      table.integer('user_preferrence_id').references('User_Preferences.id');
      table.integer('subreddit_id').references('Subreddits.id');
    }),

    knex.schema.createTableIfNotExists('User_Preferences', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('upvote_threshold').notNullable();
      table.integer('location_threshold').notNullable();
    }),

    knex.schema.createTableIfNotExists('User_Preferences', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('upvote_threshold').notNullable();
      table.integer('location_threshold').notNullable();
    }),

    knex.schema.createTableIfNotExists('Notifications', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('notification_message_id').references('Message.id');
      table.integer('user_id').references('Users.id');
      table.string('seen').notNullable();
    })

  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
	knex.schema.dropTable('Message'),
	knex.schema.dropTable('Upvotes'),
	knex.schema.dropTable('Users'),
	knex.schema.dropTable('Users_Subreddits_Prefs'),
	knex.schema.dropTable('Subreddits'),
	knex.schema.dropTable('User_Preferences')	
  ]);
};
