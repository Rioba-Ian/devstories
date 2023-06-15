const rabbitmqService = require("../../../gateway/src/connection");

async function sendMessage(queueName, message, next) {
  try {
    const connection = await rabbitmqService.createRabbitMQConnection();
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    console.log(`Message sent to ${queueName}: ${message}`);
  } catch (error) {
    console.error(`Error sending message to ${queueName}:`, error.message);
    next(error);
  }
}

module.exports = {
  sendMessage,
};
