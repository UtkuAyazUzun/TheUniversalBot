const Discord = require("discord.js");
module.exports.run = async (client, msg, args) => {
  try {
    const commands = new Discord.RichEmbed()
    await msg.channel.send(
      `**_Toplam Komut Sayısı:_**` +
        `\`${client.commands.size}\`` +
        `\n**Komutlar:** \n${client.commands
          .map(props => `\`${props.help.name}\``)
          .join(" | ")}`

    );
  } catch (e) {
    throw e;
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tümkomutlar", "komutlar"],
  permLevel: 0
};
module.exports.help = {
  name: "komutsayisi",
  description: "Bota eklenmiş tüm komutları listeler.",
  usage: "all-commands"
};