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

### Start the API app

To start the API with all debug logging enabled (recommended):

```bash
npm start
```

### Browse the app

After successfully starting the API app, you should be able to view data by browsing to (localhost:3000/api/locations).
For more in-depth testing, use a web debugging tool such as [Fiddler](https://www.telerik.com/download/fiddler) or [Postman](https://www.getpostman.com/).

[Postman collection](https://www.getpostman.com/collections/5530fbffa46505020891)

## Recommended Development Workflow

The following steps describe the recommended development workflow.

1. Pull from the `development` branch.
1. As described above:
  1. Install project libraries.
  1. Run tests.
  1. Start the API.
1. Browse the API.

**If you encounter problems with any of this, please see the Troubleshooting section, below.**

If you are implementing a new feature, in addition to the previous steps you should:

1. Create a feature branch by branching off of `development`.
1. Implement your feature. *Note that during this process you should regularly (at least 1x/day) merge the `development` branch into your feature branch to ensure your code is staying current with work being done by the rest of the team.*
	1. Develop
		1. Make changes to code, scripts, unit tests, etc.
		1. Lint your code.
		1. Run the tests.
		1. Browse the API.
		1. Repeat until you have something meaningful to commit to your feature branch.
	1. Commit changes to your feature branch.
	1. Repeat these feature implementation steps until the feature is ready to review.
1. Open a pull request to merge your feature branch into `development`.

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

## Contributing

Please read the [CONTRIBUTING](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository]().

## Authors

* [**Allen Buckley**](https://github.com/allensb) - *Initial work*
* [**Ray Clanan**](https://github.com/rclanan) - *Initial work*
* [**Jarred Keuch**](https://github.com/jarredkeuch) - *Initial work*
* [**Devashri Oza**](https://github.com/Devashri) - *Initial work*

See also the list of [contributors](https://github.com/fusionalliance/autorenter-nodeexpress-api/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Fusion Alliance for the initiative to create a community of open source development within our ranks.

[travis-url]: https://travis-ci.org/fusionalliance/autorenter-nodeexpress-api
[travis-image]: https://travis-ci.org/fusionalliance/autorenter-nodeexpress-api.svg?branch=development&style=flat-square

[gitter-url]: https://gitter.im/fusionalliance/autorenter-nodeexpress-api
[gitter-image]: https://badges.gitter.im/fusionalliance/autorenter-nodeexpress-api.svg?style=flat-square
