#!/bin/sh

docker rm team-feud-mysql
docker build -t team-feud-mysql-image . 
docker run --name team-feud-mysql team-feud-mysql-image