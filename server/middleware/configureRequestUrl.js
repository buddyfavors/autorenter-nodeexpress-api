'use strict';

function configureRequestUrl(app) {
  app.use(function(request, response, next) {
    request.getUrl = function() {
      return `${request.protocol}://${request.get('host')}${request.originalUrl}`;
    };

    return next();
  });
}

module.exports = configureRequestUrl;



