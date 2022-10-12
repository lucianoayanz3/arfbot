const Discord = require('discord.js');
const { Message } = require('discord.js/src/structures/Message');

module.exports = {
  name: "sugerir", // Nombre del comando
// Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args)  {

    let bug = args.slice(0).join(" ")

    if (!args.length) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("❌|Tienes que escribir la sugerencia luego del comando.")
          .setColor("#ffff00")
      ]
  })
    

    
      //message.channel.send(`${message.author.tag} Su reporte ha sido enviado, muchas gracias.`)
      message.delete();
      
      const embed = new Discord.MessageEmbed()
      .setTitle(":bulb:Nueva sugerencia:bulb:")
      .setDescription(`:bust_in_silhouette:**Usuario:** ${message.author.tag}`)
      .setAuthor({ name: '[🤖BOT] ARF MTA', iconURL: 'https://cdn.discordapp.com/attachments/766779327840124928/1023407055765254315/mtasa.png', url: '' })
      .setThumbnail('https://cdn.discordapp.com/attachments/766779327840124928/1023440872890712105/mtasuggest.png')
      .addFields({ name: ':yellow_heart:Sugerencia:', value: `${bug}` })
      .setImage(`https://cdn.discordapp.com/attachments/766779327840124928/1023405685175762984/banner.png`)
      .setFooter({ text: 'Gracias por sugerir - ArgentinaRemontandoFierros', iconURL: '' })
      .setTimestamp()
      .setColor("#ffff00")

      client.channels.cache.get("964740687767674961").send({ embeds: [embed] }).then (embedMessage => {
        embedMessage.react("✅")
        embedMessage.react("❌");;
    });




  }
}