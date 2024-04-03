# Setup  

docker run --name=mysql-image -p3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql/mysql-server:latest

docker exec -it mysql-image bash

docker run --name mongodb -d -p 27017:27017 mongo

docker pull rabbitmq:management
docker run -d --name dev-rabbit --hostname rabbitmq-dev -p 15672:15672 -p 5672:5672 rabbitmq:management

## Run

cd product-service && npm run start
cd order-service && npm run start

## Package Install

cd product-service npm install
