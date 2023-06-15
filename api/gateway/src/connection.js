const amqp = require("amqplib");

const rabbitMQURL = "amqp://guest:guest@127.0.0.1:5672";

async function createRabbitMQConnection() {
  try {
    const connection = await amqp.connect(rabbitMQURL);
    console.log("connected to RabbitMQ");
    return connection;
  } catch (err) {
    console.error("Error connecting to rabbitMQ", err);
  }
}

module.exports = createRabbitMQConnection;
