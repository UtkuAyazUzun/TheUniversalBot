const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const db = require('quick.db');

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg => {
   if (msg.content.toLowerCase() === "sa") {
    msg.reply("Aleyküm Selam Hoşgeldin ! Lütfen Sunucuda Küfür Etmemeye Çalış.");
  }

  if (msg.content.toLowerCase() === "selamun aleyküm") {
    msg.reply("Aleyküm Selam Hoşgeldin !");
  }

  if (msg.content.toLowerCase() === "selam") {
    msg.reply("Aleyküm Selam Hoşgeldin !");
  }

  if (msg.content.toLowerCase() === "nasılsın") {
    msg.channel.send("iyiyim sen");
  }

  if (msg.content.toLowerCase() === "seni çok seviyorum") {
    msg.channel.send("Bende Seni");
  }

  if (msg.content.toLowerCase() === "benimle evlenirmisin") {
    msg.channel.send("maalesef :D");
  }

  if (msg.content.toLowerCase() === "ping") {
    msg.channel.send("pong");
  }
  if (msg.content.toLowerCase() === "senin adın ne") {
    msg.channel.send("Universal Bot");
  }
  if (msg.content.toLowerCase() === "ne sıklıkla açıksın") {
    msg.channel.send("geceleri kapalıyım");
  }
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  if (msg.content.toLowerCase() === prefix + "kedi") {
    msg.reply(
      "https://www.petburada.com/Uploads/Blog/Colorpoint-Shorthair-Kedi-Cinsi-dc3a.jpg"
    );
  }

  if (msg.content.toLowerCase() === prefix + "köpek") {
    msg.reply(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7tGoL2Re7M5AVBCzfQSWpcQF7QBiWxnYi42RxHQmImKUhEdPQ&usqp=CAU"
    );
  }
  if (msg.content.toLowerCase() === prefix + "balık") {
    msg.reply(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ5CwdZBB6qRWsjH94_BnCh7ta6XnvhicWMo0D1IzpuONiKIwk&usqp=CAU"
    );
  }
  if (msg.content.toLowerCase() === prefix + "koala") {
    msg.reply(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyEIRC2qv-fjusPQfg1uffirT6oatHZUryb_TJ5VjHeprALoLz&usqp=CAU"
    );
  }
  if (msg.content.toLowerCase() === prefix + "kuş") {
    msg.reply(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUIyEwDt4rblRFbLCp99Z8Ft25xIrR2KKRvysA3cnjCwbPYD0R&usqp=CAU"
    );
  }
  if (msg.content.toLowerCase() === prefix + "tavşan") {
    msg.reply(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUAqaDRSiVaI1-jrLJCaxhQ6ZXHMebbFkLE9jUUyASxsXLO5iG&usqp=CAU"
    );
  }
  if (msg.content.toLowerCase() === prefix + "ekim") {
    msg.reply(
      "kasım"
    );
  }

  if (msg.content === 'bye bye') {
   	msg.reply('su gibi git su gibi gel');
  }

  if (msg.content === 'günaydın') {
   	msg.reply('sana da günaydın');
  }

  if (msg.content === 'herkese günaydın') {
   	msg.reply('yepyeni bir güne merhaba :)');
  }

  if (msg.content === 'iyi geceler') {
   	msg.reply('sana da iyi geceler');
  }
  if (msg.content === 'iyi akşamlar') {
   	msg.reply('sana da iyi akşamlar');
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'güle güle') {
   	msg.reply('sana da güle güle');
  }
  
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 2,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('「📃」kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「👥」pre-arama-odası`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「📷」görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「💬」sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
            })   
    
}
});

client.on("message" , async msg => {
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return;
 
  let afk = msg.mentions.users.first()
 
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){
   msg.delete();
       msg.reply(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){
 
       msg.reply(`Afk'lıktan Çıktınız`)
  db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
   msg.member.setNickname(isim)
   
 }
 
});

client.login(ayarlar.token);
