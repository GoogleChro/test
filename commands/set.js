const Discord = require("discord.js");
const db = require('quick.db');
const prefixes = new db.table('PREFIXES');
const levelson = new db.table("LEVELSON");
const logchannels = new db.table('LOGCHANNELS');
const events = new db.table("EVENTS");

module.exports.run = async (client,message) => {
client.owners = [client.users.get("437578122100211713"),client.users.get("293148538886553602")];
  
var prefix = await prefixes.fetch(`${message.guild.id}`);
if(!prefix) {
  prefixes.set(`${message.guild.id}`, ">");
  prefix = '>'
}

let cmd = message.content.slice(prefix.length).split(' ').slice(1,2).join(' ');	
let args = message.content.slice(prefix.length).split(' ').slice(2).join(' ');

if(!message.member.hasPermission('MANAGE_SERVER') && message.author.id !== '437578122100211713' && message.author.id !== client.owners[0].id&&message.author.id !== client.owners[1].id)return message.channel.send('you need the ``"ADMINISTRATOR"`` permission to use this');
if(!cmd || cmd === "help"){
    let embed = new Discord.RichEmbed()
    .setTitle('How to use the Set command:')
    .setDescription('This is a moderation command used to set the server config')
    .setColor("#FF0000")
    .setTimestamp()
    .addField('**Command Usage:**', `${prefix}set prefix {new prefix}\n`)
     message.channel.send(embed);
}
if(cmd === "prefix"){
  if(!args)return message.channel.send("I need a prefix!");  
prefixes.fetch(`${message.guild.id}`).then(i => {
    if(i == null||i == NaN||i == undefined){
prefixes.set(`${message.guild.id}`, `${args}`);
    } else {
prefixes.set(`${message.guild.id}`, `${args}`);
   }
  });
  message.channel.send(`New server prefix set to: ${args}`);
}

 }


module.exports.config = {
  aliases: []
}

module.exports.help = {
  name: "set",

} // owo uwu