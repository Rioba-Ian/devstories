const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  let saltRounds = 10;
  let hashedPass;
  await bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
      hashedPass = hash;
    //   console.log("Hash ", hashedPass);
    })
    .catch((err) => console.error(err.message));

  return hashedPass;
};

module.exports = hashPassword;
