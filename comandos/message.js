const Discord = require('discord.js');

module.exports = {
  name: "send",

execute (client, message, args){


  const channel = message.mentions.channels.first() // Definimos la constante del canal al que vamos a enviar el mensaje
let sendch = message.guild.channels.cache.find(channel => channel.name === `${channel}`) // Creamos la "variable" sendch en busca del canal mencionado anteriormente en channel
let as = args.slice(1).join(' '); // Creamos la variable del contenido que tendrá el mensaje por argumentos 
if (!channel) return message.channel.send('Especifica el canal') // Si no especifica el canal retornamos un mensaje exiguiendole que mencione el canal
if (!as) return message.channel.send('Especifica lo que quieres decir'); // Si no menciona lo que va a decir el BOT retornamos un mensaje que lo exigua
message.delete()
channel.send(as);



 }

}