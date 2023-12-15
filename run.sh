#!/bin/bash
docker-compose up --build
docker container prune -f
docker image prune -f