const rabbitmqService = require("../../../gateway/src/connection");

let channels = [];

async function startConsuming(queueName, handleMessage) {
  try {
    const connection = await rabbitmqService.createRabbitMQConnection();
    const channel = await connection.createChannel();

    // Consume messages from the queue
    channel.consume(
      queueName,
      (message) => {
        // Extract the user ID from the message
        const data = JSON.parse(message.content.toString());

        // handle data
        handleMessage(data);

        // Add the channel to the array
        channels.push(channel);
      },
      { noAck: true }
    );
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
  }
}

module.exports = { startConsuming, channels };
