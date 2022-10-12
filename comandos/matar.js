const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

var Muerto = [
    "https://c.tenor.com/I1FEoZGnSjUAAAAd/big-smoke-gta-san-andreas.gif",
    "https://cdn.discordapp.com/attachments/766779327840124928/1023678412142956575/ezgif-5-7a58e861c5.gif",
    "https://pa1.narvii.com/6919/0b53b6de0adc58717252e720bfc4dd92a8aa8542r1-500-400_hq.gif",
    "https://c.tenor.com/mGong0wFLGEAAAAC/gta-gta-sa.gif",
    "https://c.tenor.com/zRQEnIDpqfIAAAAC/gta-gta-sa.gif",
    "https://i.imgur.com/Z5wGhJr.gif",
    "https://c.tenor.com/HDNviHFfu7sAAAAC/san-andreas-carl-johnson.gif",
    "https://media1.giphy.com/media/JkkgIW5xGNMJy/giphy.gif?cid=790b761136a3e6b5aa2a7d79b5d9781a3ced8f881e040c70&rid=giphy.gif&ct=g"

];
module.exports = {
    name: "matar", ///// Nombre de el comando

    execute (client, message, args) {

        let Matar = Muerto[Math.floor(Math.random() * Muerto.length)];

     
        const usuario = message.mentions.users.first()
        if (!usuario) return message.reply({
            embeds: [new Discord.MessageEmbed()
                .setDescription("❌|Tienes que mencionar a alguién.")
                .setColor("RANDOM")
            ]
        })
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.member.displayName} ha matado a ${usuario.tag} `)
        .setImage(`${Matar}`)
        .setColor("RANDOM")
        
    
        message.reply({ embeds: [embed] })
        
    }
}