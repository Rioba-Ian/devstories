const amqp = require("amqplib");
const dotenv = require("dotenv");

dotenv.config();

const rabbitMQURL = process.env.RABBITMQ_STRING;

async function createRabbitMQConnection() {
  try {
    const connection = await amqp.connect(rabbitMQURL);
    console.log("Connected to RabbitMQ");

    return connection;
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
  }
}

module.exports = { createRabbitMQConnection };
