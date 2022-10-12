const Discord = require('discord.js');

module.exports = {
  name: "sendnoticiafoto", // Nombre del comando
 // Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args)  {
      let text = args.slice(0).join(" ")
      let options = text.split(" - ")


    if(!options[0]) return message.reply({
      embeds: [new Discord.MessageEmbed()
          .setDescription("❌|Tienes que escribir la noticia")
          .setColor("#ffff00")
      ]
  })

if(!options[1]) return message.reply({
  embeds: [new Discord.MessageEmbed()
      .setDescription("❌|Tienes que poner la imagen luego de la noticia ($sendnoticia texto - link)")
      .setColor("#ffff00")
  ]
})

          message.delete();
          try {
            const embed = new Discord.MessageEmbed()
            .setTitle(":loudspeaker:|NOTICIA:")
            .setDescription(`:grey_exclamation: ${options[0]}`)
            .setAuthor({ name: '[🤖BOT] ARF MTA', iconURL: 'https://cdn.discordapp.com/attachments/766779327840124928/1023407055765254315/mtasa.png', url: '' })
            .setThumbnail('https://cdn.discordapp.com/attachments/766779327840124928/1023407055765254315/mtasa.png')
            .setImage(`${options[1]}`)
            .setFooter({ text: '¡Staff! - ArgentinaRemontandoFierros', iconURL: '' })
            .setTimestamp()
            .setColor("RANDOM")
            client.channels.cache.get("964747197520429056").send({content: "@everyone", embeds: [embed] }) .then (embedMessage => {
              embedMessage.react("💯")
          }) 
        } catch (error) {
            return console.log(error);
        }

}}
