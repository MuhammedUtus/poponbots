const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Yardım Komutunu Kullandınız**`)
          .setAuthor(`**» Yardımamı İhitiyacın Var?**`)
          .setColor(0x00AE86)
          .addField('» a!sahibim')
          .addField('» a!say [botun söyleyeceği yazı]')
          .addField('» a!bot-info')
          .addField('» a!yazı-kanal-aç [kanalın ismi]')
          .addField('» a!ses-kanal-aç [açmak istediğiniz kanalın adı]')
          .addField('» Bukadar Komut Vardı İyi Kullanmalar Dileriz. [Akila Bot Ekibi]')
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komutlar','commands'],
  permLevel: "1"
};

exports.help = {
  name: "komutlar",
  description: "komutları gösterir",
  usage: "komutlar"
};