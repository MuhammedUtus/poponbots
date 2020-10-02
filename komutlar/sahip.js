const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

{exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format("");
  msg.channel.sendCode("asciidoc", ` İSTATİSTİKLER 
• 
`
;exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Sahip','Commander'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'sahibimi gösterir.',
  usage: 'sahip'
};