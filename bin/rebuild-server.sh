#!/bin/bash

# Stop and remove containers

API_ID=$(docker ps -a --filter=name=aur-api -q)
if [ ! -z $API_ID ]
then
  echo '=> Stopping api' && docker kill aur-api
  echo '=> Removing api' && docker rm aur-api
fi

DB_ID=$(docker ps -a --filter=name=aur-db -q)
if [ ! -z $DB_ID ]
then
  echo '=> Stopping db' && docker kill aur-db
  echo '=> Removing db' && docker rm aur-db
fi

# Build and run containers
source ./bin/build-server.sh
