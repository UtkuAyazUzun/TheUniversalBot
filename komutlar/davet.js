const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {

    const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Botun davet bağlantısı: [Tıkla](https://discord.com/oauth2/authorize?client_id=750828091722563706&scope=bot&permissions=805825598)');
    return message.channel.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet bağlantısını gönderir.',
  usage: 'davet'
};