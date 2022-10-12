const Discord = require('discord.js');

module.exports = {
  name: "reportar", // Nombre del comando
   // Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args)  {

    let bug = args.slice(0).join(" ")

    if (!args.length) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("❌|Tienes que escribir un bug luego del comando.")
          .setColor("#FF0000")
      ]
  })
    
      //message.channel.send(`${message.author.tag} Su reporte ha sido enviado, muchas gracias.`)
      message.delete();
      const embed = new Discord.MessageEmbed()
      .setTitle(":no_entry:Nuevo bug reportado:no_entry:")
      .setDescription(`:bust_in_silhouette:**Usuario:** ${message.author.tag}`)
      .setAuthor({ name: '[🤖BOT] ARF MTA', iconURL: 'https://cdn.discordapp.com/attachments/766779327840124928/1023407055765254315/mtasa.png', url: '' })
      .setThumbnail('https://cdn.discordapp.com/attachments/766779327840124928/1023406633897959444/mtabug.png')
      .addFields({ name: ':no_entry_sign:Bug:', value: `${bug}` })
      .setImage(`https://cdn.discordapp.com/attachments/766779327840124928/1023405685175762984/banner.png`)
      .setFooter({ text: 'Gracias por reportar - ArgentinaRemontandoFierros', iconURL: '' })
      .setTimestamp()
      .setColor("#FF0000")
      client.channels.cache.get("1023745911572144219").send({ embeds: [embed] })


  }
}