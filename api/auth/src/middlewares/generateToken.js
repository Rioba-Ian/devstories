const jwt = require('jsonwebtoken');

function generateToken(userId) {
  // Define the payload for the token
  const payload = {
    userId: userId,
    // Add additional data if needed
  };

  // Generate the JWT with a secret key
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
}

module.exports = generateToken;