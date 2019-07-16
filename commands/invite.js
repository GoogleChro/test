const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setColor("#FF0000")
  .setTitle(`${client.user.username} Invite Link`)
  .setThumbnail("https://cdn.discordapp.com/avatars/591642154896588840/3fb32e696742e6af1bac5e41c7896a58.png?size=2048")
  .setDescription('**Invite Link:** [Click Here](https://discordapp.com/oauth2/authorize?client_id=591642154896588840&scope=bot&permissions=37014592)')
          
	message.channel.send(embed);
	//message.author.send(`You have searched for ${link} in ${ message.guild.name}`);
  
}

module.exports.config = {
  aliases: ['inv']
}

module.exports.help = {
  name: "invite"
}