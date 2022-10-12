const Discord = require('discord.js');
const Gamedig = require("gamedig");
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')



module.exports = {
  name: "server",//Nombre del comando
  //Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {
  const guild = client.guilds.resolve("847209307975188510")
guild.members.fetch()
       let mcdata = await Gamedig.query ({ // Esto abre el código para ver el estado del servidor de unturned
          type: 'mtasa', // Aquí tienes que poner el id del juego , lo puedes ver en https://www.npmjs.com/package/gamedig
          host: '45.235.98.61', // La ip del servidor
          port: '22053' // El puerto del servidor
        }).then((mcdata) => {

   const embed = new Discord.MessageEmbed()
    .setTitle(`Información del servidor`)
    .setDescription(`${mcdata.name}`)
    .setAuthor({ name: '🤖BOTArgentinaRemontandoFierros', iconURL: 'https://cdn.discordapp.com/attachments/766779327840124928/1023407055765254315/mtasa.png', url: '' })
    .setThumbnail('')
    .addField('**__Jugadores Online__** :', `${mcdata.players.length}/${mcdata.maxplayers}`)
    .addField('**__Discord Server__** :', `Miembros:${guild.memberCount}`)
    .addField('**__Conectarse__** :', `${mcdata.connect}`)
    .addField('**__¿Contraseña?__** :', `${mcdata.password}`)
    .setImage(`https://cdn.discordapp.com/attachments/766779327840124928/1023405685175762984/banner.png`)
    .setTimestamp()
    .setColor("#FF0000")
    message.reply({ embeds: [embed] })


}).catch((error) => {
message.reply('❌|El servidor está offline o el bot no pudo conectarse.')
});
    

    
    
        /*return message.channel.send(new Discord.MessageEmbed() // Esto abre el embed
        
        .setColor('RANDOM')
        .setTitle(`${mcdata.name}`) // Esto pone el nombre del servidor
        .setDescription('Informacion Del Servidor :')
        .setThumbnail('https://i.imgur.com/UQmZ7Hy.png')
        .addField('**__Jugadores Actuales__** :', `${mcdata.players.length}/${mcdata.maxplayers}`) // Esto pone la lista de jugadores que hay actualmente y los máximos que pueden llegar
        .addField('**__Ping__** :', `${mcdata.ping}`) // Esto pone el ping
      .addField('**__Conectarse__** :', `${mcdata.connect}`) // Esto pone la ip y el puerto de forma sencilla
        .setTimestamp()
        .setFooter(`Bot Creado por KeepYT`, `${message.author.avatarURL}`))
        */
}
      }