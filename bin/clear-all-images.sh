#!/bin/bash

# Stop and remove *all* containers and images. This is useful when
# containers and/or images are hosed and you need to start clean.

docker kill $(docker ps -aq);
docker rm $(docker ps -aq);
docker rmi $(docker images -q);
