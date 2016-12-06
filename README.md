# AutoRenter - Express/Node.js

An Express/Node.js based implementation of the AutoRenter API.

## Overview

These instructions will cover usage information for the API and the optional development virtual machine.

## Prerequisites

- The supported dev environment is to run this environment through Vagrant for virtualization.  [(download)](https://www.vagrantup.com/downloads.html)
- Alternatively you can opt to install NodeJS on your host workstation and run AutoRenter with no virtualization. However, this No-Vagrant option is not being supported, and is the use-at-your-own risk option.
- Install [Git](https://git-scm.com/downloads).

## How To

- Unless otherwise noted, all terminal commands must be issued from the project's root directory. Once logged into the Vagrant VM, this is the `/vagrant` directory.

### Start the virtual machine and log in

On Linux or MacOS, run these steps from your standard terminal. On Windows, run these steps from Powershell in Administrator mode.

From the project's root directory:

```bash
vagrant up
vagrant ssh
```

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

To start the API with no debug logging:

```bash
node server
```

### Browse the app

After successfully starting the API app, you should be able to view data by browsing to (http://192.168.99.100:3000/api/locations).
For more in-depth testing, use a web debugging tool such as [Fiddler](https://www.telerik.com/download/fiddler) or [Postman](https://www.getpostman.com/).

[Postman collection](https://www.getpostman.com/collections/5530fbffa46505020891)

## Recommended Development Workflow

The following steps describe the recommended development workflow.

1. Pull from the `development` branch.
2. As described above:
  1. Install project libraries.
  2. Run tests.
  3. Start the API.
3. Browse the API.

**If you encounter problems with any of this, please see the Troubleshooting section, below.**

If you are implementing a new feature, in addition to the previous steps you should:

1. Create a feature branch by branching off of `development`.
2. Implement your feature. *Note that during this process you should regularly (at least 1x/day) merge the `development` branch into your feature branch to ensure your code is staying current with work being done by the rest of the team.*
	1. Develop
		1. Make changes to code, scripts, unit tests, etc.
		2. Lint your code.
		3. Run the tests.
		4. Browse the API.
		5. Repeat until you have something meaningful to commit to your feature branch.
	2. Commit changes to your feature branch.
	3. Repeat these feature implementation steps until the feature is ready to review.
3. Open a pull request to merge your feature branch into `development`.

## Troubleshooting

### API or Test Commands Don't Work Due To Missing Dependencies

* Re-run `npm install --no-bin-links` to verify that your dependencies are up to date.

### Installing Project Libraries Fails

If you see an error like this:

```
EPROTO: protocol error, symlink '../acorn/bin/acorn' -> '/vagrant/node_modules/.bin/acorn'
```

Remember to install libraries with `npm install --no-bin-links` instead of just `npm install`.

### Too Many Debug messages

When starting the API with `npm start`, all log messages will be displayed. To fine tune logging, set a specific logging level using the `DEBUG` environment variable:

```bash
DEBUG="api,server" node server
```

### Everything Is Hosed!

Sometimes you just need to completely clean your development environment before starting over from the beginning. The following commands will help you start from a "clean slate":

```bash
# Blow away the node_modules folder:
rm -rf node_modules

# Destroy your virtual machine:
vagrant destroy
```

### Machine already provisioned

If you receive the message 'Machine already provisioned when running `vagrant up && vagrant ssh` run:

```bash
vagrant up --provision && vagrant ssh
```

## Additional Information

This section contains additional information about the development environment.

### Container Parameters

#### Environment Variables

* `DEBUG` - Set the logging level to debug for the supplied arguments
  * Examples:
    * `api` - Sets debugging for API calls
    * `server` - sets debugging for server messages
    * `sql` - sets debugging for database calls
* `HOST` - Sets the API server host
* `PORT` - Sets the API server port

### Useful File Locations

* `/fixtures` - Sample test data
* `/server` - API source

## Contributing

Please read the [CONTRIBUTING](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository]().

## Authors

* [**Allen Buckley**](https://github.com/allensb) - *Initial work*
* [**Ray Clanan**](https://github.com/rclanan) - *Initial work*
* [**Jarred Keuch**](https://github.com/jarredkeuch) - *Initial work*
* [**Devashri Oza**](https://github.com/Devashri) - *Initial work*

See also the list of [contributors]() who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Fusion Alliance for the initiative to create a community of open source development within our ranks.
