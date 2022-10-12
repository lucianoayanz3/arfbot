const Discord = require('discord.js');

module.exports = {
  name: "sendnoticia", // Nombre del comando
  // Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args)  {

    let bug = args.slice(0).join(" ")
    if (!args.length) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("❌|Tienes que escribir una noticia luego del comando.")
          .setColor("#FF0000")
      ]
  })
    
      //message.channel.send(`${message.author.tag} Su reporte ha sido enviado, muchas gracias.`)
      message.delete();
      const embed = new Discord.MessageEmbed()
      .setTitle(":loudspeaker:|NOTICIA:")
      .setDescription(`:grey_exclamation: ${bug}`)
      .setAuthor({ name: '[🤖BOT] ARF MTA', iconURL: 'https://cdn.discordapp.com/attachments/766779327840124928/1023407055765254315/mtasa.png', url: '' })
      .setThumbnail('https://cdn.discordapp.com/attachments/766779327840124928/1023407055765254315/mtasa.png')
      .setImage(`https://cdn.discordapp.com/attachments/766779327840124928/1023405685175762984/banner.png`)
      .setFooter({ text: '¡Staff! - ArgentinaRemontandoFierros', iconURL: '' })
      .setTimestamp()
      .setColor("RANDOM")
      client.channels.cache.get("964747197520429056").send({content: "@everyone", embeds: [embed] }).then (embedMessage => {
        embedMessage.react("💯");
    });


  }
}