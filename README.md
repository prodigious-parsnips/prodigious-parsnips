# Scout API Server

The backend for a React Native application called Scout. Scout is an application which allows users to get notified of events relevant to their interests based on geolocation. Users can follow those interests by subscribing and participating in Hubs. If there is a Hub update and a user is within range they will be notified of the event! 

## Team

Derek Johnson,
Nick Akey, 
Ben Bucca,
Rob St. Lezin,


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Requirements](#requirements)
1. [Documentation](#Documentation)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)


## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- Xcode

## Documentation

/user
Returns the user data associated with user id passed in as query parameters.

/map
Returns a new Scout and defines admin preferences which become the default preferences for any subscribers.
It accepts **upvoteThreshold**, **distanceThreshold**, **mapTitle**, **mapDescription**, **userId** on the request body.

/settings
*GET* - Returns user preferences for user id.
It accepts an **id** as a query parameter

*POST* - Updates user preferences. 
It accepts a **adminTitle**, **adminDescription**, **userPreferenceId**, **upvoteThreshold**, **locationThreshold**, **notificationLimit**
on the request body.

/messages
*GET* - Returns messages by post id.
NOTE:
In order to get posts: send a **subredditId** as a query parameter
In order to get comments: send a **postId** as a query paramater
If neither is given then local messages will be given.

*POST* - Add messages.
In order to add a post: send a **subId** as a query parameter.
Accepts **userId**, **title**, **text**, **geotag**, **subId**

In order to add a comment: send a **postId** as a query paramater.
Accepts **userId**, **title**, **text**, **geotag**, **postId**



### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql

To run the react native simulator:
react-native run-ios
```


Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies
```
yarn global add grunt-cli knex eslint
```

## App Configuration

Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable. 

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

See https://www.npmjs.com/package/config
And https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation:

Use grunt to create a new database for your development and test environments:

Development envronment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

To migrate to the latest version, run:

`knex migrate:latest --env NODE_ENV`

To rollback a version, run:

`knex migrate:rollback --env NODE_ENV`

To populate the database with seed data, run:

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run start`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`



