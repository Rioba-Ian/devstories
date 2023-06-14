const errorHandler = (error, req, res, next) => {
  let errStatus;
  let errMsg;
  console.log("error new", error);
  // Handle specific PostgreSQL errors
  if (error.code === "23505") {
    // Unique constraint violation
    errMsg = error.detail;
    errStatus = 409;
  } else if (error.code === "22P02") {
    // Invalid input syntax
    errMsg = error.detail;
    errStatus = 400;
  } else {
    errStatus = error.statusCode || 500;
    errMsg = error.message || "Something went wrong";
  }
  // general response
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err?.stack : {},
  });
};

module.exports = errorHandler;
