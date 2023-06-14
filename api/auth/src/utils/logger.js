const winston = require("winston");
const path = require("path");

const logDirectory = "./src/logs"
console.log(logDirectory);
// Configure the logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: path.join(logDirectory, "requests.log"),
      level: "info",
    }),
    new winston.transports.File({
      filename: path.join(logDirectory, "errors.log"),
      level: "error",
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
});

// Middleware to log incoming requests
function requestLogger(req, res, next) {
  logger.info(`${req.method} ${req.url}`);
  console.log(`${req.method} ${req.url}`.blue.bold);
  next();
}

// Middleware to log errors
function errorLogger(err, req, res, next) {
  logger.error("Error:", err);
  console.log("Error:", err);
  next(err);
}

module.exports = { requestLogger, errorLogger };
