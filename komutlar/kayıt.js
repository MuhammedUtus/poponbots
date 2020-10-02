const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Yardım Komutunu Kullandınız**`)
          .setAuthor(`**» Yardımamı İhitiyacın Var?**`)
          .setColor(0x00AE86)
          .addField('» Kayıt Komutumuz Yapım Aşamasındadır Şuan Kullanamazsınız!')
          .addField('» Kayıt Komutumuz Yapım Aşamasındadır Şuan Kullanamazsınız!')
          .addField('» a!bot-info')
          .addField('» a!yazı-kanal-aç [kanalın ismi]')
          .addField('» a!ses-kanal-aç [açmak istediğiniz kanalın adı]')
          .addField('» Bukadar Komut Vardı İyi Kullanmalar Dileriz. [Akila Bot Ekibi]')
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-yardım'],
  permLevel: "3"
};

exports.help = {
  name: "kayıt-yardım",
  description: "kayıt-yardım",
  usage: "kayıt-yardım"
};