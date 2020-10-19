const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**» Benim Karizmalı Yakışıklımı Yakışıklı Sahibimi Aradın**`)
          .setAuthor(`**» Benim Karizmalı Yakışıklımı Yakışıklı Sahibimi Aradın**`)
          .setColor(0x00AE86)
          .addField('» Benim Yakışıklı Sahibim » <@602801792950075394> dir')
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help'],
  permLevel: "0"
};

exports.help = {
  name: "sahip",
  description: "sahibimi gösterir",
  usage: "sahip"
};