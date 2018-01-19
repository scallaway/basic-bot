// We need access to the information within the config file
const config = require('./config.json');

const discord = {
  /**
   * Gets the current number of Online Users on the server
   * that the bot has just connected to.
   * @param users A Collection of all users on the server
   * @returns The number of online users
   */
  getOnlineUsers: (users) => {
    let onlineUsers = [];
    users.forEach(user => {
      if (user.presence.status === 'online') {
        onlineUsers.push(user);
      }
    });

    return onlineUsers.length;
  },

  /**
   * Gets the first command from the message that was sent.
   * @param message A message object
   * @return The command that was issued
   */
  getCommand: (message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    return args.shift().toLowerCase();
  }
};

const helpers = {
  /**
   * A simple function for converting the timestamp to a
   * readable format.
   * @param time A Discord timestamp
   * @return A string of the Date and Time
   */
  convertTime: (time) => {
    return new Date(time).toString();
  }
};

module.exports = {
  discord,
  helpers
};
