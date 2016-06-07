# AutoRenter - Express/Node.js

An Express/Node.js based implementation of the AutoRenter API.

## Getting Started

These instructions will cover usage information for the API and for the docker container.

### Prerequisites

In order to run this container you'll need Docker engine 1.10 or higher installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

### Usage

#### Container Parameters

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

#### Useful file locations

* `/bin` - Collection of helper scripts
* `/fixtures` - Sequalize test data
* `/server` - API source

#### Development Environment Setup

##### Initial build of the containers

Use a terminal - **must be the Docker Quickstart Terminal if on Windows or Mac** - to run the following commands from the project's root directory:

```bash
./bin/build-server.sh
```

##### To rebuild the containers

Use a terminal - **must be the Docker Quickstart Terminal if on Windows or Mac** - to run the following commands from the project's root directory:

```bash
./bin/rebuild-server.sh
```

#### Running Tests

Use a terminal - **must be the Docker Quickstart Terminal if on Windows or Mac** - to run the following commands:

```bash
docker exec -t aur-api npm test
```

#### Linting the code

With the aur-api container running, use a terminal - **must be the Docker Quickstart Terminal if on Windows or Mac** - to run the following commands:

```bash
docker exec -t aur-api npm run lint
```

#### View the Database

##### Using the psql Command Line Interface

With the postgres container running, use a terminal - **must be the Docker Quickstart Terminal if on Windows or Mac** - to run the following commands:

```bash
docker exec -it aur-db psql -U postgres
```

**NOTE: psql documentation is available at [https://www.postgresql.org/docs/9.3/static/app-psql.html](https://www.postgresql.org/docs/9.3/static/app-psql.html)**

###### Example psql session

The following example:

* Connects to the auto_renter database.
* List all locations.
* exits psql.

```bash
\connect auto_renter
select * from "Locations";
\q
```

## Browse the App

After [re]building the containers, you should be able to run the application by browsing to `http://192.168.99.100:3000/`.

## Troubleshooting

### API Doesn't Start

We are currently experiencing problems running the containerized API on a Windows host. This is due to a problem with the volume (folder) sharing between the host and the container. As a workaround:

* Remove the `-v $(pwd):/home/api` option from build-server.sh
* Manually run `./bin/rebuild-server` after you make changes to the code.
  * This is necessary because the watch loop can't detect file changes with the folder sharing removed.

## Contributing

Please read the [CONTRIBUTING](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository]().

## Authors

* [**Allen Buckley**](https://github.com/allensb) - *Initial work*
* [**Ray Clanan**](https://github.com/rclanan) - *Initial work*
* [**Jarred Keuch**](https://github.com/jarredkeuch) - *Initial work*

See also the list of [contributors]() who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Fusion Alliance for the initiative to create a community of open source development within our ranks.
