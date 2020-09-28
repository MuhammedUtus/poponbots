const Discord = require('discord.js');

exports.run = async (client, message, params) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = client.channels.find('id', '540269834835853340')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("»  Yardım Komutunu Kullandınız")
  .setDescription("**» a!yardım genel**")
  .setDescription("**» a!yardım eğlence**")
  .setDescription("**» a!yardım kayıt**")
  .setDescription("**» a!yardım sunucu**")
  .setDescription("**» Daha Fazla Yardım için Aşağıdaki Discord Sunucusuna Katıl!**")
  .setURL("https://discord.gg/VsVmD5d")
  .setFooter("Yukarıdaki Sunucuda Daha Fazla Yardım Alabilirsin")
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};
