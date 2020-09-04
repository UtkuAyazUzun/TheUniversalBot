const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, msg, args) => {
msg.channel.send('Botun yeniden başlatılmasına onay veriyorsanız 30 saniye içinde evet yazın.')
.then(() => {
  msg.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      msg.channel.send(`Bot yeniden başlatılıyor...`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      msg.channel.send('Yeniden başlatma işlemi iptal edildi.');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};