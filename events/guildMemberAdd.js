const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**! Burda sana yardım edebildiğimiz kadar yardım edeceğiz');
};
