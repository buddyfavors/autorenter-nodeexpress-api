# AutoRenter - Express/Node.js #

An Express/Node.js based implementation of the AutoRenter API.

## Prerequisites ##

Must have Docker engine 1.10 or higher:

- Mac: https://docs.docker.com/mac/
- Windows: https://docs.docker.com/windows/
- Linux: https://docs.docker.com/linux/

## Development Environment Setup ##

### Initial build of the containers ###

Use a terminal - *must be the Docker Quickstart Terminal if on Windows or Mac* - to run the following commands from the project's root directory:

```
./bin/build-server
```

### To rebuild the containers ###

Use a terminal - *must be the Docker Quickstart Terminal if on Windows or Mac* - to run the following commands from the project's root directory:

```
./bin/rebuild-server
```

## Running Tests ##

Use a terminal - *must be the Docker Quickstart Terminal if on Windows or Mac* - to run the following commands:

```
docker exec -t aur-api npm test
```

## View the Database ##

### Using the psql Command Line Interface ###

Use a terminal - *must be the Docker Quickstart Terminal if on Windows or Mac* - to run the following commands:

```
docker exec -it aur-db psql -U postgres
```

NOTE: psql documentation is available at `https://www.postgresql.org/docs/9.3/static/app-psql.html`

#### Example psql session ####

The following example:

 - Connects to the auto_renter database.
 - List all locations.
 - exits psql.

```
\connect auto_renter
select * from "Locations";
\q
```

## Troubleshooting ##

### API Doesn't Start ###

We are currently experiencing problems running the containerized API on a Windows host. This is due to a problem with the volume (folder) sharing between the host and the container. As a workaround:

- Remove the `-v $(pwd):/home/api` option from build-server.sh
- Manually run `./bin/rebuild-server` after you make changes to the code.
  - This is necessary because the watch loop can't detect file changes with the folder sharing removed.

## Browse the App ##

After performing a build and executing the run command you should be able to run the application by browsing to `http://192.168.99.100:3000/`.
