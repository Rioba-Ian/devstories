const amqp = require("amqplib");

const rabbitMQURL = "amqp://guest:guest@127.0.0.1:5672/"; // Replace 'localhost' with your RabbitMQ server URL if needed

async function createRabbitMQConnection() {
  try {
    const connection = await amqp.connect(rabbitMQURL);
    console.log("Connected to RabbitMQ");

    // Perform any additional setup or operations with the RabbitMQ connection here
    return connection;
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
  }
}

module.exports = { createRabbitMQConnection };
