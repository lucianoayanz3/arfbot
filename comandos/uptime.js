const Discord = require('discord.js');

module.exports = {
  name: "tiempo",

execute (client, message, args){

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days} días, ${hours} horas, ${minutes} minutos and ${seconds} segundos`;
    const embed = new Discord.MessageEmbed()
    .setTitle("⏰Tiempo del BOT🤖")
    .setDescription(`[⌛]${uptime}]`)
    .setFooter({ text: 'Desde su reinicio o su commit.', iconURL: '' })
    .setTimestamp()
    .setColor("#ffff00")
    message.channel.send({ embeds: [embed] })




}}