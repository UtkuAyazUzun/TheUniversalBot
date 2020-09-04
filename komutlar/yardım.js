const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("Universal Bot", client.user.avatarURL)
.setColor("BLUE")
.setTitle("Universal Botu Davet Et")
 .setURL("https://discord.com/oauth2/authorize?client_id=718762749387210773&scope=bot&permissions=1981283518")
 .setDescription(`

**!yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`!ping\`
Botu davet etmek için: \`!davet\`
`)
 .addField("**KOMUTLAR**")
 .addField("Arkadasin Adminban Afk Ailemiz Ataürk Avatarım Ban Davet Update i kaçcm kedi kick kodtest komutlar köpek mcödül ping rebootsigara site sunucubilgi temizle yapımcım woodie yardım yazıtura çark ve şifre")
 .setFooter("Universal Bot Artık Hizmetinizde...", client.user.avatarURL)
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};