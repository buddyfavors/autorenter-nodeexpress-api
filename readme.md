# AutoRenter - Express/Node.js #

An Express/Node.js based implementation of the AutoRenter API.

## Prerequisites ##

Must have Docker engine 1.10 or higher:

* Mac: https://docs.docker.com/mac/
* Windows: https://docs.docker.com/windows/
* Linux: https://docs.docker.com/linux/

## Development Environment Setup ##

Use a terminal - *must be the Docker Quickstart Terminal if on Windows or Mac* - to run the following commands from the project's root directory:

```
docker build -t aur-api-image:latest .
docker run -d -p 3000:3000 --name aur-api aur-api-image
```

## Browse the App

After performing a build and executing the run command you should be able to run the application by browsing to `http://192.168.99.100:3000/`.
