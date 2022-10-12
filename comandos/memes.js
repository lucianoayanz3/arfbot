const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');
const hispamemes = require("hispamemes");

module.exports = {
  name: "meme",//Nombre del comando
  alias: [],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {//Ejecutamos parámetros 
    const meme = hispamemes.meme(); //Hacemos que se genere/cambie el meme de manera random

        const embed = new Discord.MessageEmbed()//Definimos el embed
        .setTitle("Random meme:")//Título del embed
        .setColor("BLURPLE")//Color
        .setImage(meme)//La imagen, que en este caso será el meme
        .setFooter({text: `Solicitado por ${message.member.displayName}`})//Un footer
        .setTimestamp()//Hora y fecha en la que se envió el embed
    
        message.reply({ embeds: [embed] })//Enviamos el mensaje
    
  }

} 