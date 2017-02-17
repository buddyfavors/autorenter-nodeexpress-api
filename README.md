[![Build Status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]

# AutoRenter - Express/Node.js

An Express/Node.js based implementation of the AutoRenter API.

## Overview

These instructions will cover usage information for the API.

## Prerequisites

- Make sure the project is at a location with minimal file path length (this is especially important in a Windows environment!). For this project we strongly recommend `c:/aur/api` as the project root.
- Install [Git](https://git-scm.com/downloads).
- Install [Node](https://nodejs.org/en/download/) (tested on version 6.2.2)
- Clone the Git repository to your local machine.

## How To

- Unless otherwise noted, all terminal commands must be issued from the project's root directory.

### Install project libraries

```bash
npm install
```

### Lint the code

```bash
npm run lint
```

### Run tests

Note that this will lint the code before running tests. No tests will run if lint errors are found.

```bash
npm test
```

### Generate API JSDoc documentation - [JSDoc](http://usejsdoc.org/)

```bash
npm run jsdoc
```

### Start the API app

To start the API with all debug logging enabled (recommended):

```bash
npm start
```

### Browse the app

After successfully starting the API app, you should be able to view data by browsing to [http://localhost:3000/api/locations](http://localhost:3000/api/locations).
For more in-depth testing, use a web debugging tool such as [Fiddler](https://www.telerik.com/download/fiddler) or [Postman](https://www.getpostman.com/).

[Postman collection](https://www.getpostman.com/collections/5530fbffa46505020891)

### API Route Documentation - [Swagger](http://swagger.io/)

Once running locally, you can access Swagger by going to: [http://localhost:3000/docs/api/](http://localhost:3000/docs/api/)

### API JSDoc Documentation - [JSDoc](http://usejsdoc.org/)

Once running locally, you can access JSDoc by going to: [http://localhost:3000/docs/dev/](http://localhost:3000/docs/dev/)

## Troubleshooting

### API or Test Commands Don't Work Due To Missing Dependencies

* Re-run `npm install` to verify that your dependencies are up to date.

### Too Many Debug messages

When starting the API with `npm start`, all log messages will be displayed. To fine tune logging, set a specific logging level using the `LOGGER_LEVEL` environment variable or config value:

#### Using environment variables

In non-window environments:

```bash
LOGGER_LEVEL="warn" node server
```

In windows:

```bash
set LOGGER_LEVEL="warn"
node server
```

### Everything Is Hosed!

Sometimes you just need to completely clean your development environment before starting over from the beginning. The following commands will help you start from a "clean slate":

```bash
# Blow away the node_modules folder:
rm -rf node_modules
```

#### Express debugging

To see all the internal logs used in Express, set the DEBUG environment variable to express:* when launching your app.

```bash
DEBUG=express:* node index.js
```

On Windows, use the corresponding command.

```cmd
set DEBUG=express:* & node index.js
```

To see the logs only from the router implementation set the value of DEBUG to express:router. Likewise, to see logs only from the application implementation set the value of DEBUG to express:application, and so on.

## Additional Information

This section contains additional information about the development environment.

### Container Parameters

#### Environment Variables

* `LOGGER_LEVEL` - Set the logging level
  * Examples:
    * `error`
    * `warn`
    * `info`
    * `verbose`
    * `debug`
    * `silly`
* `HOST` - Sets the API server host
* `PORT` - Sets the API server port

### Useful File Locations

* `/server` - API source
* `/tests` - Test source

## Style Guide

Please refer to the team's Node Style Guide, located [here](https://github.com/fusionalliance/autorenter-spec/blob/master/styleguide_node.md).

## Contributing

Please read the [CONTRIBUTING](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Fusion Alliance for the initiative to create a community of open source development within our ranks.

[travis-url]: https://travis-ci.org/fusionalliance/autorenter-nodeexpress-api
[travis-image]: https://travis-ci.org/fusionalliance/autorenter-nodeexpress-api.svg?branch=development&style=flat-square

[gitter-url]: https://gitter.im/fusionalliance/autorenter-nodeexpress-api
[gitter-image]: https://badges.gitter.im/fusionalliance/autorenter-nodeexpress-api.svg?style=flat-square
