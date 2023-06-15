const rabbitmqServices = require("../../../gateway/src/connection");

async function sendMessage(queueName, message, next) {
  try {
    const connection = await rabbitmqServices.createRabbitMQConnection();
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);

    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    console.log(`Message sent to ${queueName}: ${message}`);
  } catch (err) {
    console.log(`Error sending message to ${queueName}`, err.message);
    next(err);
  }
}

module.exports = { sendMessage };
