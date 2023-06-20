const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const proxy = require("express-http-proxy");
const rabbitmqConnection = require("./src/connection");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", proxy("http://localhost:3000"));
app.use("/articles", proxy("http://localhost:4000"));
app.use("/roadmap", proxy("http://localhost:3002"));

// Create a global RabbitMQ connection variable
let rabbitMQConnection;

// Function to establish the RabbitMQ connection and start the Express server
async function startServer() {
  rabbitMQConnection = await rabbitmqConnection.createRabbitMQConnection();
  if (!rabbitMQConnection) {
    console.log("Exiting...");
    return;
  }
}

app.listen(8000, () => {
  console.log("Gateway is listening on port 8000");
});

// // Start the server and establish the RabbitMQ connection
startServer();
