const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Yardım Komutunu Kullandınız**`)
          .setAuthor(`**» Yardımamı İhitiyacın Var?**`)
          .setColor("RANDOM")
          .addField('» a!düello <@kullanıcı>')
          .addField('» a!dans')
          .addField('» a!kayıt')
          .addField('» a!bjk')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
          .addField('» a!komutlar')
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eglence','funy'],
  permLevel: "0"
};

exports.help = {
  name: "eglence",
  description: "eglence komutlarını gösterir",
  usage: "eglence"
};