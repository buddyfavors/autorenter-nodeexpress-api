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

Use a terminal - *must be the Docker Quickstart Terminal if on Windows or Mac*:

```
docker exec -t aur-api npm test
```

## View the Database ##

### Using the psql Command Line Interface ###

Use a terminal - *must be the Docker Quickstart Terminal if on Windows or Mac*:

```
docker exec -it aur-db psql -U postgres
```

#### Example psql session ####

The following example:

 - Connects to the auto_renter database.
 - List all locations.
 - exits psql.

```
/connect auto_renter
select * from "Locations";
/q
```

## Troubleshooting ##

### Permission Denied ###

If you get a "permissions denied" error when executing any of the setup scripts, you will need to assign `execute` permission to the related script file(s). This can be accomplished by executing the following commands from the project's root directory:

```
chmod u+x ./bin/build-server
chmod u+x ./bin/rebuild-server
```

## Browse the App ##

After performing a build and executing the run command you should be able to run the application by browsing to `http://192.168.99.100:3000/`.
