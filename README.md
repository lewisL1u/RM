# Run in docker-container

get images:
    docker pull mongo
    docker pull rabbitmq

docker run -d --name dev-rabbit --hostname rabbitmq-dev -p 15672:15672 -p 5672:5672 rabbitmq:management

docker run --name mongodb -d -p 27017:27017 mongo

docker-compose up --build

## Setup  

docker run --name=mysql-image -p3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql/mysql-server:latest

docker exec -it mysql-image bash

docker run --name mongodb -d -p 27017:27017 mongo

docker pull rabbitmq:management
docker run -d --name dev-rabbit --hostname rabbitmq-dev -p 15672:15672 -p 5672:5672 rabbitmq:management

## Run

## api data category
https://aistudio.google.com/app/prompts/new_chat?utm_source=agd&utm_medium=referral&utm_campaign=core-cta&utm_content=

cd product-service && npm run start
cd order-service && npm run start

## Package Install

cd product-service npm install
