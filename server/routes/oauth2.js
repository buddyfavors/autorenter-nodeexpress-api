'use strict';

const oauth2orize = require('oauth2orize');
const passport = require('passport');

const server = oauth2orize.createServer();

// server.exchange(oauth2orize.exchange.password(function (client, username, password, scope, done) {
//   // TODO: Validate user once database is fleshed out
// }));

exports.token = [
  passport.authenticate(['local'], {session: false}),
  server.token(),
  server.errorHandler()
];

let deleteUserToken = function (req, res) {
  if(!req.user) {
    res.status(200).end();
  } else {
    let userId = req.user.id;
    if(!userId) {
      res.status(200).end();
    } else {
      // TODO: implement deleteUserToken once database is fleshed out
    }
  }
};
exports.deleteToken = [
  passport.authenticate('bearer', {session: false}),
  deleteUserToken
];
