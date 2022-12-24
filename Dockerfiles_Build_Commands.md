# Dockerfiles_Build_Commands

Dockerfiles_Build_Commands.md

## docker_nodejs_webpack_babel_express_react_01

*** Dockerfile ***

docker_nodejs_webpack_babel_express_react_01

docker login -u a13dd06

docker build . \
                -f Dockerfile  \
                -t a13dd06/docker_nodejs_webpack_babel_express_react_01:0.1 \
                -t a13dd06/docker_nodejs_webpack_babel_express_react_01:latest

docker images

docker image push -a a13dd06/docker_nodejs_webpack_babel_express_react_01

docker run \
                -p 8080:8080 \
                --rm \
                --name nodejs_express_react_app \
                a13dd06/docker_nodejs_webpack_babel_express_react_01:0.1

docker run \
                -p 8080:8080 \
                --rm \
                --name nodejs_express_react_app \
                -v /home/u1/Desktop/git/gitclone/docker_nodejs_webpack_babel_express_react_00/serverHttp:/usr/src/app/serverHttp\
                -v /home/u1/Desktop/git/gitclone/docker_nodejs_webpack_babel_express_react_00/serverExpress:/usr/src/app/serverExpress\
                a13dd06/docker_nodejs_webpack_babel_express_react_01:0.1

docker exec -it nodejs_express_react_app /bin/bash

docker stop nodejs_express_react_app

docker image ls

docker container ls

docker ps

docker container ls -a

docker ps -a

## docker_nodejs_webpack_babel_express_react_01 with sudo

*** Dockerfile ***

docker_nodejs_webpack_babel_express_react_01

sudo docker login -u a13dd06

sudo docker build . \
                -f Dockerfile  \
                -t a13dd06/docker_nodejs_webpack_babel_express_react_01:0.1 \
                -t a13dd06/docker_nodejs_webpack_babel_express_react_01:latest

sudo docker images

sudo docker image push -a a13dd06/docker_nodejs_webpack_babel_express_react_01

sudo docker run \
                -p 8080:8080 \
                --rm \
                --name nodejs_express_react_app \
                a13dd06/docker_nodejs_webpack_babel_express_react_01:0.1

sudo docker run \
                -p 8080:8080 \
                --rm \
                --name nodejs_express_react_app \
                -v /home/u1/Desktop/git/gitclone/docker_nodejs_webpack_babel_express_react_00/serverHttp:/usr/src/app/serverHttp\
                -v /home/u1/Desktop/git/gitclone/docker_nodejs_webpack_babel_express_react_00/serverExpress:/usr/src/app/serverExpress\
                a13dd06/docker_nodejs_webpack_babel_express_react_01:0.1

sudo docker exec -it nodejs_express_react_app /bin/bash

sudo docker stop nodejs_express_react_app

sudo docker image ls

sudo docker container ls

sudo docker ps

sudo docker container ls -a

sudo docker ps -a
