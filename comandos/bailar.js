const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

var Baile = [
"https://c.tenor.com/iMWWlgrrVMsAAAAd/cj-gta.gif",
"https://i.kym-cdn.com/photos/images/newsfeed/001/247/368/695.gif",
"https://c.tenor.com/-6all36pWSYAAAAd/gta-sa-cj-gta-sa.gif",
"https://i.gifer.com/H1kB.gif",
"https://c.tenor.com/R_-n0Jvz9q8AAAAd/gta-orange-justice.gif",
"https://c.tenor.com/LC5n7kNxkqwAAAAC/dance-gaming.gif",
"https://c.tenor.com/0BysPKN6QRoAAAAd/stefaknee-gta-san-andreas.gif",
"https://c.tenor.com/14UH4MdaMcgAAAAC/cj-carl-johnson.gif"

];
module.exports = {
    name: "bailar", ///// Nombre de el comando

    execute (client, message, args) {

        let Bailar = Baile[Math.floor(Math.random() * Baile.length)];

     
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.member.displayName} se tiró unos pasos!`)
        .setImage(`${Bailar}`)
        .setFooter(`🤖|ArgentinaRemontandoFierros BOT`)
        .setColor("RANDOM")
        
    
        message.reply({ embeds: [embed] })
        
    }
}