const { channels } = require("../services/recieveMessage");

const closeAllChannels = () => {
  channels.forEach((channel) => {
    channel
      .close()
      .then(() => {
        console.log("Channel closed.");
      })
      .catch((error) => {
        console.error("Error closing the channel:", error);
      });
  });

  channels.length = 0; // Clear the channels array
  console.log("All channels closed.");
};

module.exports = closeAllChannels;
