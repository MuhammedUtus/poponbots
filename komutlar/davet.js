const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Yardım Komutunu Kullandınız**`)
          .setAuthor(`**» Yardımamı İhitiyacın Var?**`)
          .setColor("RED")
          .addField('» ')
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