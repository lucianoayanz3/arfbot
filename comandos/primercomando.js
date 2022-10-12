const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "test",//Nombre del comando
  //Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

    const embed = new Discord.MessageEmbed()
    .setTitle("Titulo del Embed") 
    .setImage("") //Esto es opcional, solo pones la URL de la imagen
    .setColor("RANDOM") //Esto es opcional tambien, si quieres le puedes poner un color pero siempre todo en mayuscula y que sea en ingles el color, o tambien puedes poner un Hexcolor
    .addField("Texto Uno", "Texto 2") //siempre debe llevar dos lineas osea dos textos separados con comillas
    .setTimestamp(); //para que le salga la hora que lo ejecuto

    message.reply({ embeds: [embed] })
    
  }

}