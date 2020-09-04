const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    return message.channel.send("**Yak Yak Yak**").then(async msg => {
  message.delete()
                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 800);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 1500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 600);
                        setTimeout(() => {
                            msg.delete(`**Sigara Bitti **`);
                        }, 6000);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['sigarayak', 'sigara-yak','sigara'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "sigarayak",
                  description: "sigara içersiniz",
                  usage: "sigara"
                };