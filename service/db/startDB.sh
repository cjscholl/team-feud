#!/bin/sh

docker rm team-feud-mysql
docker build -t team-feud-mysql-image . 
docker run -d --name team-feud-mysql -p 3306:3306 team-feud-mysql-image