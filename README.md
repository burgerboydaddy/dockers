# dockers
Various docker files (Dockerfile) to be used for development.

Folder:
  nodemonDocker    --> Dockerfile for installing nodejs (latest) and nodemon.

To create image:
  docker build -t "simple_docker:nodedocker" .

To run on host machine execute command:
  docker run --name nodeOne -d -p 8081:8081 -v ~/workspace/docker/nodemonDocker:/opt/app simple_docker:nodedocker

Note: connected folder (volume) is one where index.js is located
