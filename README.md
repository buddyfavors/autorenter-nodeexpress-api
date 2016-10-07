# AutoRenter - Express/Node.js

An Express/Node.js based implementation of the AutoRenter API.

## Overview

These instructions will cover usage information for the API and for the associated docker containers.

## Prerequisites

- In order to run this containerized application you'll need Docker engine 1.10 or higher installed via the Docker Toolbox, available [here](https://www.docker.com/products/docker-toolbox) for download.

    Docker Native is currently in Beta and somewhat unstable, so at this point we don't support it. It's the future, however, so look for this position to change.

### Windows-Only setup notes

-   You must enable VT-X or AMD-v in your BIOS for Docker Toolbar to work.

-   As a workaround for current limitations Docker Toolbar for Windows, you must
    clone this project into your user directory so that it has the following
    path: `/Users/<username>/autorenter_nodeexpress_api`

## How To

**Unless otherwise noted, all terminal commands must be issued from the project's root directory. You must use the Docker Quickstart Terminal if on Windows or Mac.**

### [Re]build and start the containers

```bash
./bin/rebuild-server.sh
```

### Lint the code

Note that the aur-api container must be running to lint the code.

```bash
docker exec -t aur-api npm run lint
```

### Run tests

Note that the aur-api container must be running to run the tests.

```bash
docker exec -t aur-api npm test
```

### View the database

#### Using the psql Command Line Interface

Note that the postgres container must be running to interact with the database.

```bash
docker exec -it aur-db psql -U postgres
```

For additional information, psql documentation is available at [https://www.postgresql.org/docs/9.3/static/app-psql.html](https://www.postgresql.org/docs/9.3/static/app-psql.html).

##### Example psql session

The following example:

* Connects to the auto_renter database from within the psql shell.
* List all locations.
* Exits psql.

```bash
\connect auto_renter
select * from "Locations";
\q
```

### Browse the app

After successfully [re]building the containers, you should be able to run the application by browsing to `http://192.168.99.100:3000/`.

## Recommended Development Workflow

The following steps describe the recommended development workflow.

1. Pull from Master.
1. Build the containers.
1. Browse the app.

>If you encounter problems with any of this, please see the Troubleshooting section, below.

If you are implementing a new feature, in addition to the previous steps you should:

1. Create a feature branch by branching off of Master.
1. Implement your feature. *Note that during this process you should regularly (at least 1x/day) merge the Master branch into your feature branch to ensure your code is staying current with work being done by the rest of the team.*
	1. Develop
		1. Make changes to code, scripts, etc.
		1. Lint your code.
		1. Run the tests.
		1. Browse the app.
		1. Repeat until you have something meaningful to commit to your feature branch.
	1. Commit changes to your feature branch.
	1. Repeat these feature implementation steps until the feature is ready to review.
1. Open a pull request to merge your feature branch into Master.

## Troubleshooting

### API Doesn't Start

We are currently experiencing problems running the containerized API on a Windows host. This is due to a problem with the volume (folder) sharing between the host and the container. As a workaround:

* Remove the `-v $(pwd):/home/api` option from *build-server.sh*.
* Manually run `./bin/rebuild-server` after you make changes to the code.
  * This is necessary because the watch loop can't detect file changes with the folder sharing removed.

If this doesn't resolve the error, it might be helpful to completely delete the project directory (`rm -rf autorenter_nodeexpress_api/`) and re-clone the project onto your machine.

### Linting / Test Commands Don't Work Due To Missing Dependencies

We've had problems with npm not reliably installing all of the required dependencies into the API container. If you experience problems with the linting and/or test commands in the *Lint the code* or *Run tests* section, above, open a shell in the API docker container and run `npm install` as follows:

```bash
# Enter into a shell inside of the api container:
docker exec -it aur-api /bin/sh

# You are now at a prompt inside the api container. Now run npm install:
/home/api # npm install

# Exit the container:
/home/api # exit
```

At this point you should be able to successfully run the commands.

### Everything Is Hosed!

Sometimes you just need to completely clean your development environment before starting over from the beginning. The following commands will help you start from a "clean slate":

```bash
# Blow away the node_modules folder:
rm -rf node_modules

# Kill all containers, and remove all containers and images:
./bin/clear-all-images.sh 
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
* `HOME` - Sets the project's home directory
* `POSTGRES_PASSWORD` - Sets the super admin password
* `HOST` - Sets the API server host
* `PORT` - Sets the API server port
* `DB_USER` - Sets API database user
* `DB_PASSWORD` - Sets the API database password
* `DB_HOST` - Sets the API database host
* `DB_NAME` - Sets the API database name
* `DB_DIALECT` - Sets the API database dialect
* `DB_LOGGING` - Sets the API database logging

#### Volumes

* `/home/api` - The project's home directory
* `/var/lib/postgresql` - Data directory for DB

### Useful File Locations

* `/bin` - Collection of helper scripts
* `/fixtures` - Sequalize test data
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
