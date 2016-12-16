'use strict';

function configureRequestUrl(app) {
  app.use((request, response, next) => {
    request.getUrl = () => {
      return `${request.protocol}://${request.get('host')}${request.originalUrl}`;
    };

    return next();
  });
}

module.exports = configureRequestUrl;
