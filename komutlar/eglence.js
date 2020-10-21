const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Yardım Komutunu Kullandınız**`)
          .setAuthor(`**» Yardımamı İhitiyacın Var?**`)
          .setColor("RANDOM")
          .addField('» a!düello <@kullanıcı>')
          .addField('» a!dans')
          .addField('» a!gs')
          .addField('» a!bjk')
          .addField('» a!fb')
          .addField('» a!bulanık')
          .addField('» a!hastebin <yazılacak cümle>')
          .addField('» a!havadurumu <şehir>')
          .addField('» a!mcödül <yazılacak şey>')
          .addField('» a!oyun-ara <oyun adı>')
          .addField('» a!rastgeleşifre')
          .addField('» a!spotify')
          .addField('» a!wasted')
          .addField('» a!youtube')
          .addField('» a!sahip')
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