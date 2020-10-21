const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Yardım Komutunu Kullandınız**`)
          .setAuthor(`**» Yardımamı İhitiyacın Var?**`)
          .setColor("RED")
          .addField('» a!moderasyon')
          .addField('» a!eglence')
          .addField('» a!kayıt-yardım')
          .addField('» a!komutlar')
          .addField('» a!davet') 
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
  description: "yardım gösterir",
  usage: "yardım"
};