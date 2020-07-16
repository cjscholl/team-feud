FROM mysql:5.7
COPY ./init.sql .
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes
ENV MYSQL_DATABASE=teamFeud
ADD init.sql /docker-entrypoint-initdb.d
