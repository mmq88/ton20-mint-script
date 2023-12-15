@echo off
docker-compose up --build
docker container prune -f
docker image prune -f