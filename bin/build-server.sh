#!/bin/bash

# Build and run containers

DB_ID=$(docker ps -a --filter=name=aur-db -q)
if [ -z $DB_ID ]
then
  echo '=> Starting db' && docker run -d -p 5432:5432 --name aur-db -e POSTGRES_PASSWORD=postgres -v postgres_data:/var/lib/postgresql/data --restart=always postgres:9.5
else
  echo '=> Found non-running postgresql container with id $DB_ID'
  echo '=> Restarting db' && docker start $DB_ID
fi

# Cache Busting
echo $(date +%s) > .version;

API_ID=$(docker ps -a --filter=name=aur-api -q)
if [ -z $API_ID ]
then
  echo '=> Building api' && docker build -t aur-api-image:latest .
  echo '=> Starting api' && docker run -d -p 3000:3000 -v $(pwd):/home/api --link aur-db:postgres --name aur-api aur-api-image
else
  echo '=> Found non-running api container with id $API_ID'
  echo '=> Restarting api' && docker start $API_ID
fi

docker logs -f aur-api
