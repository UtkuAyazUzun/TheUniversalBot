const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 0xd97634,
      description: "Hatalar Düzeltildi. :ballot_box_with_check:"
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['test'],
  permLevel: 0
};

exports.help = {
  name: "kodtest",
  description: "Kod denemek için kullanılır.",
  usage: "kodtest [kod]"
};
