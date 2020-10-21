const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply( ` = Sahibimi Aradın Ona DM Den Yazarak Yardım Alabilirsin =
• <@602801792950075394> `);
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahip','sahibim','creater','yapımcı','codder','kodlayıcım'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Botun Sahibini Gösterir',
  usage: 'sahip'
};
