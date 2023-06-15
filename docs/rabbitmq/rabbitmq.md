# How to set up rabbit mq

Make sure to install rabbit mq

## MAC Os
brew install rabbitmq

after installation go to http://localhost:15672/ use guest as username and guest as password to see rabbitmq console.

After that make sure that the service is by :
brew services start rabbitmq

In your api gateway; make sure that you have run the server;

## Rabbit mq connection not running

Run the following commands 

rabbitmqctl stop

and then:

rabbitmq-server