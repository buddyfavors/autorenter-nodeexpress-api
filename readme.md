# AutoRenter - Express/Node.js #

An Express/Node.js based implementation of the AutoRenter API.

## Prerequisites ##

To use docker:
Make sure docker and docker-compose are installed.

Must have docker engine 1.10 or higher.

To use Vagrant:
Make sure to have  VirtualBox and Vagrant installed.

## Development Environment Setup ##

To use docker:
 `docker-compose build`
 `docker-compose up`

To use vagrant:
 `vagrant up`
 If you don't have the correct plugins installed, it will install them and then rerun the above command.

## Browse the App

If using docker:

After performing a build you should be able to run the application by browsing to `http://192.168.99.100:3000/`.


If using Vagrant:

After performing a build you should be able to run the application by browsing to `http://localhost:3000/`.
