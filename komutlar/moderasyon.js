const Discord = require('discord.js');

exports.run = (client, message, args) => 
{
      const embed = new Discord.RichEmbed()
          .setDescription(`**Yardım Komutunu Kullandınız**`)
          .setAuthor(`**» Yardımamı İhitiyacın Var?**`)
          .setColor("PURPLE")
          .addField('» a!sunucu-kurulum (Bu komutu kullanırsanız onaylamanıza gerek kalmaz direk kanallar ve kategorlier silinir ve bot kendisi sunucuyu yeniden oluşturur ve kurlları kendisi yazar.)')
          .addField('» a!sunucu (Sunucunuz hakkında bilgi verir)')
          .addField('» a!sunucutanıt')
          .addField('» a!yasakla <@kullanıcı> <sebep>')
          .addField('» a!reklam-taraması oynuyoru + durumunda reklam içeren kişileri gösterir!')
          .addField('» a!davet')
          .addField('» Daha Eklenecek Çoook Komut Var Ama Bunun İçin Bizim Bütçemiz Yok Paycell Kartımızı Katkıda Bulunarak Yardım Edebilirsin Paycell Barkodumuz:[4460606363637]')
          .addField('» Bukadar Moderasyon Komutu Vardı İyi Kullanmalar Dileriz. [Apon Bot Ekibi]')
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderasyon','moderation'],
  permLevel: "2"
};

exports.help = {
  name: "moderasyon",
  description: "moderasyon",
  usage: "moderasyon"
};