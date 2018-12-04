var merge = require("webpack-merge");
var prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE_CONFIG: {
    apiKey: '""',
    authDomain: '""',
    databaseURL: '""',
    projectId: '""',
    storageBucket: '""',
    messagingSenderId: '""',
  },
});
