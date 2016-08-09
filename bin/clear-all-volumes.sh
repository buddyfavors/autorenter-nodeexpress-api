#!/bin/bash

# Remove *all* dangling volumes. This is useful when
# you need to start clean.

docker volume rm $(docker volume ls -f dangling=true);
