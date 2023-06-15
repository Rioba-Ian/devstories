const rabbitmqServices = require("../../../gateway/src/connection");

async function sendMessage(queueName, message, next) {
  try {
    const channel =
      await rabbitmqServices.createRabbitMQConnection.createChannel();
    await channel.assertQueue(queueName);

    await channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Message sent to ${queueName}: ${message}`);
  } catch (err) {
    console.log(`Error sending message to ${queueName}`, err.message);
    next(err);
  }
}
