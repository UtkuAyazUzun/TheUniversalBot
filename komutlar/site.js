const Discord = require("discord.js");

exports.run = (client, message, params) => {
  message.channel.send("Sitemiz çok yakında!")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "site",
  description: "site",
  usage: ""
};