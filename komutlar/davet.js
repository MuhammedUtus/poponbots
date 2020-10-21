const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Botun Davet Linki Aşağıda Bulunmaktadır**`)
          .setAuthor(`**» Botun Davet Linki Aşağıda Bulunmaktadır Kendi Sunucunuza Ekleyip Komutlardan Sizde Yararlana Bilirsiniz**`)
          .setColor("RED")
          .addField('» discord.com/oauth2/authorize?client_id=759900713773039617&permissions=8&scope=bot')
          .addField('» Yukardaki Linkten Botu Sunucuna Davet Edebilirsin')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','invite'],
  permLevel: "0"
};

exports.help = {
  name: "davet",
  description: "botun davet linkini gösterir",
  usage: "invite"
};