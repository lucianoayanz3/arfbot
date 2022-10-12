const Discord = require('discord.js');
const Gamedig = require("gamedig");
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')


module.exports = {
  name: "lista",//Nombre del comando//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {
       let arfdata = await Gamedig.query ({ 
          type: 'mtasa', 
          host: '45.235.98.61', 
          port: '22053' 
        }).then((arfdata) => {

   const embed = new Discord.MessageEmbed()
    .setTitle('Lista de usuarios conectados:')
    .setDescription(`Deshabilitado:${arfdata.players.name}`)
    .setAuthor({ name: '🤖BOTArgentinaRemontandoFierros', iconURL: 'https://cdn.discordapp.com/attachments/766779327840124928/1023407055765254315/mtasa.png', url: '' })
    .setThumbnail('')
    .setImage(`https://cdn.discordapp.com/attachments/766779327840124928/1023405685175762984/banner.png`)
    .setTimestamp()
    .setColor("#FF0000")
    message.reply({ embeds: [embed] })

}).catch((error) => {
message.reply('❌|El servidor está offline o el bot no pudo conectarse.')
});
    
}
      }