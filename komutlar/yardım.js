const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Yardım Komutunu Kullandınız**`)
          .setAuthor(`**» Yardımamı İhitiyacın Var?**`)
          .setColor(0x00AE86)
          .addField('» a!moderasyon')
          .addField('» a!eglence')
          .addField('» a!kayıt-yardım')
          .addField('» a!komutlar')
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help'],
  permLevel: "0"
};

exports.help = {
  name: "yardım",
  description: "hava durumunu gösterir",
  usage: "yardım"
};