const Discord = require('discord.js'); //Definimos discord
const { Client, Intents, MessageEmbed, Collection, Guild, setPresence } = require('discord.js');
const Gamedig = require("gamedig");
const intents = new Discord.Intents(14023)
const client = new Discord.Client({ intents })
const fs = require('fs'); //Definimos fs
let { readdirSync } = require('fs'); //Definimos readdirSync que también lo necesitamos
const { send } = require('process');
const message = require('./comandos/message');


client.on("ready", () => {
  
    console.log("Encendido Correctamente");
  });


  //const guild = client.guilds.resolve("847209307975188510")
  //guild.members.fetch()
  setInterval(() =>{

    let arf = Gamedig.query ({ 
      type: 'mtasa',
      host: '45.235.98.61', 
      port: '22053'
      
    }).then((arf) => {
      client.user.setActivity(`[ON]:${arf.players.length}/${arf.maxplayers} \n[DS]:`, {type: 'WATCHING'});
    })
    
    .catch((error) => {
      client.user.setPresence({ activities: [{ name: `Servidor en mantenimiento.(Offline o el bot no pudo conectarse.)` }] })});
      
    }, 5000)
////////////////////////HANDLER//////////////////////////
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

//eventos
for(const file of readdirSync('./eventos/')){
if(file.endsWith(".js")){
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./eventos/${file}`);
    client.on(fileName, fileContents.bind(null, client));}}

  
client.on('messageCreate', (message) => {

let prefix = '$'

if(message.channel.type === "dm") 
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

let usuario = message.mentions.members.first() || message.member;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)
}
  

    });

client.login("de reinbow")
