# AutoRenter - Express/Node.js #

An Express/Node.js based implementation of the AutoRenter API.

## Prerequisites ##

To use docker:
Make sure Docker is installed:

For Mac: https://docs.docker.com/mac/
For Windows: https://docs.docker.com/windows/
For Linux: https://docs.docker.com/linux/

Must have docker engine 1.10 or higher.

To use Vagrant:
Make sure to have VirtualBox and Vagrant installed.

https://www.virtualbox.org/wiki/Downloads - Choose the correct binary for your OS
https://www.vagrantup.com/docs/getting-started/

## Development Environment Setup ##

### From the root directory of the project:

#### To use docker:

**Note On windows or mac, the following commands must be ran from the docker quickstart terminal**

 `docker-compose build`
 `docker-compose up`

#### To use vagrant:
 `vagrant up`
 
 **Note: If you don't have the correct plugins installed, it will install them and then rerun the above command.**

## Browse the App

### If using docker:

After performing a build you should be able to run the application by browsing to `http://192.168.99.100:3000/`.

### If using Vagrant:

After performing a build you should be able to run the application by browsing to `http://localhost:3000/`.
