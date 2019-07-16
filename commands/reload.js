const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Reload")
  .setDescription("Sorry, the `reload` command can only be executed by the Developer.")
  .setColor("#FF0000");
  if(message.author.id !== '437578122100211713') return message.channel.send(embed);

  try{
    delete require.cache[require.resolve(`./${args[0]}.js`)];
  let Aembed = new Discord.RichEmbed()
  .setColor('#FF0000')
  .addField(`${args[0]}.js`, `has been successfully reloaded`)

    return message.channel.send(Aembed);
    message.delete();
     }catch(e){
     return message.channel.send("I don't see a command with that name...")
     }
}; 

module.exports.config = {
  aliases: []
}

module.exports.help = {
name: "reload"
}