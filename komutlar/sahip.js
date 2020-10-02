const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Benim Bir Sahibim Yoktur Ben Kendi Kendime Kodlandım');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahip', 'sahibim'],
  permLevel: 0
};

exports.help = {
  name: 'sahibim',
  description: 'sahibim',
  usage: 'sahibim'
};
